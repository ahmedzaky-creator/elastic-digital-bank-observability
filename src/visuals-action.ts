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

/** Original explanatory diagrams; these are authored examples, not product UI. */
export function renderAction(id: number, o: VisualOptions): string {
  switch (id) {
    case 38:
      return connectedRca(o);
    case 39:
      return fsiUseCases(o);
    case 40:
      return workflows(o);
    case 41:
      return bankRunbook(o);
    case 42:
      return operatingModel(o);
    case 43:
      return emiratesNbd(o);
    case 44:
      return pairedProof(o);
    case 45:
      return closingMechanism(o);
    default:
      return "";
  }
}

const movingDot = (d: string, color = C.blue, duration = "4s") =>
  `<circle class="request-dot" r="4" fill="${color}"><animateMotion dur="${duration}" repeatCount="indefinite" path="${d}"/></circle>`;

function workflows(o: VisualOptions): string {
  const triggers =
    txt(25, 28, "TRIGGERS", 18, C.gray, 600) +
    pill(25, 53, 164, "Manual") +
    pill(25, 128, 164, "Schedule") +
    pill(25, 203, 164, "Alert") +
    path(
      "M189 69 H211 V144 H247 M189 144 H247 M189 219 H211 V144",
      C.blue,
      false,
      true,
    ) +
    arrow(226, 144, 247, 144) +
    movingDot("M189 69 H211 V144 H247");
  const query =
    rect(258, 72, 240, 145, C.white, C.blue) +
    iso(278, 103, 23, 25, 10, C.white, C.lightBlue, C.blue) +
    txt(337, 116, "Elastic query", 22, C.ink, 600) +
    lines(279, 162, ["Service context", "Related evidence"], 20, C.gray, 28) +
    path("M498 144 H535", C.blue, false, true) +
    arrow(511, 144, 535, 144);
  const condition =
    `<path d="M613 75 L691 144 L613 213 L535 144 Z" fill="${C.lightBlue}" stroke="${C.blue}" stroke-width="1.5"/>` +
    txt(613, 139, "Condition", 21, C.blue, 600, "middle") +
    txt(613, 166, "check", 21, C.blue, 600, "middle") +
    path("M613 75 V40 H799 V81", C.blue, false, true) +
    arrow(799, 59, 799, 81) +
    txt(703, 29, "Met", 18, C.blue, 600, "middle") +
    path("M613 213 V249 H799 V231", C.gray, false, true) +
    arrow(799, 249, 799, 231, C.gray) +
    txt(704, 277, "Otherwise", 18, C.gray, 500, "middle");
  const actions =
    rect(741, 81, 335, 93, C.lightBlue, C.blue) +
    txt(764, 114, "Configured action", 23, C.ink, 600) +
    txt(764, 148, "Ticket · notification · HTTP", 20, C.gray) +
    rect(741, 192, 335, 39, C.white, C.line, 6) +
    txt(908, 219, "Record / end", 21, C.gray, 500, "middle") +
    line(25, 302, 1076, 302, C.line, 1.5) +
    txt(25, 337, "Execution history", 21, C.blue, 600) +
    circle(290, 329, 6, C.blue, C.blue) +
    txt(308, 337, "Trigger", 20, C.gray) +
    line(380, 329, 423, 329, C.line) +
    circle(438, 329, 6, C.blue, C.blue) +
    txt(456, 337, "Query", 20, C.gray) +
    line(521, 329, 560, 329, C.line) +
    circle(575, 329, 6, C.blue, C.blue) +
    txt(593, 337, "Branch", 20, C.gray) +
    line(667, 329, 707, 329, C.line) +
    circle(722, 329, 6, C.teal, C.teal) +
    txt(740, 337, "Action result", 20, C.gray) +
    txt(1075, 337, "Illustrative", 18, C.gray, 400, "end");
  return (
    build(0, triggers, o) +
    build(1, query, o) +
    build(2, condition, o) +
    build(3, actions, o)
  );
}

