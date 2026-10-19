import type { VisualOptions } from "./types";
export const C = {
  blue: "#0B64DD",
  darkBlue: "#0A4FB0",
  lightBlue: "#EAF2FF",
  teal: "#02BCB7",
  lightTeal: "#DDFBF4",
  pink: "#F04E98",
  lightPink: "#FDEBF3",
  ink: "#1D1E24",
  gray: "#69707D",
  line: "#D3DAE6",
  bg: "#F5F7FA",
  amber: "#9A6200",
  lightAmber: "#FFF4DC",
  white: "#FFFFFF",
};
export const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export const txt = (
  x: number,
  y: number,
  value: string,
  size = 22,
  color = C.ink,
  weight = 500,
  anchor = "start",
  mono = false,
) =>
  `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}"${mono ? ' class="mono"' : ""}>${esc(value)}</text>`;
export const lines = (
  x: number,
  y: number,
  values: string[],
  size = 20,
  color = C.gray,
  lineHeight = 28,
  anchor = "start",
) =>
  values
    .map((v, i) => txt(x, y + i * lineHeight, v, size, color, 400, anchor))
    .join("");
export const rect = (
  x: number,
  y: number,
  w: number,
  h: number,
  fill = C.white,
  stroke = C.line,
  r = 10,
  dashed = false,
) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"${dashed ? ' stroke-dasharray="6 5"' : ""}/>`;
export const line = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color = C.line,
  width = 2,
  dashed = false,
) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"${dashed ? ' stroke-dasharray="6 6"' : ""}/>`;
export const circle = (
  x: number,
  y: number,
  r: number,
  fill = C.lightBlue,
  stroke = C.blue,
) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
export const path = (d: string, color = C.blue, dashed = false, flow = false) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="2"${dashed ? ' stroke-dasharray="6 6"' : ""}${flow ? ' class="flow-line"' : ""}/>`;
export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color = C.blue,
  dashed = false,
) {
  const a = Math.atan2(y2 - y1, x2 - x1),
    s = 9;
  return (
    line(x1, y1, x2, y2, color, 2, dashed) +
    `<path d="M${x2 - s * Math.cos(a - 0.45)} ${y2 - s * Math.sin(a - 0.45)}L${x2} ${y2}L${x2 - s * Math.cos(a + 0.45)} ${y2 - s * Math.sin(a + 0.45)}" fill="none" stroke="${color}" stroke-width="2"/>`
  );
}
export const pill = (
  x: number,
  y: number,
  w: number,
  label: string,
  fill = C.lightBlue,
  color = C.blue,
) =>
  rect(x, y, w, 32, fill, fill, 16) +
  txt(x + w / 2, y + 22, label, 18, color, 600, "middle");
export const build = (n: number, body: string, o: VisualOptions) =>
  `<g class="build${!o.settled && o.step < n ? " pending" : ""}" data-build="${n}">${body}</g>`;
export const node = (
  x: number,
  y: number,
  w: number,
  h: number,
  title: string,
  subtitle: string[] = [],
  accent = C.blue,
) =>
  rect(x, y, w, h) +
  line(x + 20, y + 15, x + 52, y + 15, accent, 3) +
  txt(x + 20, y + 45, title, 23, C.ink, 600) +
  lines(x + 20, y + 76, subtitle, 20, C.gray, 26);
export function iso(
  x: number,
  y: number,
  w: number,
  h: number,
  d: number,
  top = C.white,
  front = C.blue,
  side = C.darkBlue,
) {
  return `<g class="iso-block"><path d="M${x} ${y}l${w} ${-d}l${w} ${d}l${-w} ${d}Z" fill="${top}" stroke="${C.ink}" stroke-width="1.2"/><path d="M${x} ${y}l${w} ${d}v${h}l${-w} ${-d}Z" fill="${front}" stroke="${C.ink}" stroke-width="1.2"/><path d="M${x + w} ${y + d}l${w} ${-d}v${h}l${-w} ${d}Z" fill="${side}" stroke="${C.ink}" stroke-width="1.2"/></g>`;
}
export const check = (x: number, y: number, color = C.teal) =>
  circle(x, y, 12, C.lightTeal, C.lightTeal) +
  `<path d="M${x - 6} ${y}l4 4l8-9" fill="none" stroke="${color}" stroke-width="2.5"/>`;
export const badge = (x: number, y: number, label: string, color = C.blue) =>
  circle(x, y, 16, C.lightBlue, C.lightBlue) +
  txt(x, y + 6, label, 18, color, 600, "middle");
export const phone = (
  x: number,
  y: number,
  w: number,
  h: number,
  status = "Transfer pending",
  good = false,
) =>
  rect(x, y, w, h, C.white, C.ink, 24) +
  rect(x + w * 0.36, y + 10, w * 0.28, 5, C.ink, C.ink, 3) +
  txt(x + 22, y + 60, "Digital banking", 22, C.ink, 600) +
  line(x + 22, y + 78, x + w - 22, y + 78) +
  circle(
    x + w / 2,
    y + 127,
    28,
    good ? C.lightTeal : C.lightPink,
    good ? C.lightTeal : C.lightPink,
  ) +
  txt(
    x + w / 2,
    y + 135,
    good ? "✓" : "…",
    30,
    good ? C.teal : C.pink,
    600,
    "middle",
  ) +
  txt(x + w / 2, y + 188, status, 23, C.ink, 600, "middle") +
  txt(x + w / 2, y + 218, "Illustrative experience", 18, C.gray, 400, "middle");
