import {
  expect,
  test,
  type Download,
  type Locator,
  type Page,
} from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Scene, Source } from "../src/types";

const downloads = path.resolve("public/downloads");
const offlineFile = path.join(downloads, "digital-bank-observability.html");
const errors = new WeakMap<Page, string[]>();
const excludedLiveContentTerms =
  /\b(?:user[\s\p{Pd}]*experience|(?:end|real)[\s\p{Pd}]*user[\s\p{Pd}]*monitoring|RUM|WePay|digital[\s\p{Pd}]*experience|session[\s\p{Pd}]*replay|onboarding|friction|abandonment|funnels?)\b/iu;
const app = (page: Page) => page.locator("#app");
const scene = (page: Page) => page.locator("#stage-mount > .scene");
const action = (page: Page, name: string) =>
  page.locator(`.toolbar [data-action="${name}"]`);

test.beforeEach(({ page }) => {
  const messages: string[] = [];
  errors.set(page, messages);
  page.on("pageerror", (error) => messages.push(error.message));
});

test.afterEach(({ page }) => {
  expect(
    errors.get(page),
    "The presentation must not raise browser errors",
  ).toEqual([]);
});

async function open(page: Page, url = "/#0", index: number | null = 0) {
  await page.goto(url);
  await expect(page.locator("html")).toHaveAttribute("data-ready", "true");
  await page.evaluate(() => document.fonts.ready);
  if (index !== null)
    await expect(app(page)).toHaveAttribute("data-scene", String(index));
}

async function data(page: Page): Promise<Scene[]> {
  return page.evaluate(
    () =>
      (
        window as unknown as Window & {
          __BANK_PRESENTATION__: { scenes: Scene[] };
        }
      ).__BANK_PRESENTATION__.scenes,
  );
}

async function speakerNotes(page: Page) {
  if ((await action(page, "notes").getAttribute("aria-pressed")) !== "true")
    await action(page, "notes").click();
  const notes = page.getByRole("complementary", { name: "Speaker notes" });
  await expect(notes).toBeVisible();
  return notes;
}

function expectBackendOnly(text: string, context: string) {
  const matches = Array.from(
    text.matchAll(new RegExp(excludedLiveContentTerms.source, "giu")),
    (match) => match[0],
  );
  expect([...new Set(matches)], context).toEqual([]);
}

async function controlledMotion(page: Page, index = 0) {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.clock.install({ time: new Date("2026-10-19T09:00:00Z") });
  await page.clock.pauseAt(new Date("2026-10-19T09:00:01Z"));
  await open(page, `/#${index}`, index);
}

async function expectComplete(visual: Locator) {
  await expect(visual).toHaveCount(1);
  await expect(
    visual.locator("path, rect, circle, line, polygon, polyline"),
  ).not.toHaveCount(0);
  await expect(visual.locator("text")).not.toHaveCount(0);
  await expect(visual.locator(".pending")).toHaveCount(0);
  await expect(
    visual.locator("animate, animateMotion, animateTransform"),
  ).toHaveCount(0);
  const hiddenBuilds = await visual
    .locator(".build")
    .evaluateAll(
      (builds) =>
        builds.filter((build) => getComputedStyle(build).opacity !== "1")
          .length,
    );
  expect(hiddenBuilds, "Complete diagrams must expose every build").toBe(0);
}

async function downloadBytes(download: Download) {
  expect(await download.failure()).toBeNull();
  const filename = await download.path();
  expect(filename).not.toBeNull();
  return readFile(filename!);
}

async function noBrokenImages(page: Page) {
  await expect
    .poll(() =>
      page.locator("img").evaluateAll((elements) =>
        elements
          .map((element) => element as HTMLImageElement)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.src),
      ),
    )
    .toEqual([]);
}

test("all 16 direct routes render distinct complete graphics, notes, public sources and the 18-minute plan", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await open(page);
  const scenes = await data(page);
  expect(scenes).toHaveLength(16);
  expect(new Set(scenes.map((item) => item.id)).size).toBe(16);
  expect(scenes.reduce((total, item) => total + item.notes.seconds, 0)).toBe(
    1080,
  );
  const graphics = new Set<string>();

  for (const [index, item] of scenes.entries()) {
    await open(page, `/#${index}`, index);
    await expect(scene(page).locator("h1")).toHaveText(
      `${item.title} ${item.emphasis}`,
    );
    await expect(scene(page)).toHaveAttribute("data-scene-id", item.id);
    await expect(scene(page)).toHaveAttribute("data-phase", "3");
    const visual = scene(page).locator(".bank-visual");
    await expectComplete(visual);
    await expect(visual).toHaveAccessibleName(`${item.title} ${item.emphasis}`);
    graphics.add(
      await visual.evaluate((svg) =>
        Array.from(svg.children)
          .filter((child) => child.tagName.toLowerCase() !== "title")
          .map((child) => child.outerHTML)
          .join(""),
      ),
    );
    expect(item.sources.length).toBeGreaterThan(0);
    await expect(scene(page).locator(".sources a")).toHaveCount(
      Math.min(3, item.sources.length),
    );
    for (const source of item.sources)
      expect(source.url).toMatch(/^https:\/\/www\.elastic\.co\//);
    if (index > 0)
      await expect(action(page, "notes")).toHaveAttribute(
        "aria-pressed",
        "true",
      );
    if ((await action(page, "notes").getAttribute("aria-pressed")) !== "true")
      await action(page, "notes").click();
    const notes = page.getByRole("complementary", { name: "Speaker notes" });
    await expect(notes).toBeVisible();
    await expect(notes.getByRole("heading", { level: 2 })).toHaveText(
      `${item.title} ${item.emphasis}`,
    );
    await expect(notes).toContainText("FULL STORY 18:00");
    for (const text of [
      item.notes.opening,
      item.notes.body,
      item.notes.prompt,
      item.notes.transition,
      item.qualification,
      item.requirements,
    ]) {
      expect(text.trim().length).toBeGreaterThan(0);
      await expect(notes).toContainText(text);
    }
    await expect(notes.locator("a")).toHaveCount(item.sources.length);
    expect(
      await notes
        .locator("a")
        .evaluateAll((links) => links.map((link) => link.getAttribute("href"))),
    ).toEqual(item.sources.map((source) => source.url));
    await noBrokenImages(page);
  }
  expect(graphics.size, "Every scene needs its own visual composition").toBe(
    16,
  );
});

