import type { VisualOptions } from "./types";
import {
  C,
  txt,
  lines,
  rect,
  line,
  circle,
  path,
  arrow,
  pill,
  build,
  check,
  iso,
} from "./visual-primitives";

/** Original SVG compositions. The scene wrapper supplies the shared SVG root. */
export function renderInvestigation(index: number, o: VisualOptions): string {
  switch (index) {
    case 9:
      return transferPath(o);
    case 10:
      return evidence(o);
    case 11:
      return verification(o);
    case 12:
      return recovery(o);
    case 13:
      return reliabilityTarget(o);
    case 18:
      return oney(o);
    case 19:
      return wepay(o);
    case 20:
      return enbd(o);
    default:
      return "";
  }
}

function verification(o: VisualOptions): string {
  const candidate =
    // A change record is evidence to inspect, rather than a causal verdict.
    path("M30 92 L49 80 H288 V236 H30 Z", C.line) +
    rect(21, 92, 267, 152, C.white, C.line, 4) +
    pill(40, 111, 116, "CANDIDATE", C.lightPink, C.pink) +
    txt(40, 176, "Reduced connection", 23, C.ink, 600) +
    txt(40, 206, "limit after change", 23, C.ink, 600);

  const owner =
    arrow(302, 167, 359, 167, C.blue, true) +
    circle(396, 69, 24, C.lightBlue, C.lightBlue) +
    path("M386 69 a10 10 0 1 1 20 0 a10 10 0 1 1 -20 0 M404 77 l9 9", C.blue) +
    txt(433, 77, "Service owner checks", 24, C.ink, 600) +
    line(373, 100, 723, 100, C.line, 1.5) +
    check(388, 135, C.blue) +
    txt(413, 142, "Actual configuration", 21) +
    check(388, 180, C.blue) +
    txt(413, 187, "Capacity + database health", 21) +
    check(388, 225, C.blue) +
    txt(413, 232, "Competing explanations", 21);

  const finding =
    arrow(739, 167, 797, 167, C.teal) +
    rect(812, 92, 266, 152, C.lightTeal, C.teal, 4) +
    check(839, 127) +
    txt(861, 135, "Verified finding", 23, C.ink, 600) +
    lines(
      832,
      176,
      ["Limit incorrectly reduced", "in this fictional incident"],
      20,
      C.ink,
      30,
    );

  const approval =
    lines(
      22,
      296,
      ["External-provider internals", "remain unobserved"],
      18,
      C.gray,
      25,
    ) +
    path("M946 249 V280 H772", C.teal) +
    rect(373, 283, 705, 56, C.white, C.blue, 4) +
    txt(
      397,
      318,
      "Restoration follows normal change approval",
      23,
      C.blue,
      600,
    );

  return (
    build(0, candidate, o) +
    build(1, owner, o) +
    build(2, finding, o) +
    build(3, approval, o)
  );
}

function oney(o: VisualOptions): string {
  const before =
    txt(191, 65, "UP TO", 23, C.gray, 600, "middle") +
    txt(191, 174, "20", 110, C.ink, 600, "middle") +
    txt(191, 234, "minutes", 30, C.ink, 500, "middle");

  const comparison =
    path("M352 154 H704", C.blue, false, true) +
    arrow(674, 154, 727, 154, C.blue) +
    txt(539, 125, "API-incident detection", 24, C.blue, 600, "middle");

  const after =
    circle(894, 143, 104, C.lightTeal, C.lightTeal) +
    txt(894, 174, "1", 110, C.blue, 600, "middle") +
    txt(894, 234, "minute", 30, C.ink, 500, "middle");

  const measure =
    line(69, 282, 1031, 282, C.line, 1.5) +
    txt(
      550,
      318,
      "Oney Bank · publicly reported customer result",
      22,
      C.gray,
      500,
      "middle",
    ) +
    txt(
      550,
      347,
      "Measure: time to detect API incidents",
      18,
      C.gray,
      400,
      "middle",
    );

  return (
    build(0, before, o) +
    build(1, comparison, o) +
    build(2, after, o) +
    build(3, measure, o)
  );
}

