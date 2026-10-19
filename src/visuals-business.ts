import type { VisualOptions } from "./types";
import {
  C,
  txt,
  rect,
  line,
  circle,
  path,
  arrow,
  pill,
  build,
  iso,
  check,
} from "./visual-primitives";

const phoneIcon = (x: number, y: number, w = 48, h = 72) =>
  rect(x, y, w, h, C.white, C.ink, 9) +
  line(x + w * 0.35, y + 8, x + w * 0.65, y + 8, C.ink, 2) +
  line(x + w * 0.38, y + h - 7, x + w * 0.62, y + h - 7, C.ink, 2);

const browserIcon = (x: number, y: number, w = 60, h = 46) =>
  rect(x, y, w, h, C.white, C.ink, 5) +
  line(x, y + 12, x + w, y + 12, C.ink, 1.5) +
  circle(x + 8, y + 6, 1.5, C.ink, C.ink) +
  circle(x + 15, y + 6, 1.5, C.ink, C.ink);

const person = (x: number, y: number, color = C.blue) =>
  circle(x, y, 18, C.white, color) +
  `<path d="M${x - 32} ${y + 65}v-13a32 26 0 0 1 64 0v13" fill="${C.white}" stroke="${color}" stroke-width="2"/>`;

const clock = (x: number, y: number, r = 33, color = C.pink) =>
  circle(x, y, r, C.white, color) +
  path(`M${x} ${y - r * 0.55}V${y}l${r * 0.4} ${r * 0.22}`, color);

const documentIcon = (x: number, y: number, color = C.blue) =>
  rect(x, y, 54, 68, C.white, C.ink, 5) +
  line(x + 12, y + 19, x + 40, y + 19, color, 2) +
  line(x + 12, y + 33, x + 40, y + 33, color, 2) +
  line(x + 12, y + 47, x + 32, y + 47, color, 2);

const keyIcon = (x: number, y: number) =>
  circle(x, y, 16, C.white, C.blue) +
  path(`M${x + 16} ${y}h35m-7 0v11m-12-11v8`, C.blue);

const transferIcon = (x: number, y: number, color = C.blue) =>
  path(
    `M${x - 28} ${y - 12}h56l-11-10m11 10-11 10M${x + 28} ${y + 15}h-56l11-10m-11 10 11 10`,
    color,
  );

const cardIcon = (x: number, y: number) =>
  rect(x, y, 70, 46, C.white, C.ink, 7) +
  line(x, y + 13, x + 70, y + 13, C.blue, 6) +
  line(x + 11, y + 33, x + 31, y + 33, C.ink, 2);