function bankRunbook(o: VisualOptions): string {
  const collect =
    circle(64, 96, 34, C.lightPink, C.lightPink) +
    path(
      "M48 105 h32 l-5-7 v-12 a11 11 0 0 0-22 0 v12 Z M60 112 q4 6 8 0",
      C.pink,
    ) +
    txt(64, 159, "Alert", 23, C.ink, 600, "middle") +
    path("M104 96 H190", C.blue, false, true) +
    arrow(169, 96, 190, 96) +
    iso(211, 72, 48, 47, 20, C.white, C.lightBlue, C.blue) +
    txt(259, 159, "Collect context", 23, C.ink, 600, "middle") +
    txt(259, 188, "Service · evidence · owner", 18, C.gray, 400, "middle");
  const incident =
    path("M318 96 H410", C.blue, false, true) +
    arrow(389, 96, 410, 96) +
    rect(427, 43, 278, 131, C.white, C.blue, 5) +
    line(449, 67, 479, 67, C.blue, 3) +
    txt(449, 101, "Create / update incident", 21, C.ink, 600) +
    txt(449, 139, "Notify the service owner", 20, C.gray) +
    path("M705 96 H769", C.blue, false, true) +
    arrow(747, 96, 769, 96);
  const governance =
    rect(783, 25, 293, 139, C.white, C.gray, 5, true) +
    txt(806, 55, "BANK PROCESS", 18, C.gray, 600) +
    txt(806, 92, "Approval", 24, C.ink, 600) +
    txt(806, 128, "Existing bank process", 20, C.gray) +
    path("M929 164 V218", C.gray, true) +
    arrow(929, 197, 929, 218, C.gray, true) +
    rect(783, 230, 293, 85, C.lightBlue, C.blue, 5) +
    txt(806, 263, "Configured response", 23, C.ink, 600) +
    txt(806, 294, "Restore approved setting", 20, C.gray);
  const verify =
    arrow(767, 272, 643, 272, C.teal) +
    rect(260, 230, 363, 85, C.white, C.teal, 5) +
    check(286, 259) +
    txt(311, 268, "Verify recovery", 23, C.ink, 600) +
    txt(284, 299, "Latency · errors · backlog", 20, C.gray) +
    txt(
      25,
      348,
      "Illustrative runbook · no automatic transaction handling",
      18,
      C.gray,
    ) +
    movingDot("M104 96 H190", C.blue, "3.5s");
  return (
    build(0, collect, o) +
    build(1, incident, o) +
    build(2, governance, o) +
    build(3, verify, o)
  );
}

function emiratesNbd(o: VisualOptions): string {
  const environment =
    rect(24, 28, 410, 258, C.white, C.blue, 8) +
    txt(48, 64, "Emirates NBD", 26, C.ink, 600) +
    pill(48, 85, 161, "On-premises") +
    iso(61, 166, 48, 46, 20, C.white, C.lightBlue, C.blue) +
    iso(216, 166, 48, 46, 20, C.white, C.lightBlue, C.blue) +
    path("M109 150 V132 H264 V150", C.blue) +
    txt(109, 255, "Logs", 22, C.ink, 600, "middle") +
    txt(264, 255, "APM", 22, C.ink, 600, "middle");
  const before =
    txt(588, 72, "TIME TO LOCATE PROBLEMS", 18, C.gray, 600, "middle") +
    txt(578, 163, "Days", 57, C.ink, 600, "middle");
  const after =
    path("M686 145 H780", C.blue, false, true) +
    arrow(757, 145, 780, 145) +
    circle(930, 145, 88, C.lightBlue, C.lightBlue) +
    txt(930, 158, "Minutes", 40, C.blue, 600, "middle") +
    txt(930, 266, "Reported result", 20, C.gray, 500, "middle") +
    movingDot("M686 145 H780", C.blue);
  const attribution =
    line(24, 305, 1076, 305, C.line, 1.5) +
    txt(
      24,
      337,
      "Public Elastic customer story · centralized logs + APM",
      21,
      C.gray,
    ) +
    txt(1076, 337, "Customer proof", 18, C.blue, 600, "end");
  return (
    build(0, environment, o) +
    build(1, before, o) +
    build(2, after, o) +
    build(3, attribution, o)
  );
}

