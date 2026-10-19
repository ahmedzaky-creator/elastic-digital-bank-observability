import type { VisualOptions } from "./types";
import {
  C,
  txt,
  rect,
  line,
  circle,
  path,
  arrow,
  build,
  iso,
  check,
} from "./visual-primitives";

// Motion follows the same visible evidence paths as the static diagram.
// renderVisual removes these particles, including their SMIL, in settled exports.
const particle = (d: string, color = C.blue, duration = 4, begin = 0) =>
  `<circle r="5" fill="${color}" class="request-dot"><animateMotion dur="${duration}s" begin="${begin}s" repeatCount="indefinite" path="${d}"/></circle>`;

const documentMark = (x: number, y: number, accent = C.blue) =>
  rect(x, y, 52, 62, C.white, C.ink, 5) +
  line(x + 10, y + 18, x + 40, y + 18, accent, 2) +
  line(x + 10, y + 30, x + 40, y + 30, accent, 2) +
  line(x + 10, y + 42, x + 31, y + 42, accent, 2);

function observabilityCover(o: VisualOptions): string {
  const base =
    txt(550, 42, "Search AI foundation", 43, C.ink, 600, "middle") +
    iso(105, 241, 440, 27, 35, C.white, C.lightBlue, C.blue) +
    rect(359, 254, 382, 47, C.white, C.white, 10) +
    txt(550, 288, "Elasticsearch", 37, C.blue, 600, "middle");
  const streams =
    path("M84 158H232V211", C.teal) +
    iso(147, 144, 80, 61, 26, C.white, C.lightTeal, C.teal) +
    [0, 1, 2]
      .map((n) => circle(173 + n * 25, 121 - n * 6, 7, C.teal, C.teal))
      .join("") +
    particle("M84 158H232V211H495", C.teal, 4.8) +
    txt(235, 344, "Streams", 43, C.ink, 600, "middle");
  const context =
    path("M317 192H476M635 192H786", C.blue) +
    iso(466, 124, 82, 80, 28, C.white, C.lightBlue, C.blue) +
    path(
      "M491 134l42 14 44-14M491 157l42 14 44-14M491 180l42 14 44-14",
      C.blue,
    ) +
    particle("M317 192H476H635H786", C.blue, 5.2, -1.2) +
    txt(550, 344, "Context", 43, C.ink, 600, "middle");
  const action =
    iso(790, 109, 80, 95, 28, C.white, C.lightPink, C.pink) +
    circle(870, 96, 26, C.lightPink, C.pink) +
    path("M856 96l10 10 20-23", C.pink) +
    txt(870, 344, "Action", 43, C.ink, 600, "middle");
  return (
    build(0, base, o) +
    build(1, streams, o) +
    build(2, context, o) +
    build(3, action, o)
  );
}

function connectedBank(o: VisualOptions): string {
  const channels =
    txt(118, 31, "Digital channels", 23, C.ink, 600, "middle") +
    ["Mobile", "APIs", "Cards"]
      .map((label, n) => {
        const y = 90 + n * 88;
        return (
          circle(40, y, 16, C.lightBlue, C.blue) +
          txt(72, y + 7, label, 23, C.ink, 500) +
          path(`M190 ${y}C280 ${y} 277 174 350 174`, C.blue)
        );
      })
      .join("");
  const services =
    path("M350 174H465L665 161M465 174L575 252M665 161L575 252", C.line) +
    iso(388, 104, 74, 48, 25, C.white, C.lightBlue, C.blue) +
    iso(593, 122, 74, 48, 25, C.white, C.lightTeal, C.teal) +
    iso(498, 231, 74, 39, 24, C.white, C.bg, C.gray) +
    txt(462, 65, "Payments", 23, C.ink, 600, "middle") +
    txt(667, 83, "Identity", 23, C.ink, 600, "middle") +
    txt(572, 321, "Legacy services", 23, C.ink, 600, "middle") +
    particle("M190 90C280 90 277 174 350 174H465L665 161", C.blue, 5.4) +
    particle("M190 266C280 266 277 174 350 174H465L575 252", C.teal, 6, -2);
  const fragments =
    path(
      "M741 146L788 112M812 96L867 56M650 206L764 199M792 199H867M647 264L781 282M809 282H867",
      C.line,
      true,
    ) +
    rect(870, 23, 210, 77, C.white, C.line, 10) +
    txt(889, 52, "Log view", 22, C.ink, 600) +
    line(891, 68, 1058, 68, C.blue, 2) +
    line(891, 82, 1020, 82, C.line, 2) +
    rect(870, 146, 210, 78, C.white, C.line, 10) +
    txt(889, 176, "Metric view", 22, C.ink, 600) +
    path("M891 207L918 207L936 188L952 205L975 197H1057", C.teal) +
    rect(870, 268, 210, 77, C.white, C.line, 10) +
    txt(889, 297, "Request view", 22, C.ink, 600) +
    line(891, 314, 1058, 314, C.pink, 5) +
    line(921, 330, 1004, 330, C.lightPink, 5);
  const gap =
    line(815, 26, 815, 345, C.line, 1.5, true) +
    circle(815, 115, 16, C.white, C.pink) +
    txt(815, 121, "?", 22, C.pink, 600, "middle") +
    txt(
      378,
      351,
      "Complex systems need connected evidence",
      21,
      C.gray,
      500,
      "middle",
    );
  return (
    build(0, channels, o) +
    build(1, services, o) +
    build(2, fragments, o) +
    build(3, gap, o)
  );
}

