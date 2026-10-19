# Elastic Observability for Digital Banking

A **16-slide, approximately 18-minute** presentation explaining Elastic's Observability philosophy and differentiators, with banking applications and public customer references.

[Open the presentation](https://ahmedzaky-creator.github.io/elastic-digital-bank-observability/#0)

The story follows the platform: search foundation → open collection → Streams → connected signals and RCA → Workflows → operating-model choice. Two Streams scenes show log preparation and a banking field-extraction example. Two Workflows scenes show data-aware orchestration and a governed incident runbook. Emirates NBD, Oney Bank and WePay provide precisely attributed customer evidence. This is an original static presentation, with no live model, banking system or workflow connection.

## Meeting files

- [Standalone presentation](public/downloads/digital-bank-observability.html)
- [16-page PDF](public/downloads/digital-bank-observability.pdf)
- [Presenter notes](public/downloads/Presenter%20Notes.md)
- [Public evidence register](public/downloads/Evidence%20Register.md)

Save the four files together. The HTML bundles fonts, graphics, scripts, notes and evidence text for offline playback. Keep the PDF beside it for the companion PDF link. Public source links require a network connection. The PDF shows all 16 complete scenes at detail level 3.

## Presenting

Right/Left Arrow, Space and Page keys change slides immediately. Animations continue while the slide is open. Pause holds the current view; Replay restarts it. Reduced-motion preferences show the complete visual immediately. Routes are `#0` through `#15`; browser Back/Forward are supported.

| Key        | Control                      |
| ---------- | ---------------------------- |
| G          | Overview                     |
| T          | Filmstrip                    |
| N          | Notes                        |
| F          | Fullscreen                   |
| 1–5        | Detail level (default 3)     |
| R          | Replay                       |
| L / D / C  | Laser / draw / clear drawing |
| ?          | Help and downloads           |
| Home / End | First / last slide           |

Click the timer to pause or resume it. Hide notes before sharing the browser window. Touch users can swipe; smaller screens offer “Read scene text.”

## Evidence and boundaries

Evidence was reviewed on 19 October 2026. Streams management is documented GA from Stack 9.2, while wired ingestion, AI features and individual actions have separate maturity and entitlement requirements. AI assistance requires an approved model connection; manual management does not. Workflows is GA from Stack 9.4 with Enterprise entitlement for self-managed/Hosted deployments. Configured external actions, permissions and the bank's approval process remain explicit.

Customer outcomes support the broader Observability approach; they are not attributed to Streams or Workflows. Oney measures API-incident detection; WePay measures time to identify customer impact in a Google Cloud environment, with APM described as future adoption; Emirates NBD provides the regional on-premises logs/APM example. These are different measures and are not prospect forecasts. See the scene notes and evidence register for exact scope.

The compact RCA example separates a candidate explanation from owner verification, and request success from payment settlement. Retention and deployment choices need design; self-managed storage does not establish local AI inference or regulatory compliance.

The supplied FSI attachment and private research are excluded. Published diagrams, narration and synthetic data are original. The public reference informs the philosophy and explanatory motion. Font and trademark notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Develop and verify

Use Node.js 22.12 or later.

```bash
npm ci
npm run dev
npm run build
npx playwright install chromium
npm test
```

Content, notes and citations are in `src/scenes.ts` and `src/evidence.ts`. The player is `src/main.ts`. `src/visuals-foundation.ts` owns the foundation/Streams diagrams; `src/visuals-action.ts` owns RCA/Workflows/operations/proof. Stable visual identifiers are separate from route indices.

```bash
npm run export
```

Export builds current source, creates offline HTML, 16 thumbnails, 16-page PDF, notes and evidence, then rebuilds to include the downloads. Generated companions are in `public/downloads/`; a working copy is in ignored `artifacts/`.

On macOS, export and visual-review scripts use installed Google Chrome. Elsewhere set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an installed Chromium binary. Run a production preview on port 4188 and `npm run qa` for all 16 scenes at detail levels 1, 3 and 5. Final verification also includes actual PDF rendering and a disconnected offline test.

## Publish and recover

GitHub Actions performs a locked install, production build and browser tests before deploying `dist/` to Pages. Generated companions are versioned with source; deployment artifacts remain available for 30 days. Revert the offending commit on `main` to redeploy a prior revision through the same workflow. Other presentations are independent of this repository.