test("malformed hashes normalize safely and numeric routes clamp at the ends", async ({
  page,
}) => {
  for (const [hash, expected] of [
    ["banana", 0],
    ["-1", 0],
    ["2.5", 0],
    ["9007199254740992", 0],
    ["", 0],
    ["0005", 5],
    ["999", 15],
  ] as const) {
    await open(page, `/#${hash}`, expected);
    await expect(page).toHaveURL(new RegExp(`#${expected}$`));
  }
  await expect(action(page, "next")).toBeDisabled();
  await page.keyboard.press("ArrowRight");
  await expect(app(page)).toHaveAttribute("data-scene", "15");
  await page.keyboard.press("Home");
  await expect(action(page, "previous")).toBeDisabled();
  await page.keyboard.press("ArrowLeft");
  await expect(app(page)).toHaveAttribute("data-scene", "0");
});

test("browser Back and Forward recover the exact scene routes", async ({
  page,
}) => {
  await open(page);
  await action(page, "next").click();
  await action(page, "next").click();
  await expect(page).toHaveURL(/#2$/);
  await page.goBack();
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await page.goBack();
  await expect(app(page)).toHaveAttribute("data-scene", "0");
  await page.goForward();
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await page.goForward();
  await expect(app(page)).toHaveAttribute("data-scene", "2");
});

test("navigation keys and buttons change scenes immediately without consuming animation builds", async ({
  page,
}) => {
  await controlledMotion(page);
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await page.keyboard.press("ArrowRight");
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await page.keyboard.press("PageDown");
  await expect(app(page)).toHaveAttribute("data-scene", "2");
  await page.keyboard.press("Space");
  await expect(app(page)).toHaveAttribute("data-scene", "3");
  await page.keyboard.press("PageUp");
  await expect(app(page)).toHaveAttribute("data-scene", "2");
  await action(page, "previous").click();
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await page.keyboard.press("End");
  await expect(app(page)).toHaveAttribute("data-scene", "15");
  await page.keyboard.press("Home");
  await expect(app(page)).toHaveAttribute("data-scene", "0");
});

test("on-scene motion plays all four phases and loops continuously", async ({
  page,
}) => {
  await controlledMotion(page, 7);
  const item = (await data(page))[7];
  for (const phase of [0, 1, 2, 3]) {
    await expect(app(page)).toHaveAttribute("data-phase", String(phase));
    await expect(page.locator("#phase-caption")).toHaveText(item.steps[phase]);
    await expect(page.locator("#phase-dots .current")).toHaveCount(1);
    await expect(page.locator("#phase-dots i").nth(phase)).toHaveClass(
      "current",
    );
    if (phase < 3) await page.clock.runFor(3200);
  }
  await page.clock.runFor(4800);
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await expect(app(page)).toHaveAttribute("data-scene", "7");
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
});

test("pause holds the phase, play resumes it, and replay restarts the current scene", async ({
  page,
}) => {
  await controlledMotion(page, 5);
  await page.clock.runFor(3200);
  await page
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await page.clock.runFor(30_000);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
  await expect(page.locator("#stage-wrap")).toHaveClass(/motion-paused/);
  await page
    .getByRole("button", { name: "Play animation", exact: true })
    .click();
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "2");
  await page.getByRole("button", { name: "Replay", exact: true }).click();
  await expect(app(page)).toHaveAttribute("data-scene", "5");
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
});