function philosophy(o: VisualOptions): string {
  const open =
    txt(160, 35, "Open", 29, C.ink, 600, "middle") +
    [0, 1, 2]
      .map((n) => {
        const y = 104 + n * 48;
        return (
          circle(
            48,
            y,
            12,
            [C.lightBlue, C.lightTeal, C.lightPink][n],
            [C.blue, C.teal, C.pink][n],
          ) +
          path(`M60 ${y}C115 ${y} 113 153 160 153`, [C.blue, C.teal, C.pink][n])
        );
      })
      .join("") +
    iso(159, 128, 58, 55, 22, C.white, C.lightTeal, C.teal) +
    txt(165, 271, "Collect with choice", 21, C.gray, 500, "middle") +
    particle("M60 104C115 104 113 153 160 153H274", C.teal, 4.5);
  const connected =
    arrow(290, 164, 402, 164, C.blue) +
    txt(550, 35, "Connected", 29, C.ink, 600, "middle") +
    path(
      "M465 110L550 163L638 105M465 110L478 219L550 163L641 223L638 105",
      C.blue,
    ) +
    circle(550, 163, 35, C.lightBlue, C.blue) +
    circle(465, 110, 17, C.white, C.blue) +
    circle(638, 105, 17, C.white, C.teal) +
    circle(478, 219, 17, C.white, C.pink) +
    circle(641, 223, 17, C.white, C.blue) +
    txt(550, 171, "Find", 20, C.blue, 600, "middle") +
    txt(550, 271, "Investigate in context", 21, C.gray, 500, "middle") +
    particle("M465 110L550 163L641 223", C.blue, 4, -1);
  const action =
    arrow(700, 164, 806, 164, C.pink) +
    txt(927, 35, "Actionable", 29, C.ink, 600, "middle") +
    path("M825 164H870V113H927M870 164V216H927", C.pink) +
    rect(928, 88, 138, 51, C.lightPink, C.lightPink, 8) +
    txt(997, 120, "Respond", 21, C.pink, 600, "middle") +
    rect(928, 191, 138, 51, C.lightBlue, C.lightBlue, 8) +
    txt(997, 223, "Record", 21, C.blue, 600, "middle") +
    txt(931, 271, "Repeat useful actions", 21, C.gray, 500, "middle") +
    particle("M825 164H870V113H927", C.pink, 3.8, -2);
  const foundation =
    rect(69, 304, 963, 49, C.lightBlue, C.lightBlue, 9) +
    txt(
      550,
      336,
      "One search foundation connects the loop",
      24,
      C.blue,
      600,
      "middle",
    );
  return (
    build(0, open, o) +
    build(1, connected, o) +
    build(2, action, o) +
    build(3, foundation, o)
  );
}

