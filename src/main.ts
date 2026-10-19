import "./fonts.css";
import "./style.css";
import { scenes } from "./scenes";
import { evidence } from "./evidence";
import { renderVisual } from "./visuals";
import { esc } from "./visual-primitives";
import logo from "./assets/elastic-logo.svg?url";
import type { Scene } from "./types";

const app = document.querySelector<HTMLDivElement>("#app")!;
const params = new URLSearchParams(location.search);
const printMode = params.has("print");
const staticMode = printMode || params.get("render") === "static";
const motion = matchMedia("(prefers-reduced-motion: reduce)");
const offlineData = JSON.parse(
  document.querySelector("#offline-data")?.textContent || "null",
) as null | { notes: string; evidence: string };
const isOffline = !!offlineData || location.protocol === "file:";
const bounded = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));
const time = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
let density = bounded(Number(params.get("density")) || 3, 1, 5);
let index = readRoute(),
  step = staticMode || motion.matches ? 3 : 0,
  paused = false;
let notesOpen = false,
  filmstripOpen = false,
  laser = false,
  drawing = false,
  printing = false;
let modal: HTMLDialogElement | null = null,
  animation: ReturnType<typeof setTimeout> | undefined;
let generation = 0,
  timer: ReturnType<typeof setInterval> | undefined;
let elapsed = 0,
  timerStart: number | null = Date.now();
let inkPath: SVGPathElement | null = null,
  inkPoints = "";
let beforePrint: { step: number; paused: boolean } | null = null;
const touches = new Set<number>();
let swipe: { x: number; y: number } | null = null,
  multitouch = false;

declare global {
  interface Window {
    __BANK_PRESENTATION__: { scenes: Scene[]; evidence: typeof evidence };
  }
}
window.__BANK_PRESENTATION__ = { scenes, evidence };