test("Help replaces itself with Evidence while keeping motion gated until the modal closes", async ({
  page,
}) => {
  await controlledMotion(page, 7);
  await page.clock.runFor(3200);
  await page.getByRole("button", { name: "Help and downloads" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(1);
  await expect(page.getByRole("dialog")).toContainText(
    "Controls & companion files",
  );
  await page.clock.runFor(20_000);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
  await page.getByRole("button", { name: "Browse public evidence" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(1);
  await expect(page.getByRole("dialog")).toContainText(
    "Public evidence & qualifications",
  );
  await expect(
    page.getByRole("dialog").locator(".evidence-list a"),
  ).not.toHaveCount(0);
  await page.clock.runFor(20_000);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
  await page.keyboard.press("ArrowRight");
  await expect(app(page)).toHaveAttribute("data-scene", "7");
  await page.getByRole("button", { name: "Close dialog" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "2");
});

test("reduced motion and static rendering expose complete diagrams and disable build playback", async ({
  page,
}) => {
  await open(page, "/#7", 7);
  await expectComplete(scene(page).locator(".bank-visual"));
  await expect(
    page.getByRole("button", { name: "Pause animation", exact: true }),
  ).toBeDisabled();
  await expect(page.locator("#phase-caption")).toHaveText(
    "Complete view · reduced motion",
  );
  await page.keyboard.press("r");
  await expect(app(page)).toHaveAttribute("data-phase", "3");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(app(page)).toHaveAttribute("data-phase", "3");
  await expectComplete(scene(page).locator(".bank-visual"));
  await open(page, "/?render=static#7", 7);
  await expectComplete(scene(page).locator(".bank-visual"));
  await expect(page.locator(".toolbar, .playback")).toHaveCount(0);
  await page.keyboard.press("ArrowRight");
  await expect(app(page)).toHaveAttribute("data-scene", "7");
});

test("overview contains 16 complete SVG thumbnails and selecting one changes the scene", async ({
  page,
}) => {
  await open(page);
  await page.keyboard.press("g");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText(/16 scenes\./);
  await expect(dialog.locator(".thumb")).toHaveCount(16);
  await expect(dialog.locator(".bank-visual")).toHaveCount(16);
  await dialog.getByRole("button", { name: "Close dialog" }).focus();
  await page.keyboard.press("Tab");
  await expect(dialog.locator(".thumb").nth(0)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(dialog.locator(".thumb").nth(1)).toBeFocused();
  for (const visual of await dialog.locator(".bank-visual").all())
    await expectComplete(visual);
  await noBrokenImages(page);
  await dialog
    .getByRole("button", { name: "Go to scene 16:", exact: false })
    .click();
  await expect(app(page)).toHaveAttribute("data-scene", "15");
  await expect(dialog).toHaveCount(0);
  await page.keyboard.press("g");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("filmstrip provides complete thumbnails, follows selection and toggles with T", async ({
  page,
}) => {
  await open(page, "/#5", 5);
  await page.keyboard.press("t");
  const strip = page.getByRole("region", { name: "Scene filmstrip" });
  await expect(strip).toBeVisible();
  await expect(action(page, "filmstrip")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(strip.locator(".thumb")).toHaveCount(16);
  await expect(strip.locator(".selected")).toHaveAttribute("data-goto", "5");
  await strip.locator(".thumb").first().focus();
  await page.keyboard.press("Tab");
  await expect(strip.locator(".thumb").nth(1)).toBeFocused();
  for (const visual of await strip.locator(".bank-visual").all())
    await expectComplete(visual);
  await strip
    .getByRole("button", { name: "Go to scene 8:", exact: false })
    .click();
  await expect(app(page)).toHaveAttribute("data-scene", "7");
  await expect(strip.locator(".selected")).toHaveAttribute("data-goto", "7");
  await page.keyboard.press("t");
  await expect(strip).toBeHidden();
  await expect(action(page, "filmstrip")).toHaveAttribute(
    "aria-pressed",
    "false",
  );
});

test("N opens notes with timing, questions, transitions and evidence that follow navigation", async ({
  page,
}) => {
  await open(page, "/#10", 10);
  await page.keyboard.press("n");
  const notes = page.getByRole("complementary", { name: "Speaker notes" });
  await expect(notes).toBeVisible();
  await expect(notes).toContainText("SCENE 11");
  await expect(notes).toContainText("FULL STORY 18:00");
  await expect(notes.getByRole("heading", { level: 3 })).toHaveText([
    "Opening",
    "Talking points",
    "Ask",
    "Transition",
    "Qualifications",
    "Public evidence",
  ]);
  await expect(notes.getByRole("heading", { level: 2 })).toContainText(
    "Workflows:",
  );
  await page.keyboard.press("ArrowRight");
  await expect(notes).toContainText("SCENE 12");
  await expect(notes.getByRole("heading", { level: 2 })).toContainText(
    "Workflows:",
  );
  await page.keyboard.press("ArrowRight");
  await expect(notes).toContainText("SCENE 13");
  await expect(notes.getByRole("heading", { level: 2 })).toContainText(
    /operating model/i,
  );
  await expect(notes).toContainText("Elasticsearch data tiers");
  await page.getByRole("button", { name: "Close speaker notes" }).click();
  await expect(notes).toBeHidden();
  await expect(action(page, "notes")).toHaveAttribute("aria-pressed", "false");
});

test("presenter timer pauses, survives navigation and resumes elapsed time", async ({
  page,
}) => {
  await controlledMotion(page);
  await page.clock.runFor(65_000);
  await expect(
    page.getByRole("button", { name: "Pause presenter timer" }),
  ).toHaveText("01:05");
  await page.getByRole("button", { name: "Pause presenter timer" }).click();
  await page.clock.runFor(120_000);
  await expect(
    page.getByRole("button", { name: "Resume presenter timer" }),
  ).toHaveText("01:05");
  await action(page, "next").click();
  await expect(
    page.getByRole("button", { name: "Resume presenter timer" }),
  ).toHaveText("01:05");
  await page.getByRole("button", { name: "Resume presenter timer" }).click();
  await page.clock.runFor(10_000);
  await expect(
    page.getByRole("button", { name: "Pause presenter timer" }),
  ).toHaveText("01:15");
});

test("native select, button and summary keyboard behavior does not trigger global navigation", async ({
  page,
}) => {
  await open(page);
  const density = page.getByRole("combobox", { name: "Content density" });
  await density.evaluate((select) => {
    document.addEventListener("keydown", (event) => {
      if (event.target !== select) return;
      select.setAttribute("data-last-key", event.key);
      select.setAttribute(
        "data-key-default-prevented",
        String(event.defaultPrevented),
      );
    });
  });
  await density.focus();
  await density.press("ArrowRight");
  await expect(density).toHaveAttribute("data-last-key", "ArrowRight");
  await expect(density).toHaveAttribute("data-key-default-prevented", "false");
  await expect(app(page)).toHaveAttribute("data-scene", "0");
  await density.press("Escape");
  await density.selectOption("4");
  await expect(density).toHaveValue("4");
  await expect(app(page)).toHaveAttribute("data-density", "4");
  await expect(scene(page)).toHaveAttribute("data-density", "4");
  await expect(app(page)).toHaveAttribute("data-scene", "0");
  await action(page, "next").focus();
  await page.keyboard.press("Space");
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await action(page, "overview").focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 390, height: 844 });
  const summary = page.locator(".readable > summary");
  await summary.focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".readable")).toHaveAttribute("open", "");
  await expect(page.locator("#readable-text")).toBeVisible();
  await expect(app(page)).toHaveAttribute("data-scene", "1");
  await page.keyboard.press("Enter");
  await expect(page.locator(".readable")).not.toHaveAttribute("open");
});

test("Present enters real browser fullscreen and F leaves it", async ({
  page,
}) => {
  await open(page);
  await action(page, "fullscreen").click();
  await expect
    .poll(() =>
      page.evaluate(
        () => document.fullscreenElement === document.documentElement,
      ),
    )
    .toBe(true);
  await page.keyboard.press("f");
  await expect
    .poll(() => page.evaluate(() => document.fullscreenElement === null))
    .toBe(true);
  await expect(page.getByRole("status")).not.toContainText("Use your browser");
});

test("laser and drawing are exclusive, clear removes ink, navigation clears it and Escape resumes playback", async ({
  page,
}) => {
  await controlledMotion(page);
  const wrap = page.locator("#stage-wrap");
  const box = (await wrap.boundingBox())!;
  const x = box.x + box.width * 0.4,
    y = box.y + box.height * 0.4;
  await page.keyboard.press("l");
  await expect(page.locator('[data-action="laser"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.mouse.move(x, y);
  await expect(page.locator("#laser-dot")).toBeVisible();
  await page.keyboard.press("d");
  await expect(page.locator('[data-action="laser"]')).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  await expect(page.locator('[data-action="draw"]')).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator("#laser-dot")).toBeHidden();
  await page.clock.runFor(20_000);
  await expect(app(page)).toHaveAttribute("data-phase", "0");
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 90, y + 35, { steps: 4 });
  await page.mouse.up();
  await expect(page.locator("#ink path")).toHaveCount(1);
  await expect(page.locator("#ink path")).toHaveAttribute("d", / L/);
  await page.keyboard.press("c");
  await expect(page.locator("#ink path")).toHaveCount(0);
  await page.mouse.down();
  await page.mouse.move(x + 120, y + 50);
  await page.mouse.up();
  await expect(page.locator("#ink path")).toHaveCount(1);
  await action(page, "next").click();
  await expect(page.locator("#ink path")).toHaveCount(0);
  await expect(page.locator("#stage-mount .bank-visual")).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(page.locator('[data-action="draw"]')).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  await expect(wrap).not.toHaveClass(/drawing|lasering/);
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
});

test("densities 1, 3 and 5 keep all diagrams, sources and material qualifications visible", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await open(page);
  const scenes = await data(page);
  for (const [index, item] of scenes.entries()) {
    await open(page, `/#${index}`, index);
    let shapeCount: number | undefined;
    for (const level of [1, 3, 5]) {
      await page
        .getByRole("combobox", { name: "Content density" })
        .selectOption(String(level));
      await expect(scene(page)).toHaveAttribute("data-density", String(level));
      const visual = scene(page).locator(".bank-visual");
      await expectComplete(visual);
      const current = await visual
        .locator("path, rect, circle, line, polygon, polyline, text")
        .count();
      if (shapeCount !== undefined) expect(current).toBe(shapeCount);
      shapeCount = current;
      await expect(scene(page).locator("h1")).toBeVisible();
      await expect(scene(page).locator(".qualification > b")).toBeVisible();
      await expect(
        scene(page).locator(".qualification > span").first(),
      ).toHaveText(item.qualification);
      await expect(
        scene(page).locator(".qualification > span").first(),
      ).toBeVisible();
      for (const source of await scene(page).locator(".sources a").all())
        await expect(source).toBeVisible();
      if (level === 1) {
        await expect(scene(page).locator(".lead")).toBeHidden();
        await expect(scene(page).locator(".takeaway")).toBeHidden();
      } else {
        await expect(scene(page).locator(".lead")).toBeVisible();
        await expect(scene(page).locator(".takeaway")).toBeVisible();
      }
      if (level === 5) {
        await expect(scene(page).locator(".deeper")).toBeVisible();
        await expect(scene(page).locator(".full-requirements")).toBeVisible();
        await expect(scene(page).locator(".full-requirements")).toHaveText(
          item.requirements,
        );
      } else
        await expect(scene(page).locator(".full-requirements")).toBeHidden();
    }
  }
});

test("desktop and small mobile layouts stay within the viewport and expose readable scene text", async ({
  page,
}) => {
  test.setTimeout(90_000);
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 1024, height: 768 },
    { width: 390, height: 844 },
    { width: 320, height: 740 },
  ]) {
    await page.setViewportSize(viewport);
    for (const index of Array.from({ length: 16 }, (_, index) => index)) {
      await open(page, `/#${index}`, index);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const box = (await page.locator("#stage-wrap").boundingBox())!;
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
      expect(box.width / box.height).toBeCloseTo(16 / 9, 2);
      if (viewport.width <= 700) {
        await page.getByText("Read scene text", { exact: true }).click();
        const item = (await data(page))[index];
        await expect(page.locator("#readable-text")).toContainText(
          item.qualification,
        );
        await expect(page.locator("#readable-text")).toContainText(
          item.requirements,
        );
        await expect(page.locator("#readable-text a")).toHaveCount(
          item.sources.length,
        );
        expect(
          await page
            .locator(".readable")
            .evaluate((element) =>
              parseFloat(getComputedStyle(element).fontSize),
            ),
        ).toBeGreaterThanOrEqual(14);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
      }
    }
  }
});

test("print route contains exactly 16 complete, static pages at the delivery density", async ({
  page,
}) => {
  await open(page, "/?print&density=3", null);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".print-page")).toHaveCount(16);
  await expect(
    page.locator('.print-page .scene[data-density="3"][data-phase="3"]'),
  ).toHaveCount(16);
  await expect(page.locator(".toolbar, .playback")).toHaveCount(0);
  const scenes = await data(page);
  for (const [index, item] of scenes.entries()) {
    const printed = page.locator(".print-page").nth(index);
    await expectComplete(printed.locator(".bank-visual"));
    await expect(printed.locator("h1")).toHaveText(
      `${item.title} ${item.emphasis}`,
    );
    await expect(printed.locator(".qualification > span").first()).toHaveText(
      item.qualification,
    );
    await expect(printed.locator(".sources a")).not.toHaveCount(0);
    expect(
      await printed.evaluate((element) => ({
        width: element.clientWidth,
        height: element.clientHeight,
      })),
    ).toEqual({ width: 1280, height: 720 });
  }
  await noBrokenImages(page);
});