function openCollection(o: VisualOptions): string {
  const telemetry =
    txt(263, 27, "Supported collection paths", 24, C.ink, 600, "middle") +
    documentMark(35, 60, C.teal) +
    txt(113, 96, "OpenTelemetry", 24, C.ink, 600) +
    documentMark(35, 154, C.blue) +
    txt(113, 190, "Elastic integrations", 24, C.ink, 600) +
    documentMark(35, 248, C.pink) +
    txt(113, 284, "Existing collectors", 24, C.ink, 600);
  const converge =
    path(
      "M390 91C452 91 443 180 495 180M405 185H495M405 279C452 279 443 180 495 180",
      C.blue,
    ) +
    rect(496, 108, 231, 145, C.white, C.blue, 13) +
    txt(612, 151, "Supported inputs", 23, C.ink, 600, "middle") +
    line(517, 170, 705, 170, C.line) +
    txt(612, 204, "Collect with", 22, C.gray, 500, "middle") +
    txt(612, 234, "context", 22, C.gray, 500, "middle") +
    particle("M390 91C452 91 443 180 495 180", C.teal, 4.3) +
    particle("M405 185H495", C.blue, 3.3, -1) +
    particle("M405 279C452 279 443 180 495 180", C.pink, 5, -2);
  const elastic =
    arrow(742, 180, 817, 180, C.blue) +
    iso(830, 107, 109, 76, 37, C.white, C.lightBlue, C.blue) +
    txt(939, 51, "Elastic", 28, C.ink, 600, "middle") +
    path(
      "M852 123l66 22 65-22M852 150l66 22 65-22M852 177l66 22 65-22",
      C.blue,
    ) +
    particle("M742 180H817", C.blue, 3.2, -0.5);
  const environments =
    line(450, 307, 1065, 307, C.line) +
    txt(
      759,
      342,
      "Cloud · self-managed · hybrid environments",
      23,
      C.gray,
      500,
      "middle",
    );
  return (
    build(0, telemetry, o) +
    build(1, converge, o) +
    build(2, elastic, o) +
    build(3, environments, o)
  );
}

function searchFoundation(o: VisualOptions): string {
  const question =
    rect(205, 6, 690, 57, C.lightBlue, C.lightBlue, 28) +
    txt(
      550,
      43,
      "Why are mobile payments taking longer?",
      25,
      C.ink,
      600,
      "middle",
    );
  const fork =
    path("M550 63V93M190 93H910M190 93V126M550 93V126M910 93V126", C.blue) +
    txt(1005, 101, "Search", 20, C.blue, 600, "middle");
  const event =
    rect(20, 128, 320, 145, C.white, C.line, 13) +
    txt(42, 162, "Events", 24, C.ink, 600) +
    txt(42, 197, "Connection wait", 22, C.blue, 500) +
    line(42, 217, 317, 217, C.line) +
    txt(42, 247, "Payment-service log", 20, C.gray) +
    particle("M550 63V93H190V128", C.blue, 4.5);
  const trend =
    rect(390, 128, 320, 145, C.white, C.line, 13) +
    txt(412, 162, "Trends", 24, C.ink, 600) +
    path("M414 230H685M414 179V230", C.line) +
    path(
      "M420 224H468L494 220L518 224L538 188L559 185L580 192L602 186H680",
      C.teal,
    ) +
    txt(550, 257, "Waiting time increases", 20, C.gray, 500, "middle") +
    particle("M550 63V128", C.teal, 3.4, -1);
  const request =
    rect(760, 128, 320, 145, C.white, C.line, 13) +
    txt(782, 162, "Request path", 24, C.ink, 600) +
    rect(783, 183, 190, 13, C.lightBlue, C.lightBlue, 3) +
    rect(810, 207, 150, 13, C.lightPink, C.lightPink, 3) +
    rect(842, 231, 128, 13, C.pink, C.pink, 3) +
    txt(1055, 196, "API", 18, C.gray, 400, "end") +
    txt(1055, 221, "Service", 18, C.gray, 400, "end") +
    particle("M550 63V93H910V128", C.pink, 4.1, -2);
  const foundation =
    path("M180 273V295H920V273M550 273V295", C.line) +
    rect(220, 296, 660, 52, C.lightBlue, C.lightBlue, 11) +
    txt(
      550,
      329,
      "Elasticsearch · one searchable foundation",
      23,
      C.blue,
      600,
      "middle",
    );
  return (
    build(0, question + fork, o) +
    build(1, event, o) +
    build(2, trend + request, o) +
    build(3, foundation, o)
  );
}