function connectedRca(o: VisualOptions): string {
  const symptom =
    pill(22, 24, 181, "SYNTHETIC SERVICE", C.lightBlue, C.blue) +
    iso(53, 114, 50, 54, 21, C.white, C.lightBlue, C.blue) +
    circle(103, 103, 22, C.lightPink, C.pink) +
    path("M103 90 v13 l8 6", C.pink) +
    txt(110, 224, "Payment service", 22, C.ink, 600, "middle") +
    txt(110, 255, "Latency symptom", 20, C.gray, 400, "middle");
  const evidence =
    path("M166 157 H240", C.blue, false, true) +
    arrow(218, 157, 240, 157) +
    rect(251, 42, 359, 224, C.white, C.blue, 6) +
    txt(274, 76, "Related evidence", 23, C.ink, 600) +
    line(274, 91, 587, 91) +
    txt(274, 124, "Trace", 20, C.blue, 600) +
    txt(370, 124, "Connection wait", 20) +
    txt(274, 162, "Log", 20, C.blue, 600) +
    txt(370, 162, "Timeout event", 20) +
    txt(274, 200, "Metric", 20, C.blue, 600) +
    txt(370, 200, "Pool saturation", 20) +
    txt(274, 238, "Change", 20, C.blue, 600) +
    txt(370, 238, "Connection limit", 20) +
    movingDot("M166 157 H240", C.blue);
  const candidate =
    path("M610 157 H653", C.blue, false, true) +
    arrow(632, 157, 653, 157) +
    rect(665, 87, 205, 165, C.lightPink, C.pink, 6) +
    txt(687, 121, "Candidate", 23, C.pink, 600) +
    lines(
      687,
      160,
      ["Connection-limit", "configuration", "needs inspection"],
      20,
      C.ink,
      29,
    );
  const verification =
    arrow(883, 157, 912, 157, C.teal) +
    circle(996, 111, 32, C.lightTeal, C.lightTeal) +
    path("M980 111 l10 10 22-24", C.teal) +
    txt(996, 165, "Verified finding", 20, C.ink, 600, "middle") +
    lines(
      996,
      197,
      ["Limit reduced", "after change"],
      20,
      C.ink,
      27,
      "middle",
    ) +
    txt(996, 260, "Owner verified", 20, C.teal, 600, "middle") +
    line(22, 295, 1076, 295, C.line, 1.5) +
    txt(
      22,
      327,
      "Check configuration, infrastructure and dependencies before confirming the cause.",
      20,
      C.gray,
    ) +
    txt(22, 353, "External-provider internals remain unobserved.", 18, C.gray);
  return (
    build(0, symptom, o) +
    build(1, evidence, o) +
    build(2, candidate, o) +
    build(3, verification, o)
  );
}

function fsiUseCases(o: VisualOptions): string {
  const structure =
    line(365, 30, 365, 299, C.line, 1.5) +
    line(731, 30, 731, 299, C.line, 1.5) +
    txt(23, 38, "Payment APIs", 24, C.ink, 600) +
    txt(390, 38, "Messaging", 24, C.ink, 600) +
    txt(758, 38, "Batch processing", 24, C.ink, 600) +
    pill(23, 319, 230, "PROPOSED INDICATORS", C.lightBlue, C.blue) +
    txt(276, 342, "Agree definitions and baselines with the bank.", 20, C.gray);
  const payments =
    rect(24, 92, 111, 73, C.lightBlue, C.blue, 6) +
    txt(79, 136, "API", 24, C.blue, 600, "middle") +
    path("M135 128 H211", C.blue, false, true) +
    arrow(190, 128, 211, 128) +
    iso(224, 109, 44, 47, 17, C.white, C.lightBlue, C.blue) +
    circle(312, 91, 17, C.lightPink, C.pink) +
    path("M312 81 v10 l7 5", C.pink) +
    txt(79, 209, "Request", 20, C.gray, 400, "middle") +
    txt(268, 209, "Service", 20, C.gray, 400, "middle") +
    txt(23, 260, "Latency + errors", 22, C.blue, 600) +
    txt(23, 290, "By service + dependency", 20, C.gray) +
    movingDot("M135 128 H211", C.blue, "5s");
  const messaging =
    rect(392, 94, 148, 78, C.white, C.blue, 6) +
    rect(407, 114, 28, 38, C.lightBlue, C.blue, 3) +
    rect(452, 114, 28, 38, C.lightBlue, C.blue, 3) +
    rect(497, 114, 28, 38, C.lightBlue, C.blue, 3) +
    path("M540 133 H595", C.blue, false, true) +
    arrow(574, 133, 595, 133) +
    rect(605, 96, 98, 73, C.lightBlue, C.blue, 6) +
    txt(654, 139, "Worker", 20, C.blue, 600, "middle") +
    txt(466, 209, "Queue", 20, C.gray, 400, "middle") +
    path("M679 178 V209 H621 V178", C.pink, true) +
    arrow(621, 198, 621, 178, C.pink, true) +
    txt(390, 260, "Backlog + retries", 22, C.blue, 600) +
    txt(390, 290, "Oldest-message age", 20, C.gray);
  const batch =
    rect(768, 94, 78, 72, C.white, C.blue, 6) +
    txt(807, 138, "Job", 22, C.ink, 600, "middle") +
    path("M846 130 H878", C.blue, false, true) +
    arrow(857, 130, 878, 130) +
    rect(887, 94, 78, 72, C.white, C.blue, 6) +
    txt(926, 138, "Job", 22, C.ink, 600, "middle") +
    path("M965 130 H997", C.blue, false, true) +
    arrow(976, 130, 997, 130) +
    rect(1006, 94, 69, 72, C.lightTeal, C.teal, 6) +
    check(1040, 130) +
    line(768, 205, 1075, 205, C.line, 2) +
    circle(1005, 205, 14, C.lightPink, C.pink) +
    path("M1005 197 v8 l6 4", C.pink) +
    txt(758, 260, "Duration + failures", 22, C.blue, 600) +
    txt(758, 290, "Deadline risk", 20, C.gray);
  return (
    build(0, structure, o) +
    build(1, payments, o) +
    build(2, messaging, o) +
    build(3, batch, o)
  );
}