function transferPath(o: VisualOptions): string {
  const mobile =
    rect(19, 24, 751, 267, C.white, C.line, 8, true) +
    txt(42, 56, "Instrumented request path", 22, C.blue, 600) +
    rect(54, 96, 82, 131, C.white, C.ink, 14) +
    line(80, 108, 110, 108, C.ink, 3) +
    circle(95, 156, 21, C.lightBlue, C.lightBlue) +
    path("M82 156h26m-9-8 9 8-9 8", C.blue) +
    line(82, 214, 108, 214, C.ink, 3) +
    txt(95, 270, "Mobile app", 23, C.ink, 600, "middle");

  const gateway =
    path("M151 160H268", C.blue, false, true) +
    arrow(252, 160, 278, 160) +
    iso(294, 142, 60, 48, 25, C.white, C.lightBlue, C.blue) +
    path("M319 151v27m19-19v27m19-19v27m19-19v27", C.ink) +
    txt(354, 270, "API gateway", 23, C.ink, 600, "middle");

  const payment =
    path("M431 160H523", C.blue, false, true) +
    arrow(510, 160, 536, 160) +
    iso(550, 135, 76, 66, 29, C.lightBlue, C.white, C.lightBlue) +
    circle(626, 127, 24, C.lightPink, C.pink) +
    path("M626 114v14l9 6", C.pink) +
    txt(626, 270, "Payment service", 23, C.ink, 600, "middle") +
    pill(542, 55, 168, "Connection wait", C.lightPink, C.pink);

  const boundary =
    path("M718 160H841", C.gray, true) +
    arrow(825, 160, 851, 160, C.gray) +
    rect(867, 96, 210, 139, C.bg, C.gray, 8, true) +
    txt(972, 149, "External", 25, C.gray, 600, "middle") +
    txt(972, 181, "provider", 25, C.gray, 600, "middle") +
    txt(972, 270, "Internals unobserved", 20, C.gray, 500, "middle") +
    txt(
      550,
      339,
      "Observed timing narrows the search. The owner still checks the cause.",
      22,
      C.gray,
      400,
      "middle",
    );

  return (
    build(0, mobile, o) +
    build(1, gateway, o) +
    build(2, payment, o) +
    build(3, boundary, o)
  );
}

function evidence(o: VisualOptions): string {
  const request =
    txt(29, 43, "Request timing", 23, C.ink, 600) +
    line(30, 88, 558, 88, C.blue, 7) +
    line(240, 88, 460, 88, C.pink, 12) +
    txt(280, 127, "Payment service waits", 21, C.pink, 500, "middle");

  const events =
    txt(29, 178, "Application events", 23, C.ink, 600) +
    rect(29, 194, 530, 49, C.white, C.line, 4) +
    circle(51, 218, 5, C.pink, C.pink) +
    txt(72, 226, "Waiting for an available connection", 21);

  const change =
    txt(29, 285, "Change context", 23, C.ink, 600) +
    rect(29, 301, 530, 44, C.white, C.line, 4) +
    txt(50, 330, "Approved configuration-change record", 21);

  const candidate =
    path("M580 88H622V215M580 218H622M580 323H622V215", C.line) +
    path("M622 215H720", C.blue, false, true) +
    arrow(700, 215, 735, 215) +
    rect(754, 124, 320, 166, C.lightPink, C.pink, 5) +
    pill(775, 141, 116, "CANDIDATE", C.white, C.pink) +
    txt(775, 209, "Lower connection limit", 23, C.ink, 600) +
    txt(775, 241, "may explain the wait", 23, C.ink, 600) +
    txt(914, 329, "Owner verification next", 21, C.gray, 500, "middle");

  return (
    build(0, request, o) +
    build(1, events, o) +
    build(2, change, o) +
    build(3, candidate, o)
  );
}

function recovery(o: VisualOptions): string {
  const approved =
    rect(26, 46, 275, 148, C.white, C.blue, 5) +
    check(53, 76, C.blue) +
    txt(47, 118, "Approved restoration", 23, C.ink, 600) +
    txt(47, 155, "Owner’s change process", 20, C.gray);

  const fresh =
    path("M313 121H365", C.blue, false, true) +
    arrow(349, 121, 377, 121) +
    rect(390, 46, 282, 148, C.white, C.blue, 5) +
    check(417, 76, C.blue) +
    txt(411, 118, "Fresh requests", 24, C.ink, 600) +
    txt(411, 155, "Check response + timing", 20, C.gray);

  const completion =
    path("M685 121H728", C.teal, false, true) +
    arrow(713, 121, 742, 121, C.teal) +
    rect(755, 46, 320, 148, C.lightTeal, C.teal, 5) +
    check(782, 76) +
    txt(776, 118, "Completion signal", 24, C.ink, 600) +
    txt(776, 155, "Agreed downstream evidence", 20, C.ink);

  const earlier =
    line(26, 220, 1075, 220, C.line, 1.5, true) +
    txt(46, 267, "Earlier pending transfers", 23, C.ink, 600) +
    circle(386, 261, 9, C.lightPink, C.pink) +
    circle(413, 261, 9, C.lightPink, C.pink) +
    circle(440, 261, 9, C.lightPink, C.pink) +
    arrow(466, 261, 534, 261, C.gray) +
    txt(560, 266, "Status + reconciliation", 23, C.ink, 600) +
    txt(560, 297, "Handled separately", 20, C.gray) +
    txt(
      550,
      343,
      "API success alone does not establish settlement or correct balances.",
      21,
      C.gray,
      400,
      "middle",
    );

  return (
    build(0, approved, o) +
    build(1, fresh, o) +
    build(2, completion, o) +
    build(3, earlier, o)
  );
}