function streamsMechanism(o: VisualOptions): string {
  // Different source shapes become consistent records after the preview gate.
  const sources =
    txt(115, 35, "Raw logs", 24, C.ink, 600, "middle") +
    `<path d="M30 79h145l15 16-15 17H30Z" fill="${C.lightBlue}" stroke="${C.blue}" stroke-width="1.5"/>` +
    `<path d="M53 143l120-8 12 21-9 17-120 8Z" fill="${C.lightPink}" stroke="${C.pink}" stroke-width="1.5"/>` +
    `<path d="M25 211h131l-8 17 15 20H25Z" fill="${C.lightAmber}" stroke="${C.amber}" stroke-width="1.5"/>` +
    txt(48, 102, "{ API }", 20, C.blue, 500, "start", true) +
    txt(68, 163, "APP | msg", 20, C.pink, 500, "start", true) +
    txt(41, 237, "SYS: msg", 20, C.amber, 500, "start", true) +
    txt(115, 292, "Different formats", 20, C.gray, 400, "middle");
  const transform =
    path(
      "M192 96C238 96 246 162 290 162M193 157H290M164 230C236 230 240 162 290 162",
      C.blue,
    ) +
    `<path d="M290 111L365 79H463L499 111V216L421 247H325L290 216Z" fill="${C.white}" stroke="${C.ink}" stroke-width="1.5"/>` +
    `<path d="M290 111H421L499 111M421 111V247" fill="none" stroke="${C.line}" stroke-width="1.5"/>` +
    txt(354, 150, "Parse", 24, C.ink, 600, "middle") +
    txt(354, 184, "Organize", 24, C.ink, 600, "middle") +
    txt(395, 292, "Streams processing", 20, C.gray, 400, "middle") +
    particle("M192 96C238 96 246 162 290 162H421", C.blue, 4.8) +
    particle("M193 157H421", C.pink, 4.2, -2) +
    particle("M164 230C236 230 240 162 290 162H421", C.amber, 5.2, -1);
  const preview =
    arrow(500, 162, 563, 162, C.blue) +
    rect(575, 81, 213, 164, C.white, C.blue, 12) +
    txt(596, 115, "Preview", 24, C.ink, 600) +
    line(596, 132, 765, 132, C.line) +
    check(605, 159) +
    txt(628, 166, "Fields", 21, C.ink) +
    check(605, 199) +
    txt(628, 206, "Sample output", 21, C.ink) +
    txt(681, 292, "Inspect before publishing", 20, C.gray, 400, "middle");
  const records =
    arrow(800, 162, 847, 162, C.teal) +
    [0, 1, 2]
      .map(
        (n) =>
          rect(866, 84 + n * 54, 204, 42, C.lightTeal, C.teal, 7) +
          line(880, 98 + n * 54, 918, 98 + n * 54, C.teal, 3) +
          line(932, 98 + n * 54, 1051, 98 + n * 54, C.line, 2) +
          line(880, 111 + n * 54, 1028, 111 + n * 54, C.line, 2),
      )
      .join("") +
    txt(967, 35, "Useful evidence", 24, C.ink, 600, "middle") +
    txt(967, 292, "Queryable logs", 20, C.gray, 400, "middle") +
    particle("M800 162H847H866", C.teal, 3.2, -1) +
    line(40, 322, 1060, 322, C.line) +
    txt(
      550,
      351,
      "Guided curation · preview · approved changes",
      22,
      C.ink,
      500,
      "middle",
    );
  return (
    build(0, sources, o) +
    build(1, transform, o) +
    build(2, preview, o) +
    build(3, records, o)
  );
}

