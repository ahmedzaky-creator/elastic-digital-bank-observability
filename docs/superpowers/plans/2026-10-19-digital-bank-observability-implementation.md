# Reliable Digital Banking — first-release implementation plan

Historical record. The active revision follows [the differentiation implementation plan](2026-10-19-digital-bank-differentiation-implementation.md).

The user approved the independently reviewed design and separate public GitHub Pages publication on 19 October 2026. The installed writing-plans companion was searched in both skill roots and is absent; this explicit committed implementation plan provides the handoff before coding.

## Contract

Build 16 customer-neutral English scenes with the approved 1,080-second speaking plan. Match the supplied white/blue 1280×720 presentation, Inter/IBM Plex Mono, original explanatory isometric diagrams and continuous on-scene motion. Navigation moves directly between scenes. Preserve existing decks. The attached FSI deck and private research never enter source history or deliverables.

Keep the full transfer incident coherent: pending request; bounded impact; shared approved evidence; connection wait and change context; candidate explanation; owner verification; approved restoration; fresh-request and downstream-state checks; independent earlier-pending reconciliation. External-provider internals remain unobserved. Distinguish illustrative numbers, human findings and customer-reported results.

Oney measures API-incident detection (up to20minutes to1minute), WePay measures time toidentifycustomerimpact (90% less, GoogleCloud, noAPM attribution), EmiratesNBD gives the public regional onpremises logs/APM account with days-to-minutes improvement. AI remains optional presenter-note discussion only, with version/Preview/model/human-review qualifications; the 16-slide main story is complete without it. Do not transfer Assistant privacy controls to Agent Builder.

## Components and ownership

- Root: shared schema and SVG primitives; player/controller/CSS/fonts; locked build; export/QA/browser tests; integration and publication.
- Content author: src/scenes.ts, src/evidence.ts and src/incident.ts only. Own all 16 scene definitions, notes, source mappings and incident consistency. Use the root's type contract.
- Visual author A: src/visuals-business.ts only. Own stable visualIDs0,1,3,5,6,16,22,23. First deliver only cover(0) and impact(5) representative renderers, then wait for root's visual review before expanding.
- Visual author B: src/visuals-investigation.ts only. Own stable visualIDs9–13 and18–20. First deliver only verification(11) and Oney(18), then wait for visual review before expanding.

Shared Scene contract: id,chapter,eyebrow,title,emphasis,lead,visual(stable semantic ID),takeaway,detail,qualification(material),requirements(full),sources,notes(opening,body,transition,seconds,prompt),steps(label),illustrative. Visual renderers return original SVG body using a shared 1100×360 coordinate system; root wraps the graphic with uniform styles/build handling. Diagram labels should generally be20–24px, never below18px. All builds complete in static/reduced-motion/thumbnail/print.

Keep source and graphic content separate. The player owns hash/history, density1–5, animationstep/lifecycle, replay/pause, timer, overview/filmstrip, notes, fullscreen, laser/drawing, keyboard/touch and readable mobile text. The renderers receive only authored synthetic data and visual options. They do not call systems or models. Fonts and brand assets are bundled, not CDN-dependent. The approved reference overrides skill defaults for blue covers, SpaceMono and internet fonts. Original diagrams are required by the user's reference/design; do not recreate confidential screenshots.

## Execution sequence

1. Commit this plan and approval status. Create the shared content and visual contracts and reproducible Vite/TypeScript foundation. Start independent content and two bounded graphics tasks.
2. Implement the player/stage enough to render the four real representative scenes. Inspect browser screenshots, text geometry, motion, material qualifications and settled states. Fix issues before authorizing complete visuals.
3. Expand all16 scenes and finish presenter controls, overlay focus/lifecycle, native keyboard preservation, touch handling and reduced-motion/static/ordinary-print behavior. No arrows consume animation steps.
4. Export bundled standalone HTML,16 rendered thumbnails,16-pagePDF atdensity3, original presenter notes and public evidence register. PDF/page screenshots must retain full diagrams and citations. Offline help should deliberately download bundled notes/evidence without networking; other companion links can be online or saved alongside.
5. Run meaningful browser tests against production build: allroutes/history; malformedindices; animationphase/replay/pause/directarrows; controls/nativeinputs; overlaygating; density; notes/timer/fullscreen/annotations; desktop/tablet/mobile; ordinaryprint and settledprint; disconnectedoffline startup and downloads. Render all16 scenes atdensities1,3,5 and inspect geometry plus contact sheets. Check actual16-pagePDF text/pagecount and rendered pages.
6. Obtain independent final content/implementation review. Resolve required findings, refresh exports if code/content changes, rerun affected checks and full final suite. Audit intended public files/history; no source deck, private identifiers, paths or credentials.
7. Commit verified source/companions, create approved publicrepo ahmedzaky-creator/elastic-digital-bank-observability, configure Pages with locked install/build/browser checks, and push. Check successfulCI/deployment, all16 live links, bundledasset paths and exactdownloads. Open finalsite. Preserve successfuldeployartifact and Githistoryrollback.

## Delivery and completion gate

Final files under outputs/digital-bank-observability: digital-bank-observability.html, digital-bank-observability.pdf, Presenter Notes.md, Evidence Register.md, and a published preview. Source stays in the repository. A zip can package the approved companion files for the meeting. Do not present private validation records as customer content.

No completion claim until fresh production build/tests, scene/export visual review, disconnectedoffline test,16-pagePDFcheck, independentreview andliveverification pass. Record findings truthfully and continue fixing actual defects. Do not expand the task into a technical architecture workshop, live Elastic environment, new bankingbrand or unrelated Security/Search pitch.

## Checklist

- [x] Shared foundations and content contract
- [x] Four representative scenes visually reviewed
- [x] All 16 scenes and original graphics
- [x] Player and presenter tools
- [x] Offline/PDF/notes/evidence exports
- [x] Browser and visual validation; independent final review
- [x] Public repository and published-site verification

## User-directed 16-slide amendment

During implementation the user explicitly required 16 slides total. Retain stable visual IDs `[0,1,3,5,6,9,10,11,12,13,16,18,19,20,22,23]` in that order; routes are `#0`–`#15`. Timings `[30,45,45,90,75,90,90,90,75,75,60,60,60,75,90,30]` total 1,080 seconds (18 minutes). Merge introductory telemetry and evaluation material; keep all three proof cases and the full RCA/recovery story. No extra hidden slides. Source, exports and tests use 16 scenes and 16 PDF pages.
