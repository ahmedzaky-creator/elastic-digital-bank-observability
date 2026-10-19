import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
const out = path.resolve("work/qa");
await fs.mkdir(out, { recursive: true });
const representatives = process.argv.includes("--representatives");
const indices = representatives
  ? [0, 3, 7, 11]
  : Array.from({ length: 16 }, (_, i) => i);
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const report = { pageErrors: [], checks: [] };
try {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    reducedMotion: "reduce",
  });
  page.on("pageerror", (e) => report.pageErrors.push(e.message));
  for (const density of [1, 3, 5])
    for (const i of indices) {
      await page.goto(
        `${process.env.BANK_PREVIEW_URL || "http://127.0.0.1:4188/"}?render=static&density=${density}#${i}`,
        { waitUntil: "networkidle" },
      );
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: path.join(
          out,
          `scene-${String(i + 1).padStart(2, "0")}-d${density}.png`,
        ),
      });
      const check = await page.evaluate(() => {
        const stage = document.querySelector(".scene"),
          svg = stage.querySelector(".bank-visual");
        const clipped = [],
          labels = [];
        for (const el of svg.querySelectorAll("text")) {
          if (getComputedStyle(el).display === "none") continue;
          const b = el.getBBox(),
            m = svg.getCTM().inverse().multiply(el.getCTM());
          const p1 = new DOMPoint(b.x, b.y).matrixTransform(m),
            p2 = new DOMPoint(b.x + b.width, b.y + b.height).matrixTransform(m);
          const rect = {
            x: p1.x,
            y: p1.y,
            width: p2.x - p1.x,
            height: p2.y - p1.y,
            text: el.textContent,
          };
          if (
            rect.x < -1 ||
            rect.y < -1 ||
            rect.x + rect.width > 1101 ||
            rect.y + rect.height > 361
          )
            clipped.push(rect);
          labels.push(rect);
        }
        const textCollisions = [];
        for (let a = 0; a < labels.length; a++)
          for (let b = a + 1; b < labels.length; b++) {
            const x = labels[a],
              y = labels[b],
              w = Math.min(x.x + x.width, y.x + y.width) - Math.max(x.x, y.x),
              h = Math.min(x.y + x.height, y.y + y.height) - Math.max(x.y, y.y);
            if (w > 5 && h > 4) textCollisions.push([x.text, y.text]);
          }
        const copy = stage.querySelector(".scene-copy").getBoundingClientRect(),
          visual = stage.querySelector(".visual").getBoundingClientRect();
        const takeaway = stage
            .querySelector(".takeaway")
            .getBoundingClientRect(),
          qual = stage.querySelector(".qualification").getBoundingClientRect(),
          sources = stage.querySelector(".sources").getBoundingClientRect();
        const overlaps = (a, b) =>
          a.left < b.right &&
          a.right > b.left &&
          a.top < b.bottom - 1 &&
          a.bottom > b.top + 1;
        return {
          clipped,
          textCollisions,
          copyVisualOverlap: overlaps(copy, visual),
          visualTakeawayOverlap: overlaps(visual, takeaway),
          qualificationSourceOverlap: overlaps(qual, sources),
          titleLines: stage.querySelector("h1").getBoundingClientRect().height,
        };
      });
      report.checks.push({ scene: i + 1, density, ...check });
    }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:4188/#6", { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(out, "presenter-layout.png"),
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4188/#3", { waitUntil: "networkidle" });
  await page.getByText("Read scene text", { exact: true }).click();
  await page.screenshot({ path: path.join(out, "mobile.png"), fullPage: true });
  await fs.writeFile(
    path.join(
      out,
      representatives ? "representative-report.json" : "visual-report.json",
    ),
    JSON.stringify(report, null, 2),
  );
  const issues = report.checks.filter(
    (x) =>
      x.clipped.length ||
      x.textCollisions.length ||
      x.copyVisualOverlap ||
      x.visualTakeawayOverlap ||
      x.qualificationSourceOverlap,
  );
  console.log(
    JSON.stringify(
      {
        sceneRenders: report.checks.length,
        pageErrors: report.pageErrors,
        issues,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