function operatingModel(o: VisualOptions): string {
  const boundary =
    rect(24, 25, 624, 247, C.white, C.blue, 8) +
    txt(48, 62, "Bank-managed environment", 24, C.ink, 600) +
    pill(48, 80, 167, "Self-managed") +
    iso(66, 156, 46, 46, 20, C.white, C.lightBlue, C.blue) +
    iso(182, 156, 46, 46, 20, C.white, C.lightBlue, C.blue) +
    txt(169, 249, "Operate the platform", 21, C.ink, 500, "middle");
  const history =
    path("M292 171 H355", C.blue, false, true) +
    arrow(332, 171, 355, 171) +
    rect(371, 119, 237, 102, C.lightBlue, C.blue, 5) +
    line(387, 142, 590, 142, C.blue, 1.5) +
    line(387, 164, 590, 164, C.blue, 1.5) +
    line(387, 186, 538, 186, C.blue, 1.5) +
    txt(489, 249, "Searchable history", 21, C.ink, 500, "middle") +
    movingDot("M292 171 H355", C.blue);
  const dependencies =
    txt(700, 49, "Plan dependency paths", 24, C.ink, 600) +
    arrow(734, 96, 666, 96, C.gray, true) +
    txt(755, 104, "Packages", 22, C.ink, 600) +
    arrow(734, 160, 666, 160, C.gray, true) +
    txt(755, 168, "Upgrades", 22, C.ink, 600) +
    arrow(666, 224, 734, 224, C.gray, true) +
    txt(755, 232, "Support data", 22, C.ink, 600);
  const choices =
    line(24, 291, 1076, 291, C.line, 1.5) +
    txt(
      24,
      323,
      "Retention, access and cost remain design choices.",
      22,
      C.blue,
      600,
    ) +
    txt(
      24,
      352,
      "Plan the approved AI model connection separately from on-premises data storage.",
      18,
      C.gray,
    );
  return (
    build(0, boundary, o) +
    build(1, history, o) +
    build(2, dependencies, o) +
    build(3, choices, o)
  );
}