function cover(o: VisualOptions): string {
  const customer = `<g transform="translate(80 34)">
    ${rect(0, 0, 180, 258, C.white, C.ink, 25)}
    ${line(66, 13, 114, 13, C.ink, 4)}
    ${circle(90, 77, 31, C.lightBlue, C.blue)}
    ${path("M69 77h42M94 62l17 15-17 15", C.blue)}
    ${line(36, 137, 144, 137, C.ink, 2)}
    ${line(36, 158, 120, 158, C.line, 2)}
    ${rect(30, 191, 120, 35, C.lightBlue, C.lightBlue, 9)}
    ${path("M71 208h38M99 201l10 7-10 7", C.blue)}
    ${line(70, 244, 110, 244, C.ink, 3)}
  </g>`;
  const service =
    iso(410, 162, 115, 60, 40, C.white, C.lightBlue, C.blue) +
    `<path d="M466 138l59-30 59 30M477 143v38M509 127v38M541 127v38M573 143v38M466 188l59-30 59 30" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
  const evidence = `<g transform="translate(774 47)">
    <path d="M0 24L115 0l128 54-115 27Z" fill="${C.white}" stroke="${C.ink}" stroke-width="1.5"/>
    <path d="M0 24v54l128 57V81M128 135l115-54V54" fill="none" stroke="${C.ink}" stroke-width="1.5"/>
    ${path("M27 43l60 27m-60-9 60 27m-60-9 38 17", C.blue)}
    <path d="M0 102l115-24 128 54-115 27Z" fill="${C.white}" stroke="${C.ink}" stroke-width="1.5"/>
    <path d="M0 102v48l128 57v-48m0 48 115-54v-21" fill="none" stroke="${C.ink}" stroke-width="1.5"/>
    ${path("M23 123l23 10 20-15 24 38 25-15", C.teal)}
    <path d="M0 180l115-24 128 54-115 27Z" fill="${C.white}" stroke="${C.ink}" stroke-width="1.5"/>
    <path d="M0 180v45l128 57v-45m0 45 115-54v-18" fill="none" stroke="${C.ink}" stroke-width="1.5"/>
    ${circle(37, 199, 6, C.lightPink, C.pink)}${circle(82, 219, 6, C.lightPink, C.pink)}${circle(126, 238, 6, C.lightPink, C.pink)}
    ${line(43, 202, 76, 216, C.pink, 2)}${line(88, 222, 120, 235, C.pink, 2)}
  </g>`;
  return (
    build(
      0,
      customer + txt(185, 347, "Customer journey", 40, C.ink, 600, "middle"),
      o,
    ) +
    build(
      1,
      arrow(286, 164, 397, 164, C.blue) +
        `<circle r="6" fill="${C.blue}" class="request-dot"><animateMotion dur="3s" repeatCount="indefinite" path="M286 164H397"/></circle>` +
        service,
      o,
    ) +
    build(2, arrow(656, 164, 757, 164, C.teal) + evidence, o) +
    build(3, txt(895, 347, "Shared evidence", 40, C.ink, 600, "middle"), o)
  );
}

function promise(o: VisualOptions): string {
  const origin =
    person(88, 135) +
    txt(88, 270, "Customer", 23, C.ink, 600, "middle") +
    path("M155 192H1002", C.line);
  const access =
    iso(245, 177, 80, 32, 28, C.white, C.lightBlue, C.blue) +
    keyIcon(309, 133) +
    txt(325, 270, "Access the account", 23, C.ink, 600, "middle");
  const act =
    arrow(410, 192, 515, 192, C.blue) +
    iso(525, 177, 80, 32, 28, C.white, C.lightBlue, C.blue) +
    transferIcon(605, 128) +
    txt(605, 270, "Make the transfer", 23, C.ink, 600, "middle");
  const confirm =
    arrow(690, 192, 795, 192, C.teal) +
    iso(805, 177, 80, 32, 28, C.white, C.lightTeal, C.teal) +
    circle(885, 132, 30, C.lightTeal, C.teal) +
    path("M870 132l10 10 22-25", C.teal) +
    txt(885, 270, "Know the status", 23, C.ink, 600, "middle");
  const trust =
    line(245, 311, 965, 311, C.line) +
    check(385, 340) +
    txt(
      408,
      348,
      "Define the outcome the customer can confirm",
      23,
      C.ink,
      600,
    );
  return (
    build(0, origin + access, o) +
    build(1, act, o) +
    build(2, confirm, o) +
    build(3, trust, o)
  );
}

function journeys(o: VisualOptions): string {
  const route =
    person(73, 134) +
    path("M116 205H1035", C.line) +
    txt(73, 278, "Customer", 22, C.ink, 600, "middle");
  const opening =
    iso(210, 188, 68, 28, 24, C.white, C.lightBlue, C.blue) +
    documentIcon(251, 94) +
    txt(278, 278, "Account opening", 23, C.ink, 600, "middle");
  const login =
    iso(430, 188, 68, 28, 24, C.white, C.lightBlue, C.blue) +
    keyIcon(481, 130) +
    txt(498, 278, "Login", 23, C.ink, 600, "middle");
  const payments =
    iso(650, 188, 68, 28, 24, C.white, C.lightPink, C.pink) +
    transferIcon(718, 130, C.pink) +
    txt(718, 278, "Payments", 23, C.ink, 600, "middle");
  const cards =
    iso(870, 188, 68, 28, 24, C.white, C.lightBlue, C.blue) +
    cardIcon(903, 107) +
    txt(938, 278, "Cards", 23, C.ink, 600, "middle");
  const selection =
    arrow(718, 289, 718, 316, C.pink) +
    pill(623, 321, 190, "Follow a transfer", C.lightPink, C.pink) +
    rect(630, 64, 176, 226, "none", C.pink, 18, true);
  return (
    build(0, route + opening, o) +
    build(1, login, o) +
    build(2, payments + cards, o) +
    build(3, selection, o)
  );
}

function impact(o: VisualOptions): string {
  const lanes =
    rect(306, 57, 340, 220, C.white, C.line, 16) +
    txt(476, 90, "Transfer service", 24, C.ink, 600, "middle") +
    phoneIcon(27, 91, 38, 61) +
    txt(85, 128, "Mobile", 24, C.ink, 600) +
    browserIcon(20, 210, 54, 42) +
    txt(85, 238, "Web", 24, C.ink, 600) +
    txt(476, 32, "Synthetic channel comparison", 21, C.gray, 400, "middle");
  const mobile =
    arrow(196, 126, 395, 126, C.blue) +
    circle(430, 126, 12, C.lightBlue, C.blue) +
    circle(476, 126, 12, C.lightPink, C.pink) +
    circle(522, 126, 12, C.lightBlue, C.blue) +
    path("M546 126H694", C.pink, false, true) +
    rect(710, 92, 350, 68, C.lightPink, C.pink, 12) +
    txt(885, 133, "A subset remains pending", 24, C.ink, 600, "middle");
  const web =
    arrow(196, 231, 395, 231, C.blue) +
    circle(430, 231, 12, C.lightBlue, C.blue) +
    circle(476, 231, 12, C.lightBlue, C.blue) +
    circle(522, 231, 12, C.lightBlue, C.blue) +
    arrow(546, 231, 694, 231, C.blue) +
    rect(710, 197, 350, 68, C.lightBlue, C.blue, 12) +
    txt(885, 238, "Requests accepted", 24, C.ink, 600, "middle");
  const distinction =
    line(305, 304, 1060, 304) +
    check(328, 337) +
    txt(350, 345, "Healthy servers", 22, C.ink, 500) +
    txt(538, 345, "≠", 28, C.pink, 600, "middle") +
    txt(580, 345, "Completed customer journeys", 22, C.ink, 600) +
    txt(885, 186, "Observed request states", 18, C.gray, 400, "middle");
  return (
    build(0, lanes, o) +
    build(1, mobile, o) +
    build(2, web, o) +
    build(3, distinction, o)
  );
}

function teams(o: VisualOptions): string {
  const shared =
    rect(630, 26, 437, 192, C.white, C.blue, 16) +
    txt(848, 68, "Elastic Observability", 27, C.ink, 600, "middle") +
    txt(848, 104, "Shared searchable evidence", 23, C.blue, 600, "middle") +
    line(655, 122, 1042, 122, C.line) +
    txt(
      848,
      159,
      "Journey · window · request context",
      21,
      C.ink,
      500,
      "middle",
    ) +
    txt(848, 193, "Events · trends · request paths", 21, C.ink, 500, "middle");
  const support =
    person(72, 25) +
    txt(132, 57, "Support", 24, C.ink, 600) +
    txt(132, 89, "Journey + channel", 21, C.gray, 400) +
    path("M341 65H469L610 82", C.blue, false, true);
  const operations =
    person(72, 138, C.teal) +
    txt(132, 170, "Operations", 24, C.ink, 600) +
    txt(132, 202, "Events + trends", 21, C.gray, 400) +
    arrow(341, 178, 610, 153, C.teal);
  const engineering =
    person(72, 251, C.pink) +
    txt(132, 283, "Engineering", 24, C.ink, 600) +
    txt(132, 315, "Request path", 21, C.gray, 400) +
    path("M341 291H469L610 205", C.pink, false, true);
  const foundation =
    iso(705, 256, 145, 33, 30, C.white, C.lightBlue, C.blue) +
    txt(850, 349, "Elasticsearch foundation", 23, C.ink, 600, "middle") +
    path("M850 223v13", C.blue) +
    txt(347, 350, "Role-based access", 20, C.gray, 500);
  return (
    build(0, support, o) +
    build(1, operations, o) +
    build(2, engineering, o) +
    build(3, shared + foundation, o)
  );
}

function operating(o: VisualOptions): string {
  const boundary =
    rect(170, 34, 730, 290, C.white, C.ink, 18, true) +
    txt(
      535,
      65,
      "Bank’s chosen environment · self managed",
      24,
      C.ink,
      600,
      "middle",
    ) +
    iso(355, 195, 130, 50, 42, C.white, C.lightBlue, C.blue) +
    txt(485, 122, "Evidence platform", 24, C.ink, 600, "middle");
  const access =
    person(61, 68) +
    txt(61, 183, "Scoped", 22, C.ink, 600, "middle") +
    txt(61, 211, "access", 22, C.ink, 600, "middle") +
    arrow(107, 143, 215, 143, C.blue) +
    keyIcon(258, 143) +
    arrow(294, 143, 387, 172, C.blue);
  const retention =
    clock(762, 160, 32, C.teal) +
    txt(762, 223, "Retention", 23, C.ink, 600, "middle") +
    txt(762, 252, "policy", 23, C.ink, 600, "middle") +
    arrow(618, 193, 706, 174, C.teal);
  const flows =
    documentIcon(964, 83, C.gray) +
    txt(991, 184, "Packages", 20, C.ink, 500, "middle") +
    txt(991, 212, "Upgrades", 20, C.ink, 500, "middle") +
    txt(991, 240, "Support", 20, C.ink, 500, "middle") +
    path("M955 116H863", C.gray, true, true) +
    txt(
      535,
      352,
      "Review every required data flow with its owner",
      22,
      C.ink,
      600,
      "middle",
    );
  return (
    build(0, boundary, o) +
    build(1, access, o) +
    build(2, retention, o) +
    build(3, flows, o)
  );
}

function validation(o: VisualOptions): string {
  const journey =
    phoneIcon(38, 66, 104, 163) +
    transferIcon(90, 147) +
    txt(90, 275, "One journey", 23, C.ink, 600, "middle") +
    arrow(163, 155, 245, 155, C.blue);
  const evidence =
    rect(266, 28, 576, 277, C.white, C.ink, 12) +
    txt(295, 68, "Permitted evidence + agreed criteria", 24, C.ink, 600) +
    line(295, 86, 813, 86, C.line) +
    txt(295, 128, "Baseline", 22, C.ink, 600) +
    line(455, 130, 812, 130, C.gray) +
    txt(
      554,
      343,
      "Leave the baseline blank or record “unknown”",
      21,
      C.gray,
      400,
      "middle",
    );
  const owners =
    txt(295, 177, "Impact", 22, C.ink, 500) +
    line(455, 179, 812, 179) +
    txt(295, 223, "Investigation", 22, C.ink, 500) +
    line(455, 225, 812, 225) +
    txt(295, 269, "Recovery", 22, C.ink, 500) +
    line(455, 271, 812, 271) +
    arrow(858, 154, 903, 154, C.teal) +
    person(963, 74, C.teal) +
    txt(963, 184, "Named owners", 22, C.ink, 600, "middle") +
    txt(963, 216, "Business + service", 20, C.gray, 400, "middle");
  const decision =
    path("M963 231v28", C.blue) +
    circle(963, 288, 24, C.lightBlue, C.blue) +
    txt(963, 298, "?", 31, C.blue, 600, "middle") +
    txt(963, 343, "Next decision", 22, C.ink, 600, "middle");
  return (
    build(0, journey, o) +
    build(1, evidence, o) +
    build(2, owners, o) +
    build(3, decision, o)
  );
}

function conversation(o: VisualOptions): string {
  const customer =
    person(116, 84) +
    phoneIcon(85, 167, 62, 97) +
    txt(116, 313, "Customer outcome", 24, C.ink, 600, "middle");
  const evidence =
    arrow(193, 181, 342, 181, C.blue) +
    iso(364, 167, 110, 45, 35, C.white, C.lightBlue, C.blue) +
    documentIcon(447, 58) +
    txt(474, 313, "Useful evidence", 24, C.ink, 600, "middle");
  const owner =
    arrow(602, 181, 729, 181, C.teal) +
    person(798, 99, C.teal) +
    txt(798, 313, "Responsible owner", 24, C.ink, 600, "middle");
  const question =
    path("M841 181H941V126", C.blue, false, true) +
    circle(960, 83, 43, C.lightBlue, C.blue) +
    txt(960, 99, "?", 49, C.blue, 600, "middle") +
    txt(
      551,
      39,
      "Which service is worth validating first?",
      28,
      C.ink,
      600,
      "middle",
    );
  return (
    build(0, customer, o) +
    build(1, evidence, o) +
    build(2, owner, o) +
    build(3, question, o)
  );
}

export function renderBusiness(index: number, o: VisualOptions): string {
  switch (index) {
    case 0:
      return cover(o);
    case 1:
      return promise(o);
    case 3:
      return journeys(o);
    case 5:
      return impact(o);
    case 6:
      return teams(o);
    case 16:
      return operating(o);
    case 22:
      return validation(o);
    case 23:
      return conversation(o);
    default:
      return "";
  }
}