test("ordinary beforeprint settles the current scene and afterprint restores its phase and paused state", async ({
  page,
}) => {
  await controlledMotion(page, 7);
  await page.clock.runFor(3200);
  await page
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));
  await expect(app(page)).toHaveAttribute("data-scene", "7");
  await expect(app(page)).toHaveAttribute("data-phase", "3");
  await expectComplete(scene(page).locator(".bank-visual"));
  await page.clock.runFor(20_000);
  await expect(app(page)).toHaveAttribute("data-phase", "3");
  await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
  await expect(app(page)).toHaveAttribute("data-phase", "1");
  await expect(
    page.getByRole("button", { name: "Play animation", exact: true }),
  ).toBeVisible();
  await page.clock.runFor(20_000);
  await expect(app(page)).toHaveAttribute("data-phase", "1");
  await page
    .getByRole("button", { name: "Play animation", exact: true })
    .click();
  await page.clock.runFor(3200);
  await expect(app(page)).toHaveAttribute("data-phase", "2");
});

test("standalone file works with networking disabled, bundled fonts and downloadable notes and evidence", async ({
  page,
  context,
}) => {
  test.setTimeout(90_000);
  await open(page);
  const hostedScenes = await data(page);
  const remoteRequests: string[] = [];
  page.on("request", (request) => {
    if (/^https?:/.test(request.url())) remoteRequests.push(request.url());
  });
  await context.setOffline(true);
  await open(page, pathToFileURL(offlineFile).href, 0);
  await expect(page).toHaveTitle("Elastic Observability for Digital Banking");
  const scenes = await data(page);
  expect(
    scenes,
    "The offline export must contain the current hosted narrative",
  ).toEqual(hostedScenes);
  for (const [index, item] of scenes.entries()) {
    await page.evaluate((value) => {
      location.hash = String(value);
    }, index);
    await expect(app(page)).toHaveAttribute("data-scene", String(index));
    await expectComplete(scene(page).locator(".bank-visual"));
    await expect(scene(page).locator("h1")).toHaveText(
      `${item.title} ${item.emphasis}`,
    );
  }
  const fonts = await page.evaluate(() =>
    Array.from(document.fonts).map((font) => ({
      family: font.family,
      status: font.status,
    })),
  );
  expect(
    fonts.some(
      (font) =>
        font.family.includes("Inter Variable") && font.status === "loaded",
    ),
  ).toBe(true);
  expect(
    fonts.some(
      (font) =>
        font.family.includes("IBM Plex Mono") && font.status === "loaded",
    ),
  ).toBe(true);
  await noBrokenImages(page);
  await page.getByRole("button", { name: "Help and downloads" }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "self-contained offline presentation",
  );
  await expect(
    page.getByRole("link", {
      name: "Standalone offline presentation",
      exact: true,
    }),
  ).toHaveCount(0);
  for (const [label, filename] of [
    ["Presenter notes", "Presenter Notes.md"],
    ["Public evidence register", "Evidence Register.md"],
  ]) {
    const received = page.waitForEvent("download");
    await page.getByRole("link", { name: label, exact: true }).click();
    const download = await received;
    expect(download.suggestedFilename()).toBe(filename);
    expect(await downloadBytes(download)).toEqual(
      await readFile(path.join(downloads, filename)),
    );
  }
  expect(
    remoteRequests,
    "A standalone presentation must render without HTTP requests",
  ).toEqual([]);
});