function readRoute() {
  const raw = location.hash.slice(1);
  const n =
    /^\d+$/.test(raw) && Number.isSafeInteger(Number(raw))
      ? bounded(Number(raw), 0, scenes.length - 1)
      : 0;
  if (raw !== String(n))
    history.replaceState(
      null,
      "",
      `${location.pathname}${location.search}#${n}`,
    );
  return n;
}
function slideMarkup(
  s: Scene,
  i: number,
  settled = false,
  phase = step,
  level = density,
) {
  const label = s.illustrative
    ? "ILLUSTRATIVE · NO LIVE SYSTEMS CONNECTED"
    : s.visual >= 18 && s.visual <= 20
      ? "CUSTOMER-REPORTED EXAMPLE"
      : "ELASTIC OBSERVABILITY";
  return `<article class="scene${i === 0 ? " hero" : ""}${settled ? " settled" : ""}" data-scene="${i}" data-scene-id="${esc(s.id)}" data-density="${level}" data-phase="${phase}" aria-label="Scene ${i + 1}: ${esc(s.title + " " + s.emphasis)}">
  <div class="eyebrow"><i></i>${esc(s.eyebrow)}<span>${String(i + 1).padStart(2, "0")} / ${scenes.length}</span></div>
  <div class="scene-copy"><h1>${esc(s.title)} <em>${esc(s.emphasis)}</em></h1><p class="lead">${esc(s.lead)}</p></div>
  <div class="visual">${renderVisual(s, { step: phase, settled, density: level })}</div>
  <p class="takeaway">${esc(s.takeaway)}</p>
  <p class="deeper">${esc(s.detail)}</p>
  <div class="qualification"><b>${label}</b><span>${esc(s.qualification)}</span><span class="full-requirements">${esc(s.requirements)}</span></div>
  <div class="sources"><span>PUBLIC SOURCES</span>${s.sources
    .slice(0, 3)
    .map(
      (source) =>
        `<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)} ↗</a>`,
    )
    .join("")}</div>
  <footer><img src="${logo}" alt="Elastic" width="84"/><span>OBSERVABILITY · ${esc(s.chapter)}</span></footer></article>`;
}
function mount() {
  if (printMode) {
    app.innerHTML = `<main class="print-deck">${scenes.map((s, i) => `<section class="print-page">${slideMarkup(s, i, true, 3, density)}</section>`).join("")}</main>`;
    ready();
    return;
  }
  app.innerHTML = `${staticMode ? "" : `<header class="toolbar"><a class="deck-name" href="#0"><img src="${logo}" alt="Elastic"/><span>Reliable Digital Banking</span></a><button id="timer" aria-label="Pause presenter timer">00:00</button><div class="nav-buttons"><button data-action="previous" aria-label="Previous scene">←</button><span id="scene-count"></span><button data-action="next" aria-label="Next scene">→</button></div><nav><button data-action="overview" title="Overview · G">Overview</button><button data-action="filmstrip" title="Filmstrip · T" aria-pressed="false">Filmstrip</button><button data-action="notes" title="Speaker notes · N" aria-pressed="false">Notes</button><label class="density-label" title="Content density · 1–5">Detail <select id="density-select" aria-label="Content density">${[1, 2, 3, 4, 5].map((n) => `<option value="${n}">${n}</option>`).join("")}</select></label><button data-action="help" aria-label="Help and downloads">?</button><button data-action="fullscreen" title="Fullscreen · F">Present</button></nav></header>`}
  <main class="presentation${staticMode ? " static-mode" : ""}"><section class="stage-area" aria-label="Presentation"><div id="stage-wrap"><div id="stage-mount"></div><svg id="ink" viewBox="0 0 1280 720" aria-label="Presenter drawing"></svg><span id="laser-dot" aria-hidden="true"></span></div></section><aside id="notes-panel" hidden aria-label="Speaker notes"></aside></main>
  ${staticMode ? "" : `<div class="playback"><span id="phase-caption"></span><div id="phase-dots" aria-label="Animation progress"></div><button data-action="pause" aria-label="Pause animation">Pause</button><button data-action="replay" title="Replay · R">Replay</button><span class="playback-gap"></span><button data-action="laser" title="Laser · L" aria-pressed="false">Laser</button><button data-action="draw" title="Draw · D" aria-pressed="false">Draw</button><button data-action="clear" title="Clear ink · C">Clear</button></div><section id="filmstrip" hidden aria-label="Scene filmstrip"></section><details class="readable"><summary>Read scene text</summary><div id="readable-text"></div></details><div id="toast" role="status"></div>`}`;
  bind();
  render();
  if (!staticMode) timer = setInterval(updateTimer, 1000);
}
function render() {
  stopAnimation();
  clearInk();
  document.querySelector("#stage-mount")!.innerHTML = slideMarkup(
    scenes[index],
    index,
    staticMode || motion.matches || printing,
  );
  app.dataset.scene = String(index);
  app.dataset.density = String(density);
  app.dataset.phase = String(step);
  if (!staticMode) {
    document.querySelector("#scene-count")!.textContent =
      `${index + 1} / ${scenes.length}`;
    document.querySelector<HTMLButtonElement>(
      '[data-action="previous"]',
    )!.disabled = index === 0;
    document.querySelector<HTMLButtonElement>(
      '[data-action="next"]',
    )!.disabled = index === scenes.length - 1;
    document.querySelector<HTMLSelectElement>("#density-select")!.value =
      String(density);
    const s = scenes[index];
    document.querySelector("#readable-text")!.innerHTML =
      `<h2>${esc(s.title + " " + s.emphasis)}</h2><p>${esc(s.lead)}</p><p><strong>${esc(s.takeaway)}</strong></p><p>${esc(s.detail)}</p><p>${esc(s.qualification)}</p><p>${esc(s.requirements)}</p><ul>${s.sources.map((x) => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)}</a></li>`).join("")}</ul>`;
    renderNotes();
    renderFilmstrip();
    renderPhase();
    updateTimer();
    syncTools();
  }
  resize();
  scheduleAnimation();
  ready();
}
function ready() {
  document.documentElement.dataset.ready = "true";
}
function stopAnimation() {
  if (animation !== undefined) clearTimeout(animation);
  animation = undefined;
  generation++;
}
function scheduleAnimation() {
  stopAnimation();
  const blocked =
    paused ||
    staticMode ||
    motion.matches ||
    document.hidden ||
    !!modal ||
    drawing ||
    printing;
  document
    .querySelector("#stage-wrap")
    ?.classList.toggle("motion-paused", blocked);
  document
    .querySelectorAll<SVGSVGElement>("#stage-wrap .bank-visual")
    .forEach((svg) => {
      if (blocked) svg.pauseAnimations?.();
      else svg.unpauseAnimations?.();
    });
  if (blocked) return;
  const current = index,
    token = generation;
  animation = setTimeout(
    () => {
      if (token !== generation || current !== index) return;
      step = (step + 1) % 4;
      const visual = document.querySelector(".visual")!;
      visual.innerHTML = renderVisual(scenes[index], {
        step,
        settled: false,
        density,
      });
      document.querySelector<HTMLElement>(".scene")!.dataset.phase =
        String(step);
      app.dataset.phase = String(step);
      renderPhase();
      scheduleAnimation();
    },
    step === 3 ? 4800 : 3200,
  );
}
function renderPhase() {
  document.querySelector("#phase-caption")!.textContent = motion.matches
    ? "Complete view · reduced motion"
    : scenes[index].steps[step];
  document.querySelector("#phase-dots")!.innerHTML = [0, 1, 2, 3]
    .map((n) => `<i class="${n === step ? "current" : ""}"></i>`)
    .join("");
  const b = document.querySelector<HTMLButtonElement>('[data-action="pause"]')!;
  b.textContent = paused ? "Play" : "Pause";
  b.setAttribute("aria-label", paused ? "Play animation" : "Pause animation");
  b.disabled = motion.matches;
}
function navigate(next: number) {
  const n = bounded(next, 0, scenes.length - 1);
  if (n === index) return;
  closeDialog();
  location.hash = String(n);
  syncRoute();
}
function syncRoute() {
  const next = readRoute();
  if (next === index) return;
  index = next;
  step = staticMode || motion.matches ? 3 : 0;
  render();
}
function replay() {
  step = staticMode || motion.matches ? 3 : 0;
  paused = false;
  render();
}
function setDensity(n: number) {
  density = bounded(n, 1, 5);
  render();
}
function renderNotes() {
  const panel = document.querySelector<HTMLElement>("#notes-panel")!;
  panel.hidden = !notesOpen;
  document
    .querySelector(".presentation")!
    .classList.toggle("notes-open", notesOpen);
  document
    .querySelector('[data-action="notes"]')!
    .setAttribute("aria-pressed", String(notesOpen));
  if (!notesOpen) return;
  const s = scenes[index];
  panel.innerHTML = `<div class="panel-heading"><span>SPEAKER NOTES</span><button data-action="notes" aria-label="Close speaker notes">×</button></div><small>SCENE ${index + 1} · ${time(s.notes.seconds)} · FULL STORY ${time(scenes.reduce((total, scene) => total + scene.notes.seconds, 0))}</small><h2>${esc(s.title + " " + s.emphasis)}</h2><h3>Opening</h3><p>${esc(s.notes.opening)}</p><h3>Talking points</h3><p>${esc(s.notes.body)}</p><h3>Ask</h3><p class="prompt">${esc(s.notes.prompt)}</p><h3>Transition</h3><p>${esc(s.notes.transition)}</p><h3>Qualifications</h3><p>${esc(s.qualification)}</p><p>${esc(s.requirements)}</p><h3>Public evidence</h3>${s.sources.map((x) => `<p><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)} ↗</a><br/><small>${esc(x.note)}</small></p>`).join("")}<small>Hide this panel before sharing the presentation window.</small>`;
}
function thumbnail(s: Scene, i: number) {
  return `<button class="thumb${i === index ? " selected" : ""}" data-goto="${i}" aria-label="Go to scene ${i + 1}: ${esc(s.title)}"><span class="thumb-canvas" inert aria-hidden="true"><span class="thumb-stage">${slideMarkup(s, i, true, 3, 3)}</span></span><span class="thumb-title"><b>${String(i + 1).padStart(2, "0")}</b>${esc(s.title)}</span></button>`;
}
function renderFilmstrip() {
  const strip = document.querySelector<HTMLElement>("#filmstrip")!;
  strip.hidden = !filmstripOpen;
  document
    .querySelector('[data-action="filmstrip"]')!
    .setAttribute("aria-pressed", String(filmstripOpen));
  strip.innerHTML = filmstripOpen ? scenes.map(thumbnail).join("") : "";
  if (filmstripOpen)
    strip
      .querySelector(".selected")
      ?.scrollIntoView({ block: "nearest", inline: "center" });
}
function openDialog(title: string, body: string, kind: string) {
  closeDialog();
  const dialog = document.createElement("dialog");
  dialog.className = `dialog ${kind}`;
  dialog.innerHTML = `<div class="dialog-heading"><div><span>RELIABLE DIGITAL BANKING</span><h2>${title}</h2></div><button data-action="close" aria-label="Close dialog">×</button></div>${body}`;
  document.body.append(dialog);
  modal = dialog;
  dialog.addEventListener("close", () => {
    if (modal === dialog) {
      modal = null;
      scheduleAnimation();
    }
    dialog.remove();
  });
  dialog.showModal();
  scheduleAnimation();
  requestAnimationFrame(resize);
}
function closeDialog() {
  const previous = modal;
  if (previous) {
    modal = null;
    previous.close();
    previous.remove();
    scheduleAnimation();
  }
}
function showOverview() {
  openDialog(
    `${scenes.length} scenes. One banking journey.`,
    `<p class="dialog-intro">Select any complete scene. Arrows change scenes immediately while the presentation is open.</p><div class="overview-grid">${scenes.map(thumbnail).join("")}</div>`,
    "overview",
  );
}
function showHelp() {
  const filebase = isOffline ? "./" : "./downloads/";
  openDialog(
    "Controls & companion files",
    `<div class="help-columns"><section><h3>Present</h3><dl><dt>← / → · Space · Page keys</dt><dd>Previous / next scene</dd><dt>G · T · N · F</dt><dd>Overview · filmstrip · notes · fullscreen</dd><dt>1–5</dt><dd>Content density · default 3</dd><dt>R · L · D · C</dt><dd>Replay · laser · draw · clear ink</dd><dt>Escape</dt><dd>Close an overlay or leave pointer tools</dd></dl><p>Animations play and loop while you stay on a scene. Pause holds the current state. Reduced motion and print show complete diagrams.</p><p>All banking incident data is fictional. No systems, models or payment actions are connected.</p></section><section><h3>Take it with you</h3><a class="download" href="${filebase}digital-bank-observability.pdf" download>${scenes.length}-page PDF</a>${isOffline ? "<p>You are using the self-contained offline presentation.</p>" : `<a class="download" href="${filebase}digital-bank-observability.html" download>Standalone offline presentation</a>`}<a class="download" ${offlineData ? 'href="#" data-download="notes"' : `href="${filebase}Presenter%20Notes.md"`} download>Presenter notes</a><a class="download" ${offlineData ? 'href="#" data-download="evidence"' : `href="${filebase}Evidence%20Register.md"`} download>Public evidence register</a><button class="link-button" data-action="evidence">Browse public evidence ↗</button><p>${isOffline ? "Keep the supplied PDF beside this HTML to use its PDF link. Notes and evidence are bundled." : "The offline copy bundles fonts, diagrams, scripts, notes and evidence."} Public source links require internet access when opened.</p><p>Evidence checked 19 October 2026. Customer results are reported examples, not promises.</p></section></div>`,
    "help",
  );
}
function showEvidence() {
  openDialog(
    "Public evidence & qualifications",
    `<p class="dialog-intro">Checked 19 October 2026. Capability depends on the deployed release, entitlement, instrumentation, access and operating model. Each customer result retains its own measure and context.</p><div class="evidence-list">${evidence.map((x) => `<section><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)} ↗</a><p>${esc(x.note)}</p></section>`).join("")}</div>`,
    "evidence",
  );
}
function download(kind: "notes" | "evidence") {
  if (!offlineData) return;
  const blob = new Blob([offlineData[kind]], {
      type: "text/markdown;charset=utf-8",
    }),
    url = URL.createObjectURL(blob),
    link = document.createElement("a");
  link.href = url;
  link.download =
    kind === "notes" ? "Presenter Notes.md" : "Evidence Register.md";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function bind() {
  if (staticMode) return;
  document.addEventListener("click", (e) => {
    const target = (e.target as Element).closest<HTMLElement>(
      "button[data-action],button[data-goto],a[data-download]",
    );
    if (!target) return;
    if (target.dataset.goto !== undefined) {
      navigate(Number(target.dataset.goto));
      if (modal) closeDialog();
      return;
    }
    if (target.dataset.download) {
      e.preventDefault();
      download(target.dataset.download as "notes" | "evidence");
      return;
    }
    const actions: Record<string, () => void> = {
      previous: () => navigate(index - 1),
      next: () => navigate(index + 1),
      overview: showOverview,
      filmstrip: () => {
        filmstripOpen = !filmstripOpen;
        renderFilmstrip();
        resize();
      },
      notes: () => {
        notesOpen = !notesOpen;
        renderNotes();
        resize();
      },
      help: showHelp,
      evidence: showEvidence,
      close: () => {
        closeDialog();
        scheduleAnimation();
      },
      fullscreen,
      replay,
      pause: () => {
        paused = !paused;
        renderPhase();
        scheduleAnimation();
      },
      laser: () => {
        laser = !laser;
        if (laser) drawing = false;
        syncTools();
        scheduleAnimation();
      },
      draw: () => {
        drawing = !drawing;
        if (drawing) laser = false;
        syncTools();
        scheduleAnimation();
      },
      clear: clearInk,
    };
    actions[target.dataset.action || ""]?.();
  });
  document
    .querySelector("#density-select")!
    .addEventListener("change", (e) =>
      setDensity(Number((e.target as HTMLSelectElement).value)),
    );
  document.querySelector("#timer")!.addEventListener("click", () => {
    if (timerStart === null) timerStart = Date.now();
    else {
      elapsed += Date.now() - timerStart;
      timerStart = null;
    }
    updateTimer();
  });
  document.addEventListener("keydown", (e) => {
    const target = e.target as Element;
    if (
      e.ctrlKey ||
      e.metaKey ||
      e.altKey ||
      target.closest('input,textarea,select,[contenteditable="true"]')
    )
      return;
    if (
      (e.key === " " || e.key === "Enter") &&
      target.closest("button,a,summary")
    )
      return;
    if (modal) return;
    const handlers: Record<string, () => void> = {
      arrowright: () => navigate(index + 1),
      pagedown: () => navigate(index + 1),
      " ": () => navigate(index + 1),
      arrowleft: () => navigate(index - 1),
      pageup: () => navigate(index - 1),
      home: () => navigate(0),
      end: () => navigate(scenes.length - 1),
      g: showOverview,
      t: () =>
        document
          .querySelector<HTMLButtonElement>('[data-action="filmstrip"]')!
          .click(),
      n: () =>
        document
          .querySelector<HTMLButtonElement>('[data-action="notes"]')!
          .click(),
      f: fullscreen,
      r: replay,
      l: () =>
        document
          .querySelector<HTMLButtonElement>('[data-action="laser"]')!
          .click(),
      d: () =>
        document
          .querySelector<HTMLButtonElement>('[data-action="draw"]')!
          .click(),
      c: clearInk,
      "?": showHelp,
      escape: () => {
        laser = false;
        drawing = false;
        syncTools();
        scheduleAnimation();
      },
    };
    const key = e.key.toLowerCase();
    if (/^[1-5]$/.test(key)) {
      e.preventDefault();
      setDensity(Number(key));
    } else if (handlers[key]) {
      e.preventDefault();
      handlers[key]();
    }
  });
  const wrap = document.querySelector<HTMLElement>("#stage-wrap")!;
  wrap.addEventListener("pointermove", (e) => {
    const b = wrap.getBoundingClientRect(),
      x = ((e.clientX - b.left) * 1280) / b.width,
      y = ((e.clientY - b.top) * 720) / b.height;
    if (laser) {
      const dot = document.querySelector<HTMLElement>("#laser-dot")!;
      dot.style.left = `${x / 12.8}%`;
      dot.style.top = `${y / 7.2}%`;
      dot.classList.add("visible");
    }
    if (inkPath && drawing) {
      inkPoints += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
      inkPath.setAttribute("d", inkPoints);
    }
  });
  wrap.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") {
      touches.add(e.pointerId);
      if (touches.size > 1) {
        multitouch = true;
        swipe = null;
      } else {
        multitouch = false;
        swipe = { x: e.clientX, y: e.clientY };
      }
    }
    if (!drawing) return;
    e.preventDefault();
    const b = wrap.getBoundingClientRect();
    inkPoints = `M${(((e.clientX - b.left) * 1280) / b.width).toFixed(1)} ${(((e.clientY - b.top) * 720) / b.height).toFixed(1)}`;
    inkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    inkPath.setAttribute("d", inkPoints);
    document.querySelector("#ink")!.append(inkPath);
    wrap.setPointerCapture(e.pointerId);
  });
  wrap.addEventListener("pointerup", (e) => {
    inkPath = null;
    touches.delete(e.pointerId);
    if (swipe && !multitouch && !drawing) {
      const dx = e.clientX - swipe.x,
        dy = e.clientY - swipe.y;
      if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.7)
        navigate(index + (dx < 0 ? 1 : -1));
    }
    swipe = null;
  });
  wrap.addEventListener("pointercancel", () => {
    inkPath = null;
    swipe = null;
    touches.clear();
    multitouch = false;
  });
  wrap.addEventListener("pointerleave", () =>
    document.querySelector("#laser-dot")?.classList.remove("visible"),
  );
}
function syncTools() {
  document.querySelector("#stage-wrap")?.classList.toggle("drawing", drawing);
  document.querySelector("#stage-wrap")?.classList.toggle("lasering", laser);
  document
    .querySelector('[data-action="laser"]')
    ?.setAttribute("aria-pressed", String(laser));
  document
    .querySelector('[data-action="draw"]')
    ?.setAttribute("aria-pressed", String(drawing));
  if (!laser) document.querySelector("#laser-dot")?.classList.remove("visible");
}
function clearInk() {
  const ink = document.querySelector("#ink");
  if (ink) ink.innerHTML = "";
  inkPath = null;
}
function resize() {
  const wrap = document.querySelector<HTMLElement>("#stage-wrap"),
    area = document.querySelector<HTMLElement>(".stage-area");
  if (!wrap || !area) return;
  const space = getComputedStyle(area),
    px = parseFloat(space.paddingLeft) + parseFloat(space.paddingRight),
    py = parseFloat(space.paddingTop) + parseFloat(space.paddingBottom);
  const factor = Math.max(
    0.1,
    Math.min((area.clientWidth - px) / 1280, (area.clientHeight - py) / 720),
  );
  wrap.style.width = `${1280 * factor}px`;
  wrap.style.height = `${720 * factor}px`;
  document.querySelector<HTMLElement>("#stage-mount")!.style.transform =
    `scale(${factor})`;
  document.querySelectorAll<HTMLElement>(".thumb-canvas").forEach((canvas) => {
    const preview = canvas.querySelector<HTMLElement>(".thumb-stage")!;
    preview.style.transform = `scale(${canvas.clientWidth / 1280})`;
  });
}
async function fullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    toast("Use your browser’s fullscreen control in this environment.");
  }
}
function updateTimer() {
  const b = document.querySelector<HTMLButtonElement>("#timer");
  if (!b) return;
  b.textContent = time(
    (elapsed + (timerStart === null ? 0 : Date.now() - timerStart)) / 1000,
  );
  b.setAttribute(
    "aria-label",
    timerStart === null ? "Resume presenter timer" : "Pause presenter timer",
  );
  b.classList.toggle("timer-paused", timerStart === null);
}
function toast(message: string) {
  const el = document.querySelector<HTMLElement>("#toast")!;
  el.textContent = message;
  el.classList.add("visible");
  setTimeout(() => el.classList.remove("visible"), 3500);
}
window.addEventListener("hashchange", syncRoute);
window.addEventListener("popstate", syncRoute);
window.addEventListener("resize", resize);
window.addEventListener("beforeprint", () => {
  if (printMode) return;
  beforePrint = { step, paused };
  printing = true;
  step = 3;
  render();
});
window.addEventListener("afterprint", () => {
  if (!beforePrint) return;
  printing = false;
  step = beforePrint.step;
  paused = beforePrint.paused;
  beforePrint = null;
  render();
});
document.addEventListener("visibilitychange", scheduleAnimation);
motion.addEventListener("change", () => {
  if (printMode) return;
  step = staticMode || motion.matches ? 3 : 0;
  render();
});
window.addEventListener("pagehide", () => {
  stopAnimation();
  if (timer) clearInterval(timer);
  timer = undefined;
});
window.addEventListener("pageshow", () => {
  if (!staticMode && timer === undefined)
    timer = setInterval(updateTimer, 1000);
  scheduleAnimation();
});
mount();
document.fonts.ready.then(resize);