function reliabilityTarget(o: VisualOptions): string {
  const outcome =
    check(158, 42) +
    txt(
      550,
      51,
      "Define the observed customer outcome",
      25,
      C.ink,
      600,
      "middle",
    ) +
    line(180, 72, 921, 72, C.line, 1.5);

  const measure =
    txt(292, 133, "Good eligible journeys", 25, C.ink, 600, "middle") +
    line(88, 157, 496, 157, C.ink, 2) +
    txt(292, 197, "All eligible journeys", 25, C.ink, 600, "middle") +
    txt(550, 172, "=", 35, C.blue, 500, "middle") +
    txt(792, 171, "Journey indicator", 31, C.blue, 600, "middle");

  const target =
    txt(83, 277, "Target", 23, C.ink, 600) +
    rect(185, 242, 308, 54, C.white, C.blue, 5, true) +
    txt(339, 277, "Agreed with the bank", 21, C.gray, 500, "middle");

  const window =
    txt(570, 277, "Review window", 23, C.ink, 600) +
    rect(775, 242, 300, 54, C.white, C.blue, 5, true) +
    txt(925, 277, "Agreed with the bank", 21, C.gray, 500, "middle") +
    txt(
      550,
      343,
      "Review the same journey around releases and changes.",
      21,
      C.gray,
      400,
      "middle",
    );

  return (
    build(0, outcome, o) +
    build(1, measure, o) +
    build(2, target, o) +
    build(3, window, o)
  );
}

function wepay(o: VisualOptions): string {
  const context =
    line(69, 283, 1031, 283, C.line, 1.5) +
    txt(
      550,
      319,
      "Shared logging + telemetry · Google Cloud",
      23,
      C.gray,
      500,
      "middle",
    ) +
    txt(
      550,
      348,
      "Elastic-published customer result",
      18,
      C.gray,
      400,
      "middle",
    );

  const incident =
    circle(574, 218, 7, C.lightBlue, C.blue) +
    path("M588 218H676", C.blue, false, true) +
    txt(696, 226, "during incidents", 25, C.ink, 500);

  const impact =
    txt(620, 95, "TIME TO IDENTIFY", 23, C.gray, 600) +
    txt(620, 151, "customer impact", 35, C.ink, 600);

  const result =
    txt(244, 173, "90%", 110, C.blue, 600, "middle") +
    txt(244, 234, "less time", 31, C.ink, 500, "middle");

  return (
    build(0, context, o) +
    build(1, incident, o) +
    build(2, impact, o) +
    build(3, result, o)
  );
}

function enbd(o: VisualOptions): string {
  const logs =
    rect(68, 208, 190, 38, C.white, C.ink, 4) +
    rect(68, 256, 190, 38, C.white, C.ink, 4) +
    circle(88, 227, 4, C.blue, C.blue) +
    line(105, 227, 239, 227, C.line, 2) +
    circle(88, 275, 4, C.blue, C.blue) +
    line(105, 275, 239, 275, C.line, 2) +
    txt(163, 334, "Centralized logs", 23, C.ink, 500, "middle");

  const shared =
    path("M278 251H418", C.blue, false, true) +
    arrow(399, 251, 435, 251) +
    iso(452, 250, 96, 33, 28, C.white, C.lightBlue, C.blue) +
    path("M506 243l42-20 42 20m-84 10 42-20 42 20", C.ink) +
    txt(548, 334, "On-premises evidence", 23, C.ink, 600, "middle");

  const apm =
    path("M820 251H677", C.blue, false, true) +
    arrow(696, 251, 660, 251) +
    circle(849, 224, 10, C.white, C.blue) +
    circle(922, 269, 10, C.white, C.blue) +
    circle(997, 224, 10, C.white, C.blue) +
    path("M858 230l55 33m18 0 57-33", C.blue) +
    txt(922, 334, "Application traces", 23, C.ink, 500, "middle");

  const result =
    txt(
      550,
      44,
      "Time to locate customer-facing problems",
      25,
      C.gray,
      500,
      "middle",
    ) +
    txt(239, 145, "days", 78, C.ink, 600, "middle") +
    path("M414 117H683", C.blue, false, true) +
    arrow(665, 117, 701, 117) +
    txt(881, 145, "minutes", 78, C.blue, 600, "middle");

  return (
    build(0, logs, o) +
    build(1, shared, o) +
    build(2, apm, o) +
    build(3, result, o)
  );
}