function streamsBank(o: VisualOptions): string {
  const raw =
    txt(26, 25, "Synthetic log examples", 19, C.gray, 500) +
    rect(25, 47, 330, 98, C.white, C.blue, 10) +
    txt(45, 79, "API log", 23, C.ink, 600) +
    txt(45, 111, '{"svc":"payment"}', 20, C.blue, 500, "start", true) +
    rect(25, 178, 330, 98, C.white, C.pink, 10) +
    txt(45, 211, "Legacy log", 23, C.ink, 600) +
    txt(45, 244, "PAY | MOB | WAIT", 20, C.pink, 500, "start", true) +
    txt(190, 318, "Different formats", 22, C.gray, 500, "middle");
  const preview =
    path(
      "M355 97C410 97 396 159 450 159M355 227C410 227 396 159 450 159",
      C.blue,
    ) +
    rect(450, 42, 361, 237, C.white, C.blue, 12) +
    txt(470, 76, "Processing preview", 24, C.ink, 600) +
    line(470, 93, 789, 93, C.line) +
    txt(470, 126, "Field", 20, C.gray, 500) +
    txt(656, 126, "Sample", 20, C.gray, 500) +
    line(470, 138, 789, 138, C.line) +
    txt(470, 169, "service", 22, C.ink, 500, "start", true) +
    txt(470, 210, "channel", 22, C.ink, 500, "start", true) +
    txt(470, 251, "outcome", 22, C.ink, 500, "start", true) +
    txt(630, 318, "Validate the mapping", 22, C.gray, 500, "middle") +
    particle("M355 97C410 97 396 159 450 159", C.blue, 4.8) +
    particle("M355 227C410 227 396 159 450 159", C.pink, 5.4, -2);
  const fields =
    txt(656, 169, "payment", 21, C.blue, 500, "start", true) +
    txt(656, 210, "mobile", 21, C.blue, 500, "start", true) +
    txt(656, 251, "waiting", 21, C.blue, 500, "start", true) +
    check(781, 314);
  const search =
    arrow(821, 158, 875, 158, C.teal) +
    txt(977, 27, "Search ready", 24, C.ink, 600, "middle") +
    iso(897, 139, 75, 24, 24, C.white, C.lightTeal, C.teal) +
    iso(897, 117, 75, 24, 24, C.white, C.lightTeal, C.teal) +
    iso(897, 95, 75, 24, 24, C.white, C.lightTeal, C.teal) +
    txt(977, 232, "Search by service", 20, C.ink, 500, "middle") +
    txt(977, 263, "and channel", 20, C.ink, 500, "middle") +
    txt(977, 318, "Outcome stays visible", 20, C.gray, 500, "middle") +
    particle("M821 158H875", C.teal, 3.5, -1) +
    line(27, 340, 1063, 340, C.line);
  return (
    build(0, raw, o) +
    build(1, preview, o) +
    build(2, fields, o) +
    build(3, search, o)
  );
}

function complementarySignals(o: VisualOptions): string {
  const center =
    path(
      "M350 99C409 99 414 159 446 159M750 99C693 99 693 159 654 159M350 268C407 268 409 207 446 207M750 268C694 268 689 207 654 207",
      C.line,
    ) +
    iso(426, 122, 123, 69, 36, C.white, C.lightBlue, C.blue) +
    txt(550, 278, "Payment service", 27, C.ink, 600, "middle");
  const logs =
    rect(28, 35, 320, 119, C.white, C.line, 11) +
    txt(50, 70, "Logs", 24, C.ink, 600) +
    line(50, 92, 112, 92, C.blue, 4) +
    line(125, 92, 321, 92, C.line, 3) +
    txt(50, 129, "What happened?", 22, C.gray) +
    particle("M350 99C409 99 414 159 446 159", C.blue, 4.8);
  const metrics =
    rect(752, 35, 320, 119, C.white, C.line, 11) +
    txt(774, 70, "Metrics", 24, C.ink, 600) +
    path("M775 102H824L842 84L862 101L883 86L901 92H1049", C.teal) +
    txt(774, 132, "What changed?", 22, C.gray) +
    particle("M750 99C693 99 693 159 654 159", C.teal, 4.2, -1);
  const traces =
    rect(28, 210, 320, 121, C.white, C.line, 11) +
    txt(50, 245, "Traces", 24, C.ink, 600) +
    line(52, 267, 211, 267, C.lightPink, 7) +
    line(83, 283, 286, 283, C.pink, 7) +
    txt(50, 314, "Where is the delay?", 22, C.gray) +
    particle("M350 268C407 268 409 207 446 207", C.pink, 5, -2);
  const experience =
    rect(752, 210, 320, 121, C.white, C.line, 11) +
    txt(774, 245, "User experience", 24, C.ink, 600) +
    [0, 1, 2, 3]
      .map((n) =>
        circle(
          788 + n * 36,
          270,
          6,
          n === 2 ? C.lightPink : C.lightBlue,
          n === 2 ? C.pink : C.blue,
        ),
      )
      .join("") +
    txt(774, 314, "What did the user see?", 22, C.gray) +
    particle("M750 268C694 268 689 207 654 207", C.blue, 4.7, -0.5);
  return (
    build(0, center + logs, o) +
    build(1, metrics, o) +
    build(2, traces, o) +
    build(3, experience, o)
  );
}

export function renderFoundation(id: number, o: VisualOptions): string {
  switch (id) {
    case 30:
      return observabilityCover(o);
    case 31:
      return connectedBank(o);
    case 32:
      return philosophy(o);
    case 33:
      return searchFoundation(o);
    case 34:
      return openCollection(o);
    case 35:
      return streamsMechanism(o);
    case 36:
      return streamsBank(o);
    case 37:
      return complementarySignals(o);
    default:
      return "";
  }
}