test("all four hosted download links return the actual non-placeholder delivery files", async ({
  page,
}) => {
  await open(page);
  const scenes = await data(page);
  await page.getByRole("button", { name: "Help and downloads" }).click();
  const files = [
    ["16-page PDF", "digital-bank-observability.pdf"],
    ["Standalone offline presentation", "digital-bank-observability.html"],
    ["Presenter notes", "Presenter Notes.md"],
    ["Public evidence register", "Evidence Register.md"],
  ];
  await expect(page.getByRole("dialog").locator("a.download")).toHaveCount(4);
  for (const [label, filename] of files) {
    const received = page.waitForEvent("download");
    await page.getByRole("link", { name: label, exact: true }).click();
    const download = await received;
    expect(download.suggestedFilename()).toBe(filename);
    const bytes = await downloadBytes(download);
    expect(bytes).toEqual(await readFile(path.join(downloads, filename)));
    if (filename.endsWith(".pdf")) {
      expect(bytes.subarray(0, 5).toString()).toBe("%PDF-");
      expect(bytes.length).toBeGreaterThan(20_000);
      expect(bytes.toString("latin1")).toMatch(/\/Count\s+16\b/);
    } else if (filename.endsWith(".html")) {
      expect(bytes.length).toBeGreaterThan(100_000);
      expect(bytes.toString()).toContain('id="offline-data"');
      expect(bytes.toString()).toContain("data:font/woff2;base64,");
      expect(bytes.toString()).toContain(
        "<title>Elastic Observability for Digital Banking</title>",
      );
    } else {
      expect(bytes.length).toBeGreaterThan(3000);
      expect(bytes.toString()).not.toMatch(/^\s*<!doctype html/i);
      expect(bytes.toString()).not.toMatch(/placeholder|coming soon/i);
      if (filename === "Presenter Notes.md") {
        expect(bytes.toString()).toMatch(
          /^# Elastic Observability for Digital Banking — presenter notes\n/,
        );
        for (const [index, item] of scenes.entries())
          expect(bytes.toString()).toContain(
            `## ${String(index + 1).padStart(2, "0")} — ${item.title} ${item.emphasis}`,
          );
      } else {
        expect(bytes.toString()).toMatch(
          /^# Elastic Observability for Digital Banking — public evidence register\n/,
        );
        expect(bytes.toString()).toContain(
          "None of these historical results is attributed to Streams or Workflows",
        );
      }
    }
  }
});

