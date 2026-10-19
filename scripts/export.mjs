import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { chromium } from "@playwright/test";

const root = path.resolve("."),
  dist = path.join(root, "dist"),
  downloads = path.join(root, "public/downloads"),
  thumbs = path.join(root, "public/thumbnails");
const output = path.resolve(process.env.PRESENTATION_OUTPUT_DIR || "artifacts");
// Export the current source, then rebuild once more to include the new companions.
execFileSync("npm", ["run", "build"], { cwd: root, stdio: "inherit" });
await Promise.all(
  [downloads, thumbs, output].map((x) => fs.mkdir(x, { recursive: true })),
);
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".md": "text/plain",
  ".pdf": "application/pdf",
};
const server = http.createServer(async (req, res) => {
  try {
    let name = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (name.endsWith("/")) name += "index.html";
    const file = path.resolve(dist, "." + name);
    if (!file.startsWith(dist + path.sep)) throw Error("Invalid path");
    const bytes = await fs.readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[path.extname(file)] || "application/octet-stream",
    });
    res.end(bytes);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const elapsed = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
try {
  const page = await browser.newPage({
      viewport: { width: 1280, height: 720 },
      reducedMotion: "reduce",
    }),
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const base = `http://127.0.0.1:${server.address().port}/`;
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const { scenes, evidence } = await page.evaluate(
    () => window.__BANK_PRESENTATION__,
  );
  if (scenes.length !== 16)
    throw Error(`Expected exactly16scenes; got${scenes.length}`);
  const seconds = scenes.reduce((sum, s) => sum + s.notes.seconds, 0);
  if (seconds !== 1080) throw Error(`Expected18-minute plan; got${seconds}s`);
  const notes = `# Elastic Observability for Digital Banking — presenter notes\n\nCustomer-neutral presentation. Suggested speaking plan: ${elapsed(seconds)}; discussion is additional. Public evidence checked 19 October 2026. All incident data and banking experiences are fictional illustrations. No live systems, models or transactions are connected.\n\nUse arrows to change scenes immediately. Animations loop on each scene; Pause holds the view and Replay restarts it. G opens the overview, N shows these notes, F requests fullscreen, and 1–5 controls density. Hide notes before sharing the presentation window.\n\n## Opening\n\n“Payment processing is slowing and pending work is growing. The first alert tells us there is a problem; the useful question is what the owner should do next. We will follow the evidence through Streams, connected investigation and a bounded Workflow, then compare the approach with published banking operations examples.”\n\n${scenes.map((s, i) => `## ${String(i + 1).padStart(2, "0")} — ${s.title} ${s.emphasis}\n\nSuggested time: ${elapsed(s.notes.seconds)} · Chapter: ${s.chapter}\n\n**Opening:** ${s.notes.opening}\n\n${s.notes.body}\n\n**Ask:** ${s.notes.prompt}\n\n**Transition:** ${s.notes.transition}\n\n**Qualification:** ${s.qualification}\n\n${s.requirements}\n\n**Public evidence:**\n\n${s.sources.map((x) => `- [${x.label}](${x.url}): ${x.note}`).join("\n")}\n`).join("\n")}\n## Practical questions about the differentiators\n\n**Does Streams replace every existing pipeline?** No. Start with selected logs and useful fields. Inspect processing previews and failure handling. Existing supported collection can remain part of the design. Saved processing changes affect future incoming data.\n\n**Does Workflows replace our incident-management system?** It can query Elastic and coordinate configured actions. Existing ticketing, notification and approval systems remain explicit integrations. Start with evidence collection and incident coordination; authorize operational changes through the bank’s normal process.\n\n**Does self-managed mean AI stays local?** No. Streams AI assistance requires an approved model connection and entitlement; basic manual log management does not require it. Review what sample data reaches the chosen model. On-premises data storage does not establish the model’s processing location.\n\n**Did the customers obtain these results from Streams or Workflows?** These stories support the broader shared-observability approach. Do not attribute their historical outcomes to either newly illustrated feature.\n\n## Close\n\n“Which payment-processing service should we use to prove the loop from a backlog alert to a supported next move? Let us agree the evidence, operational owner, baseline and recovery criteria.”\n`;
  const register = `# Elastic Observability for Digital Banking — public evidence register\n\nChecked 19 October 2026. Original diagrams and synthetic incident data illustrate the discussion; they are not production captures or measured prospect results. Customer examples are vendor-published reports with their original scope. Product availability depends on the actual release, entitlement, permissions, instrumentation and operating model.\n\n${evidence.map((x) => `## ${x.label}\n\n[Official source](${x.url})\n\n${x.note}\n`).join("\n")}\n## Measurement boundaries\n\nOney measures API-incident detection, from up to 20 minutes to 1 minute. Discover measures historical-data retrieval, from 24 hours or more to minutes, in an ECE/AWS/S3 environment. It separately reports 50% lower storage requirements, not total spend. Emirates NBD describes on-premises logs and APM and reports days-to-minutes improvement in locating application problems. These are different measures and are not forecasts for the prospect. None of these historical results is attributed to Streams or Workflows.\n\nThe fictional incident connects growing backend work and service latency to related evidence, a candidate explanation, an owner-verified finding and approved response. Fresh service latency, errors and backlog trends check operational recovery. These indicators do not establish payment settlement, correct balances or reconciliation.\n`;
  for (const [filename, text] of [
    ["Presenter Notes.md", notes],
    ["Evidence Register.md", register],
  ]) {
    await fs.writeFile(path.join(downloads, filename), text);
    await fs.writeFile(path.join(output, filename), text);
  }
  await fs.mkdir(path.join(root, "docs"), { recursive: true });
  await fs.writeFile(path.join(root, "docs/presenter-notes.md"), notes);
  await fs.writeFile(path.join(root, "docs/evidence-register.md"), register);
  for (let i = 0; i < 16; i++) {
    await page.goto(`${base}?render=static&density=3#${i}`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    const graphic = await page.locator(".bank-visual").innerHTML();
    if (graphic.length < 500) throw Error(`Incomplete scene${i + 1}`);
    await page.locator("#stage-wrap").screenshot({
      path: path.join(thumbs, `${String(i + 1).padStart(2, "0")}.png`),
    });
  }
  await page.goto(`${base}?print=1&density=3`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  if ((await page.locator(".print-page").count()) !== 16)
    throw Error("Print view must have16pages");
  const pdf = path.join(downloads, "digital-bank-observability.pdf");
  await page.pdf({
    path: pdf,
    width: "1280px",
    height: "720px",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await fs.copyFile(pdf, path.join(output, "digital-bank-observability.pdf"));
  const source = await fs.readFile(path.join(dist, "index.html"), "utf8");
  let offline = source;
  for (const m of source.matchAll(/<link\b[^>]*href="([^\"]+\.css)"[^>]*>/g)) {
    const css = await fs.readFile(path.resolve(dist, m[1]), "utf8");
    offline = offline.replace(m[0], `<style>${css}</style>`);
  }
  for (const m of source.matchAll(
    /<script\b[^>]*src="([^\"]+\.js)"[^>]*><\/script>/g,
  )) {
    const js = (await fs.readFile(path.resolve(dist, m[1]), "utf8")).replace(
      /<\/script/gi,
      "<\\/script",
    );
    offline = offline.replace(m[0], `<script type="module">${js}</script>`);
  }
  const data = JSON.stringify({ notes, evidence: register }).replace(
    /</g,
    "\\u003c",
  );
  offline = offline
    .replace(
      "<body>",
      `<body><script id="offline-data" type="application/json">${data}</script>`,
    )
    .replace('<html lang="en">', '<html lang="en" data-offline="true">');
  await fs.writeFile(
    path.join(downloads, "digital-bank-observability.html"),
    offline,
  );
  await fs.writeFile(
    path.join(output, "digital-bank-observability.html"),
    offline,
  );
  if (errors.length) throw Error(errors.join("\n"));
  execFileSync("npm", ["run", "build"], { cwd: root, stdio: "inherit" });
  console.log(
    JSON.stringify(
      {
        scenes: 16,
        pdfPages: 16,
        thumbnails: 16,
        suggestedPacing: elapsed(seconds),
        pageErrors: errors,
        output,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
