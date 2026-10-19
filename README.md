# Reliable Digital Banking

A customer-neutral, animated presentation about connecting customer experience with Elastic Observability and evidence-led root cause investigation. **16 slides; approximately 18 minutes of speaking time, plus discussion.**

[Open the presentation](https://ahmedzaky-creator.github.io/elastic-digital-bank-observability/#0)

The story follows a fictional pending transfer: establish customer impact, connect approved evidence, verify the cause with the service owner, approve restoration, and check recovery. Three attributed customer stories explain earlier detection, clearer impact and shared investigation. This static presentation does not connect to banking systems or execute actions.

## Meeting files

- [Standalone presentation](public/downloads/digital-bank-observability.html)
- [16-page PDF](public/downloads/digital-bank-observability.pdf)
- [Presenter notes](public/downloads/Presenter%20Notes.md)
- [Public evidence register](public/downloads/Evidence%20Register.md)

Save all four files together. Open the HTML in a current browser; its fonts, graphics, scripts, notes and evidence text are bundled and work offline. The PDF is a separate companion file. Source links need a network connection. The PDF shows all 16 scenes at detail level 3 with complete diagrams and citations.

## Presenting

Right/Left Arrow, Space and Page Down/Up change slides immediately. Animations play continuously while a slide is open. Pause holds the visual; Replay restarts it. Reduced-motion preferences show complete diagrams immediately. Direct links run from `#0` through `#15`, and browser Back/Forward are supported.

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

Click the timer to pause or resume it. Hide notes before sharing the browser window. Touch users can swipe between slides; on small screens, “Read scene text” offers a larger text view.

## Evidence and boundaries

Public sources were reviewed on 19 October 2026. Oney Bank’s result measures API-incident detection; WePay’s measures time to identify customer impact in its Google Cloud environment; Emirates NBD provides an on-premises logs/APM example. These are different measures and are not forecasts for another bank. See the evidence register and scene notes for exact attribution.

Pending requests, accepted requests and settled payments are distinct. Correlated signals do not establish cause. The fictional service owner verifies the configuration and alternatives before approving a change. Fresh-request recovery checks do not reconcile earlier pending transfers. Product capabilities depend on the intended version, subscription, instrumentation, permissions and operating model. AI is an optional notes discussion, outside the 16-slide story.

The attached authoring deck and private research are excluded. All published diagrams and incident data were created for this presentation. Font and trademark notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Develop and verify

Use Node.js 22.12 or later.

```bash
npm ci
npm run dev
npm run build
npx playwright install chromium
npm test
```

Scene content, notes and source mappings are in `src/scenes.ts` and `src/evidence.ts`. The player is `src/main.ts`; original SVG diagrams are split between the business and investigation visual modules. Scene indices are independent of stable visual identifiers.

To regenerate offline files, notes, PDF and complete thumbnails:

```bash
npm run export
```

On macOS the export/visual-review scripts use installed Google Chrome. Elsewhere set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an installed Chromium executable. Export builds current source before rendering and rebuilds to include generated downloads. Final companions are written to `public/downloads/` and `artifacts/` (the latter is ignored).

For the visual geometry audit, run a production preview on port 4188, then `npm run qa`. It renders every slide at detail levels 1, 3 and 5. Browser tests cover navigation, continuous motion, accessibility of the overview, presenter controls, mobile interaction, print and disconnected offline operation. Actual PDF page count and rendered pages also require a final visual check.

## Publish and recover

GitHub Actions performs a locked install, production build and browser tests before deploying `dist/` to Pages. Generated companions are versioned alongside the source. The deployment artifact is retained for 30 days.

For rollback, revert the offending commit on `main` and let the same verified workflow redeploy. Previous source and companions remain recoverable from Git history. This project is separate from the other presentations.
