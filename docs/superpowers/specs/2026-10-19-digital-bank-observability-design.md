# Reliable Digital Banking — presentation design

Status: independently reviewed and approved by the user for implementation and separate public GitHub Pages delivery on 19 October 2026. Prepared 19 October 2026 for the customer meeting on 20 October 2026, Asia/Riyadh.

## Brief and decisions

Create a new animated browser presentation using the supplied [Observability presentation](https://ahmedzaky-creator.github.io/elastic-observability-preso/#0) as the visual reference and the attached FSI deck as private authoring material. The user explicitly chose a customer-neutral presentation. Use English, no prospect name or invented bank brand, and a mixed business/technology audience as the working assumption.

Title: **Reliable Digital Banking**. Subtitle: **How Elastic Observability connects customer experience with incident investigation**.

The presentation should help the customer see which banking journeys are affected, understand how teams investigate with shared evidence, and choose one useful validation. Technical details support that conversation in notes and qualifications. The presentation does not assume the prospect has a particular incident, architecture, service target, financial loss or regulatory obligation.

The recommended delivery is **16 scenes with an 18-minute speaking plan**, leaving discussion outside that timing. The speaker can skip optional depth without changing the core story. Preserve the existing presentations and publish the new original content separately.

## Approaches considered

| Approach                                                                       | Strength                                                                                  | Trade-off                                                                        | Decision                      |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------- |
| Customer-journey story, an evidence-led RCA example, and public customer proof | Connects the operational problem to customer experience and shows why the product matters | Requires a clear separation between fictional demonstration and reported results | Recommended: 16 scenes        |
| Executive overview with a few banking use cases                                | Shortest path to business priorities                                                      | Gives little room to explain how investigation improves                          | Alternative: shorter overview |
| A product tour close to the technical reference                                | More feature and architecture depth                                                       | Reintroduces metrics/storage implementation detail the user wants to reduce      | Not selected                  |

No separate visual-choice companion is needed for design review: the user already supplied a specific visual reference. Review the narrative in writing, then inspect actual browser scenes during implementation.

## Banking story and business value

One illustrative transfer journey connects the presentation. A customer submits a transfer and receives a pending status. A subset of requests is delayed. The team determines the affected journey and channel before following the request into an instrumented payment service. Application events show connection-acquisition waits; service evidence narrows the delay; an approved configuration-change record gives the owner a candidate explanation.

The service owner checks the relevant configuration and competing explanations, confirms an incorrectly reduced connection limit in this fictional incident, and approves restoration through the bank's normal change process. The owner then verifies fresh requests and the agreed downstream completion signal. Older pending transfers need separate status/reconciliation checks. A successful API response alone does not establish settlement or correct balances. Nothing is executed by this website.

Keep these distinctions visible: **observed symptom, correlated evidence, candidate cause, owner-verified finding, recovery check**. Correlation, a slow trace, or an AI explanation alone does not prove causality. External-provider internals stay visibly unobserved unless instrumentation is established.

The business discussion covers successful journeys, time to establish customer impact, investigation handoffs, and confidence after a release. These are evaluation dimensions, not promised gains. Avoid invented revenue losses, guaranteed uptime or universal MTTR improvements.

## Scene plan

Each scene has one main point, one original visual composition, concise customer-facing copy, speaker notes, timing, sources and applicable feature qualifications. All incident data and plotted values are clearly synthetic.

| #   | Scene                                      | Purpose and visual                                                                                         | Seconds |
| --- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------: |
| 1   | Reliable digital banking                   | Minimal cover connecting a customer journey to operating evidence                                          |      30 |
| 2   | The customer promise                       | Connect account access and payment outcomes to customer confidence                                         |      45 |
| 3   | The journeys that matter                   | Account opening, login, payments and cards; select transfers                                               |      45 |
| 4   | A pending transfer: who is affected?       | Introduce the synthetic symptom and compare channels and request states                                    |      90 |
| 5   | Shared evidence with Elastic Observability | Teams converge on a searchable investigation; introduce events, trends and request paths in plain language |      75 |
| 6   | The path of a transfer request             | Follow the instrumented service; keep provider internals visibly unobserved                                |      90 |
| 7   | Evidence behind the delay                  | Connect waits and change context as a candidate explanation                                                |      90 |
| 8   | The service owner verifies the cause       | Check actual configuration and alternatives; confirm the fictional finding                                 |      90 |
| 9   | Recovery the customer can confirm          | Approved restoration, fresh/downstream checks and separate pending reconciliation                          |      75 |
| 10  | Reliability targets and safer releases     | Define customer-outcome measures and compare evidence around changes                                       |      75 |
| 11  | Control over the operating model           | Self-managed deployment, access, retention and approved data flows                                         |      60 |
| 12  | Oney Bank: earlier detection               | Public API-incident detection result with exact measure                                                    |      60 |
| 13  | WePay: clearer customer impact             | Public 90% impact-identification result in Google Cloud context                                            |      60 |
| 14  | Emirates NBD: shared investigation         | Regional on-premises logs/APM story with days-to-minutes result                                            |      75 |
| 15  | One useful validation                      | Agree one journey, baseline or unknown, criteria, owners and decision                                      |      90 |
| 16  | The next conversation                      | Return to the customer journey and choose the next practical step                                          |      30 |

## Public evidence and exact claim boundaries

Public evidence checked 19 October 2026. Vendor-published customer outcomes are attributed examples, not independent benchmarks or forecasts for the prospect.

- **Oney Bank:** report that API incident detection moved from **up to 20 minutes to one minute**. Label the measure as detection, not resolution. Do not claim its deployment is on premises. [Official story](https://www.elastic.co/customers/oney-bank).
- **WePay:** report **90% less time to identify customer impact during incidents**. Its story describes Google Cloud and APM as a future plan. Attribute this result to the shared logging/telemetry account; do not turn it into an APM, downtime or MTTR result. [Official story](https://www.elastic.co/customers/wepay/).
- **Emirates NBD:** describe on-premises centralized logs and APM, and its reported improvement from days to minutes for customer-facing issue investigation/resolution. Keep the exact wording tied to the source. Do not describe it as a Saudi-hosted or regulator-approved deployment. [Official story](https://www.elastic.co/customers/emirates-nbd/).

Optional presenter context can cite [Wells Fargo](https://www.elastic.co/customers/wells-fargo) for login/payment tracing through backend mainframe dependencies. It is not a fourth headline results slide. Do not import the FSI deck's corporate statistics, old survey percentages, named-account objectives, private screenshots or unrelated fraud/Customer 360 savings claims.

Core capability evidence:

- [Observability overview](https://www.elastic.co/docs/solutions/observability): shared logs, metrics, traces and user-experience evidence. Collection, configuration and permissions determine the actual view.
- [Service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): observed relationships depend on instrumentation and trace-context propagation. A map is not proof of complete estate coverage.
- [Service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): service targets require an appropriate subscription, privileges and supporting configuration. An API-level SLO does not automatically measure settled payments.
- [Restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): self-managed operation does not remove package, upgrade, support or optional model dependencies. Confirm the complete approved operating path.
- [AI chat experiences](https://www.elastic.co/docs/explore-analyze/ai-features/ai-chat-experiences) and [Agent/Assistant comparison](https://www.elastic.co/docs/explore-analyze/ai-features/ai-chat-experiences/ai-agent-or-ai-assistant/): use current Elastic AI Agent terminology and verify actual version/model/subscription requirements. Do not present the deprecated Observability AI Assistant as the new default, transfer its privacy features to Agent Builder, or imply autonomous diagnosis or response.
- [Subscriptions](https://www.elastic.co/subscriptions): check the actual release and entitlement feature by feature. No blanket feature parity, free-platform, compliance or universal savings claim.

**Optional AI discussion belongs in speaker notes only.** The 16-slide core story is complete without generative AI; no hidden extra AI/appendix slide is included. If the customer asks, explain that an AI summary is illustrative, version-dependent and subject to engineer verification. Core Agent Builder is GA from Stack 9.3; the Observability integration and dedicated RCA skill are labeled Preview in current docs. Validate the exact intended build, Enterprise entitlement, scoped privileges and an explicitly approved configured model. Self-managed Elasticsearch does not establish local model processing. Agent Builder does not inherit AI Assistant anonymization. Supporting sources: [Agent Builder for Observability](https://www.elastic.co/docs/solutions/observability/ai/agent-builder-observability), [model configuration](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models), and [comparison](https://www.elastic.co/docs/explore-analyze/ai-features/ai-chat-experiences/ai-agent-or-ai-assistant/).

## Visual and motion design

Follow the reference's **1280×720** stage, white background, generous spacing, black headlines with blue emphasis, thin rules, subtle dot fields and original isometric diagrams. Use Inter and IBM Plex Mono, with restrained teal and pink accents. Preserve official logo proportions. Use the attachment for concepts; do not transplant its layouts, screenshots or assets.

Prefer one clear composition per scene over dashboard grids. A neutral phone view, a request path, an evidence assembly and a recovery check recur as meaningful parts of the same story. Customer-proof scenes use one named example and a clearly defined result each. Keep real evidence distinct from fictional numbers and illustrations.

Motion makes connections understandable: a request follows a path, evidence converges, a candidate becomes a verified finding, and a recovery check completes. Use approximately 180ms scene changes and 600ms staggered entrances. Motion continues while the presenter stays on the scene. **Right Arrow always moves to the next scene**, without consuming build steps. Replay restarts the current scene. Reduced motion, thumbnails and print show the full visual immediately. Pause/replay remain available.

## Player and implementation boundaries

After approval, build an original static Vite/TypeScript presentation, reusing the established presentation-controller patterns where helpful. Keep player state, scene content, synthetic incident data, visual renderers and evidence separately maintainable. The controller owns routes, playback and presenter tools; content definitions own the 16-scene contract and notes. Avoid an AE coaching interface on the customer presentation.

Provide `#0`–`#15` deep links, Previous/Next, browser Back/Forward, overview and filmstrip with complete thumbnails, fullscreen, notes, timer, replay/pause, laser/drawing and shortcut help. Retain five density levels with business-friendly density 3 as default; deeper qualifications primarily belong in notes. Keep native keyboard behavior inside editable controls and prevent accidental swipe navigation during pinch/scroll gestures. Annotation tools never execute a real action.

Density 1 retains the headline, complete main visual, sources and material qualifications; 2 adds the short lead; 3 adds a business takeaway; 4 adds one deeper explanation; 5 adds the full supporting qualification. Material availability, metric definitions and fictional-data labels never disappear at a lower density. Diagram completeness is independent of density.

Only the active scene's animation runs. Stop timers and handlers on scene exit; pause while the document is hidden or an overlay requires attention. Printing, exports and reduced motion settle every build. Smaller screens scale proportionally and offer readable scene text where needed. No recording, collaboration service, CRM, real Elastic connection, real model call or live bank transaction is in scope.

## Delivery and publication

Recommended separate public repository: **`ahmedzaky-creator/elastic-digital-bank-observability`**, with GitHub Pages. The public artifact contains only original, customer-neutral content and supported public references. The source FSI deck, notes and extracted assets remain local and excluded from the repository and output package. Approval of this design includes this publication scope.

Deliver a hosted browser link, a standalone offline HTML with bundled fonts/graphics/scripts/notes, a **16-page PDF at density 3**, presenter notes with scene timings/transitions/questions/qualifications, and a public evidence register. Final user-facing files belong under `outputs/digital-bank-observability`. A PowerPoint export is not required for this browser-format request.

[Hive Mind](https://github.com/elastic/hive-mind) is recommended as an excluded local development reference if additional Elastic implementation patterns are needed; no installation or runtime dependency is required for this static presentation.

## Acceptance and execution

1. Finish the independent written-spec review, obtain the user's review, and commit an implementation plan before building.
2. Build and visually inspect four representative scenes first: cover, affected journey, cause verification and a customer-proof scene.
3. Complete all 16 scenes and notes, preserving the business story and the evidence/causality/payment-state distinctions.
4. Review every scene at densities 1, 3 and 5; inspect desktop/mobile layouts, reverse navigation, replay, reduced motion, thumbnails, notes, timer, fullscreen and annotations. Require readable text, complete graphics and no clipping, missing assets or browser errors.
5. Open the offline copy with networking disabled. Check the PDF has exactly 16 complete, readable pages with the relevant sources. Inspect the actual rendered exports, not just their existence.
6. Audit intended public files/history for source-deck material, private paths, identifiers and unsupported claims. Build with locked dependencies; run appropriate browser checks in deployment automation.
7. Verify the published site, direct links and downloadable files. Keep the source and previous successful deployment recoverable through Git history and documented rollback.

The user approved the written design and publication scope on 19 October 2026, then explicitly changed the total to 16 slides. This revision implements that instruction, combines introductory/evaluation material, moves optional AI detail into notes, and retains the complete incident and three customer stories. Implementation follows the amended plan.