function pairedProof(o: VisualOptions): string {
  const labels =
    line(548, 27, 548, 286, C.line, 1.5) +
    txt(27, 44, "Oney Bank", 27, C.ink, 600) +
    txt(27, 83, "API-incident detection", 23, C.blue, 600) +
    txt(596, 44, "Discover", 27, C.ink, 600) +
    txt(596, 83, "Historical data retrieval", 23, C.blue, 600);
  const oney =
    txt(38, 110, "UP TO", 18, C.gray, 600) +
    txt(38, 188, "20", 67, C.ink, 600) +
    txt(40, 227, "minutes", 23, C.gray) +
    path("M180 168 H289", C.blue, false, true) +
    arrow(267, 168, 289, 168) +
    circle(387, 170, 68, C.lightBlue, C.lightBlue) +
    txt(387, 190, "1", 69, C.blue, 600, "middle") +
    txt(387, 256, "minute", 23, C.ink, 500, "middle") +
    movingDot("M180 168 H289", C.blue);
  const discover =
    txt(596, 188, "24+", 65, C.ink, 600) +
    txt(598, 227, "hours", 23, C.gray) +
    path("M730 168 H839", C.blue, false, true) +
    arrow(817, 168, 839, 168) +
    circle(957, 170, 73, C.lightBlue, C.lightBlue) +
    txt(957, 183, "Minutes", 35, C.blue, 600, "middle") +
    pill(596, 251, 230, "ECE · AWS / S3", C.lightBlue, C.blue) +
    movingDot("M730 168 H839", C.blue);
  const attribution =
    line(27, 304, 1076, 304, C.line, 1.5) +
    txt(
      27,
      323,
      "Public Elastic customer stories · distinct measures and environments",
      21,
      C.gray,
    ) +
    txt(
      27,
      347,
      "Reported outcomes predate the illustrated Streams and Workflows examples.",
      18,
      C.gray,
    );
  return (
    build(0, labels, o) +
    build(1, oney, o) +
    build(2, discover, o) +
    build(3, attribution, o)
  );
}

function closingMechanism(o: VisualOptions): string {
  const streams =
    rect(39, 66, 85, 73, C.white, C.line, 5) +
    line(52, 86, 105, 86, C.gray) +
    line(52, 104, 111, 104, C.gray) +
    line(52, 122, 93, 122, C.gray) +
    rect(72, 103, 85, 73, C.white, C.line, 5) +
    line(85, 123, 138, 123, C.gray) +
    line(85, 141, 144, 141, C.gray) +
    line(85, 159, 126, 159, C.gray) +
    path("M167 126 H207", C.blue, false, true) +
    arrow(186, 126, 207, 126) +
    iso(220, 104, 40, 48, 17, C.white, C.lightBlue, C.blue) +
    txt(170, 229, "Streams", 25, C.ink, 600, "middle") +
    txt(170, 262, "Curate useful evidence", 20, C.gray, 400, "middle");
  const connected =
    path("M327 126 H398", C.blue, false, true) +
    arrow(376, 126, 398, 126) +
    circle(551, 126, 47, C.lightBlue, C.blue) +
    path(
      "M533 126 a15 15 0 1 1 30 0 a15 15 0 1 1-30 0 M559 137 l16 16",
      C.blue,
    ) +
    path(
      "M518 93 L478 63 M587 96 L630 66 M518 159 L478 188 M587 158 L630 187",
      C.blue,
    ) +
    circle(469, 56, 13, C.white, C.blue) +
    circle(639, 59, 13, C.white, C.blue) +
    circle(469, 195, 13, C.white, C.blue) +
    circle(639, 194, 13, C.lightTeal, C.teal) +
    txt(550, 229, "Connected RCA", 25, C.ink, 600, "middle") +
    txt(550, 262, "Test the explanation", 20, C.gray, 400, "middle");
  const actions =
    path("M696 126 H767", C.blue, false, true) +
    arrow(746, 126, 767, 126) +
    circle(803, 126, 16, C.lightBlue, C.blue) +
    path("M819 126 H864", C.blue, false, true) +
    `<path d="M890 101 L915 126 L890 151 L865 126 Z" fill="${C.white}" stroke="${C.blue}" stroke-width="1.5"/>` +
    path("M915 126 H952 V82 H988 M952 126 V172 H988", C.blue, false, true) +
    rect(989, 66, 54, 32, C.lightBlue, C.blue, 5) +
    rect(989, 156, 54, 32, C.white, C.blue, 5) +
    txt(924, 229, "Workflows", 25, C.ink, 600, "middle") +
    txt(924, 262, "Make action repeatable", 20, C.gray, 400, "middle") +
    movingDot("M327 126 H398", C.blue) +
    movingDot("M696 126 H767", C.blue);
  const validation =
    rect(39, 302, 1004, 48, C.lightBlue, C.lightBlue, 6) +
    check(67, 326, C.blue) +
    txt(
      550,
      334,
      "Validate one payment-processing service · agree the evidence · choose the next step",
      21,
      C.blue,
      600,
      "middle",
    );
  return (
    build(0, streams, o) +
    build(1, connected, o) +
    build(2, actions, o) +
    build(3, validation, o)
  );
}