test("historical customer examples retain distinct metrics without attributing their results to Streams or Workflows", async ({
  page,
}) => {
  await open(page, "/?density=1#13", 13);
  await expect(scene(page).locator("h1")).toContainText("Emirates NBD");
  const qualification = scene(page).locator(".qualification > span").first();
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(/On-premises logs \+ APM/);
  await expect(qualification).toContainText(
    /not a Saudi-hosting or regulatory-approval claim/,
  );
  await expect(scene(page).locator(".qualification > b")).toHaveText(
    "CUSTOMER-REPORTED EXAMPLE",
  );
  await expect(scene(page).locator(".visual")).toContainText(
    /time to locate problems/i,
  );
  await expect(scene(page).locator(".visual")).toContainText("Days");
  await expect(scene(page).locator(".visual")).toContainText("Minutes");
  await expect(scene(page).locator(".sources a")).toHaveAttribute(
    "href",
    "https://www.elastic.co/customers/emirates-nbd/",
  );
  let notes = await speakerNotes(page);
  await expect(notes).toContainText(
    /not proof that Streams or Workflows produced the reported result/,
  );
  await expect(notes).toContainText(/not a measured guarantee or a forecast/);

  await open(page, "/?density=1#14", 14);
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(
    /Reported examples, not forecasts/i,
  );
  for (const context of [/Discover/, /ECE/, /AWS/])
    await expect(qualification).toContainText(context);
  await expect(qualification).toContainText(/not.{0,20}on[\s-]premises/i);
  await expect(scene(page).locator(".qualification > b")).toHaveText(
    "CUSTOMER-REPORTED EXAMPLE",
  );
  const visual = scene(page).locator(".visual");
  for (const label of [
    /Oney Bank/,
    /API-incident detection/,
    /20/,
    /Discover/,
    /Historical data retrieval/,
    /24\+/,
    /hours/i,
    /Minutes/,
  ])
    await expect(visual).toContainText(label);
  const sources = await scene(page)
    .locator(".sources a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(sources).toHaveLength(2);
  expect(sources[0]).toBe("https://www.elastic.co/customers/oney-bank");
  expect(sources[1]).toBe("https://www.elastic.co/customers/discover");
  notes = await speakerNotes(page);
  await expect(notes).toContainText(/detection, not resolution or MTTR/);
  await expect(notes).toContainText(/historical[\s-]data retrieval/i);
  await expect(notes).toContainText(/24 hours or more/);
  await expect(notes).toContainText(/minutes/i);
  await expect(notes).toContainText(/Elastic Cloud Enterprise|\bECE\b/);
  await expect(notes).toContainText(/AWS/);
  await expect(notes).toContainText(
    /not evidence that modern Streams or Workflows/,
  );
  await expect(notes).toContainText(
    /50% lower storage requirements, not total observability spend/,
  );
});

test("Streams pages preserve GA availability, optional approved-model assistance and reviewed payment evidence", async ({
  page,
}) => {
  await open(page, "/?density=1#5", 5);
  await expect(scene(page).locator("h1")).toContainText("Streams:");
  const qualification = scene(page).locator(".qualification > span").first();
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(/Stack 9\.2\+/);
  await expect(qualification).toContainText(/approved model/);
  await expect(qualification).toContainText(/entitlement/);
  await expect(qualification).toContainText(/features vary by version/);
  await expect(scene(page).locator(".sources a").first()).toHaveAttribute(
    "href",
    "https://www.elastic.co/docs/solutions/observability/streams/streams",
  );
  let notes = await speakerNotes(page);
  await expect(notes).toContainText(
    /Streams management is documented GA from Stack 9\.2/,
  );
  await expect(notes).toContainText(/AI pipeline suggestions are optional/);
  await expect(notes).toContainText(/configured generative AI connector/);
  await expect(notes).toContainText(/manual processors are also supported/);
  await expect(notes).toContainText(/sample logs to the configured model/);
  await expect(notes).toContainText(
    /Wired partitioning and Streams-specific workflow actions have separate Preview status/,
  );

  await open(page, "/?density=1#6", 6);
  await expect(scene(page).locator("h1")).toContainText("Streams:");
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(
    /Synthetic log-processing illustration/,
  );
  await expect(qualification).toContainText(
    /Field extraction is configured and reviewed/,
  );
  await expect(qualification).toContainText(/these are operational events/);
  notes = await speakerNotes(page);
  await expect(notes).toContainText(/not a real Kibana capture/);
  await expect(notes).toContainText(/inspect failed processing/);
  await expect(notes).toContainText(/without wired-stream partitioning/);
  await expect(notes).toContainText(
    /Waiting events and service health do not establish payment settlement or correct balances/,
  );
});

test("Workflows pages retain GA Enterprise requirements, configured external actions and explicit bank approval", async ({
  page,
}) => {
  await open(page, "/?density=1#10", 10);
  await expect(scene(page).locator("h1")).toContainText("Workflows:");
  const qualification = scene(page).locator(".qualification > span").first();
  await expect(qualification).toBeVisible();
  for (const term of [
    /Stack 9\.4\+/,
    /GA/,
    /Enterprise/,
    /external integrations must be configured/,
  ])
    await expect(qualification).toContainText(term);
  let notes = await speakerNotes(page);
  await expect(notes).toContainText(/Core Workflows is GA from Stack 9\.4/);
  await expect(notes).toContainText(
    /Enterprise entitlement on self-managed and Elastic Cloud Hosted/,
  );
  await expect(notes).toContainText(
    /credentials, network path and authorization/,
  );
  await expect(notes).toContainText(
    /AI authoring have separate maturity and connection requirements/,
  );
  await expect(notes).toContainText(
    /does not use Preview Streams-specific workflow steps/,
  );

  await open(page, "/?density=1#11", 11);
  await expect(scene(page).locator("h1")).toContainText("Workflows:");
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(/Illustrative authored runbook/);
  await expect(qualification).toContainText(
    /approval use configured integrations or the bank's existing process/,
  );
  notes = await speakerNotes(page);
  await expect(notes).toContainText(
    /not a native approval screen or a prebuilt banking workflow/,
  );
  await expect(notes).toContainText(
    /customer-impacting response requires the bank's existing approval process or an explicitly configured approval integration/,
  );
  await expect(notes).toContainText(
    /appropriate credentials and a separate authorized action/,
  );
  await expect(notes).toContainText(
    /earlier pending transfers need separate reconciliation/,
  );
  await expect(notes).toContainText(
    /No transaction handling, system change or notification is executed/,
  );
  await expect(notes).toContainText(/fresh latency, errors/);
  await expect(notes).toContainText(/pending work is draining/);
});

test("RCA and FSI use cases retain candidate-cause, observed-coverage and payment-state boundaries", async ({
  page,
}) => {
  await open(page, "/?density=1#8", 8);
  const qualification = scene(page).locator(".qualification > span").first();
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(
    /owner verifies the actual setting and alternatives/,
  );
  await expect(qualification).toContainText(
    /uninstrumented provider internals remain unobserved/,
  );
  await expect(scene(page).locator(".visual")).toContainText("Candidate");
  await expect(scene(page).locator(".visual")).toContainText("Owner verified");
  await expect(scene(page).locator(".qualification > b")).toContainText(
    "ILLUSTRATIVE",
  );
  let notes = await speakerNotes(page);
  await expect(notes).toContainText(/actual setting/);
  await expect(notes).toContainText(/alternative explanations/);
  await expect(notes).toContainText(
    /not a real investigation or an autonomous diagnosis/,
  );
  await expect(notes).toContainText(
    /API success response alone does not establish settled funds or correct balances/,
  );

  await open(page, "/?density=1#9", 9);
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(
    /Proposed backend use cases and indicators/,
  );
  await expect(qualification).toContainText(
    /Processing health does not prove settlement, balances or reconciliation/,
  );
  await expect(scene(page).locator(".qualification > b")).toContainText(
    "ILLUSTRATIVE",
  );
  notes = await speakerNotes(page);
  for (const boundary of [
    /eligible events/,
    /thresholds/,
    /processing deadlines/,
    /appropriate source instrumentation/,
  ])
    await expect(notes).toContainText(boundary);
  await expect(notes).toContainText(/does not establish financial correctness/);
  await expect(notes).toContainText(
    /do not promise reduced fraud, revenue uplift or compliance/,
  );
});

test("operating-model choice keeps approved data flows, optional model paths and local-inference limits explicit", async ({
  page,
}) => {
  await open(page, "/?density=1#12", 12);
  const qualification = scene(page).locator(".qualification > span").first();
  await expect(qualification).toBeVisible();
  await expect(qualification).toContainText(
    /Self-managed deployment is supported/,
  );
  await expect(qualification).toContainText(
    /licenses and approved data flows need design and validation/,
  );
  const notes = await speakerNotes(page);
  await expect(notes).toContainText(/snapshot repository and subscription/);
  await expect(notes).toContainText(
    /not a promise to store everything indefinitely or achieve universal savings/,
  );
  await expect(notes).toContainText(
    /package, upgrade and support dependencies/,
  );
  await expect(notes).toContainText(
    /AI-assisted features need an explicitly approved model path/,
  );
  await expect(notes).toContainText(
    /on-premises storage does not establish local inference/,
  );
  await expect(notes).toContainText(
    /No Saudi-hosting or compliance assurance is implied/,
  );
  await expect(notes).toContainText(/optional model connection/);
});

test("published content remains backend-only with messaging, batch processing, infrastructure and a coherent latency/backlog response", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await open(page);
  const payload = await page.evaluate(
    () =>
      (
        window as unknown as Window & {
          __BANK_PRESENTATION__: { scenes: Scene[]; evidence: Source[] };
        }
      ).__BANK_PRESENTATION__,
  );
  expect(payload.scenes).toHaveLength(16);
  expect(payload.evidence.length).toBeGreaterThan(0);
  expectBackendOnly(
    JSON.stringify(payload),
    "All scene copy, notes and evidence metadata",
  );
  const visuals = new Map<number, string>();
  for (const index of Array.from({ length: 16 }, (_, index) => index)) {
    await open(page, `/#${index}`, index);
    const visual = scene(page).locator(".bank-visual");
    expectBackendOnly(
      await visual.evaluate((svg) => svg.outerHTML),
      `Rendered SVG for scene ${index + 1}`,
    );
    visuals.set(
      index,
      await visual
        .locator("text")
        .evaluateAll((labels) =>
          labels.map((label) => label.textContent).join(" "),
        ),
    );
  }
  const workloads = `${visuals.get(1)} ${visuals.get(9)}`;
  expect(workloads).toMatch(/\bMessaging\b/i);
  expect(workloads).toMatch(/\bBatch\s+processing\b/i);
  expect(
    visuals.get(7),
    "Resource context must retain the Infrastructure tile",
  ).toMatch(/\bInfrastructure\b/i);
  for (const index of [8, 11]) {
    const item = payload.scenes[index];
    const story = `${item.title} ${item.emphasis} ${item.lead} ${item.detail} ${item.takeaway} ${item.notes.body} ${visuals.get(index)}`;
    expect(
      story,
      `Scene ${index + 1} must follow the same backend latency/backlog investigation`,
    ).toMatch(/\blatency\b/i);
    expect(story).toMatch(/\bbacklog\b/i);
  }
  for (const filename of ["Presenter Notes.md", "Evidence Register.md"]) {
    expectBackendOnly(
      await readFile(path.join(downloads, filename), "utf8"),
      `Generated ${filename}`,
    );
  }
});
