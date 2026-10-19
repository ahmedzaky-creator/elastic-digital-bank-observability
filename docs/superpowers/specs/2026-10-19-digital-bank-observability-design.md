# Reliable Digital Banking — presentation design

Status: proposed for the user's written review before implementation. Prepared 19 October 2026 for the customer meeting on 20 October 2026, Asia/Riyadh.

## Brief and decisions

Create a new animated browser presentation using the supplied [Observability presentation](https://ahmedzaky-creator.github.io/elastic-observability-preso/#0) as the visual reference and the attached FSI deck as private authoring material. The user explicitly chose a customer-neutral presentation. Use English, no prospect name or invented bank brand, and a mixed business/technology audience as the working assumption.

Title: **Reliable Digital Banking**. Subtitle: **How Elastic Observability connects customer experience with incident investigation**.

The presentation should help the customer see which banking journeys are affected, understand how teams investigate with shared evidence, and choose one useful validation. Technical details support that conversation in notes and qualifications. The presentation does not assume the prospect has a particular incident, architecture, service target, financial loss or regulatory obligation.

The recommended delivery is **24 scenes with a 23-minute speaking plan**, leaving discussion outside that timing. The speaker can skip optional depth without changing the core story. Preserve the existing presentations and publish the new original content separately.

## Approaches considered

| Approach | Strength | Trade-off | Decision |
|---|---|---|---|
| Customer-journey story, an evidence-led RCA example, and public customer proof | Connects the operational problem to customer experience and shows why the product matters | Requires a clear separation between fictional demonstration and reported results | Recommended: 24 scenes |
| Executive overview with a few banking use cases | Shortest path to business priorities | Gives little room to explain how investigation improves | Alternative: approximately 16 scenes |
| A product tour close to the technical reference | More feature and architecture depth | Reintroduces metrics/storage implementation detail the user wants to reduce | Not selected |

No separate visual-choice companion is needed for design review: the user already supplied a specific visual reference. Review the narrative in writing, then inspect actual browser scenes during implementation.

## Banking story and business value

One illustrative transfer journey connects the presentation. A customer submits a transfer and receives a pending status. A subset of requests is delayed. The team determines the affected journey and channel before following the request into an instrumented payment service. Application events show connection-acquisition waits; service evidence narrows the delay; an approved configuration-change record gives the owner a candidate explanation.

The service owner checks the relevant configuration and competing explanations, confirms an incorrectly reduced connection limit in this fictional incident, and approves restoration through the bank's normal change process. The owner then verifies fresh requests and the agreed downstream completion signal. Older pending transfers need separate status/reconciliation checks. A successful API response alone does not establish settlement or correct balances. Nothing is executed by this website.

Keep these distinctions visible: **observed symptom, correlated evidence, candidate cause, owner-verified finding, recovery check**. Correlation, a slow trace, or an AI explanation alone does not prove causality. External-provider internals stay visibly unobserved unless instrumentation is established.

The business discussion covers successful journeys, time to establish customer impact, investigation handoffs, and confidence after a release. These are evaluation dimensions, not promised gains. Avoid invented revenue losses, guaranteed uptime or universal MTTR improvements.

## Scene plan

Each scene has one main point, one original visual composition, concise customer-facing copy, speaker notes, timing, sources and applicable feature qualifications. All incident data and plotted values are clearly synthetic.

| # | Scene | Purpose and visual | Seconds |
|---|---|---|---:|
| 1 | Reliable digital banking | Minimal cover; a customer journey connects to its operating evidence | 30 |
| 2 | The customer promise | Show the outcome the customer expects from account access and payments | 45 |
| 3 | The cost of an unclear incident | Waiting and repeat contacts illustrate possible consequences, without invented loss figures | 45 |
| 4 | The journeys that matter | Account opening, login, payments and cards; select the transfer journey | 60 |
| 5 | A transfer is still pending | Introduce the fictional incident through a neutral mobile experience | 60 |
| 6 | The affected customer journey | Compare channel and request states; establish impact rather than infer it from server health | 60 |
| 7 | Evidence across teams | Separate views converge on a shared incident window and request identity | 45 |
| 8 | Elastic Observability | Introduce Elasticsearch as the searchable foundation connecting approved operational evidence | 60 |
| 9 | Events, trends and request paths | Explain logs, metrics and traces in plain language, with required collection and instrumentation | 60 |
| 10 | The path of a transfer request | Follow the instrumented payment service; gray out unobserved external-provider internals | 75 |
| 11 | Evidence behind the delay | Connect waiting time, application events and the change record; identify a candidate cause | 75 |
| 12 | The service owner verifies the cause | Check configuration and alternatives; distinguish the verified fictional finding from a correlation | 75 |
| 13 | Recovery the customer can confirm | Approved restoration, fresh-request checks and separate review of earlier pending requests | 60 |
| 14 | Reliability targets for the journey | Explain service targets in customer terms; the bank chooses the actual definition and target | 60 |
| 15 | Account-opening experience | Illustrate where a journey stalls; separate technical failure from a valid business rejection | 60 |
| 16 | Peak demand and safer releases | Compare permitted service evidence before/after a change; avoid claims of automatic capacity fixes | 60 |
| 17 | Control over the operating model | Make self-managed operation clear; show access, retention and approved data-flow responsibilities | 60 |
| 18 | Optional AI assistance | Show an illustrative evidence summary with a human reviewer; visibly qualify the Observability integration as Preview and preserve the complete manual investigation | 45 |
| 19 | Oney Bank: earlier detection | Public API-incident detection result; large, plainly labeled comparison | 60 |
| 20 | WePay: clearer customer impact | Public 90% result with its exact metric and Google Cloud context | 60 |
| 21 | Emirates NBD: shared investigation | Regional public example: on-premises logs and APM, with reported days-to-minutes improvement | 75 |
| 22 | The outcomes worth measuring | A blank evaluation framework separates detection, impact analysis, investigation and restoration | 60 |
| 23 | One useful validation | Agree one journey, permitted evidence, baseline or unknown, owners and the decision the test supports | 60 |
| 24 | The next conversation | Return to the opening journey and ask which service is worth validating first | 30 |

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

**Scene 18 availability contract:** the visible footnote must say this is an illustrative AI summary, that the Observability-specific integration is Preview and version-dependent, and that an engineer verifies the evidence. Speaker notes distinguish core Agent Builder (GA from Stack 9.3) from the Observability integration and dedicated RCA skill, which current documentation labels Preview. Current pages distinguish the 9.3 opt-in experience from later defaults; release notes and branch labels differ, so validate the exact intended build rather than promise a specific default or every feature on an older release. Self-managed use requires the appropriate Enterprise entitlement, scoped privileges and an explicitly configured, approved model. Self-managed Elasticsearch does not establish local model processing. Approved local and external model paths need separate review. Agent Builder does not inherit AI Assistant anonymization. The non-AI incident story is complete, and the presenter can skip this scene. No model call or action occurs. Supporting sources: [Agent Builder for Observability](https://www.elastic.co/docs/solutions/observability/ai/agent-builder-observability), [built-in skills](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/builtin-skills-reference), [model configuration](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models), and the [Enterprise API requirement](https://www.elastic.co/docs/api/doc/kibana/v9/group/endpoint-agent-builder).

## Visual and motion design

Follow the reference's **1280×720** stage, white background, generous spacing, black headlines with blue emphasis, thin rules, subtle dot fields and original isometric diagrams. Use Inter and IBM Plex Mono, with restrained teal and pink accents. Preserve official logo proportions. Use the attachment for concepts; do not transplant its layouts, screenshots or assets.

Prefer one clear composition per scene over dashboard grids. A neutral phone view, a request path, an evidence assembly and a recovery check recur as meaningful parts of the same story. Customer-proof scenes use one named example and a clearly defined result each. Keep real evidence distinct from fictional numbers and illustrations.

Motion makes connections understandable: a request follows a path, evidence converges, a candidate becomes a verified finding, and a recovery check completes. Use approximately 180ms scene changes and 600ms staggered entrances. Motion continues while the presenter stays on the scene. **Right Arrow always moves to the next scene**, without consuming build steps. Replay restarts the current scene. Reduced motion, thumbnails and print show the full visual immediately. Pause/replay remain available.

## Player and implementation boundaries

After approval, build an original static Vite/TypeScript presentation, reusing the established presentation-controller patterns where helpful. Keep player state, scene content, synthetic incident data, visual renderers and evidence separately maintainable. The controller owns routes, playback and presenter tools; content definitions own the 24-scene contract and notes. Avoid an AE coaching interface on the customer presentation.

Provide `#0`–`#23` deep links, Previous/Next, browser Back/Forward, overview and filmstrip with complete thumbnails, fullscreen, notes, timer, replay/pause, laser/drawing and shortcut help. Retain five density levels with business-friendly density 3 as default; deeper qualifications primarily belong in notes. Keep native keyboard behavior inside editable controls and prevent accidental swipe navigation during pinch/scroll gestures. Annotation tools never execute a real action.

Density 1 retains the headline, complete main visual, sources and material qualifications; 2 adds the short lead; 3 adds a business takeaway; 4 adds one deeper explanation; 5 adds the full supporting qualification. Material availability, metric definitions and fictional-data labels never disappear at a lower density. Diagram completeness is independent of density.

Only the active scene's animation runs. Stop timers and handlers on scene exit; pause while the document is hidden or an overlay requires attention. Printing, exports and reduced motion settle every build. Smaller screens scale proportionally and offer readable scene text where needed. No recording, collaboration service, CRM, real Elastic connection, real model call or live bank transaction is in scope.

## Delivery and publication

Recommended separate public repository: **`ahmedzaky-creator/elastic-digital-bank-observability`**, with GitHub Pages. The public artifact contains only original, customer-neutral content and supported public references. The source FSI deck, notes and extracted assets remain local and excluded from the repository and output package. Approval of this design includes this publication scope.

Deliver a hosted browser link, a standalone offline HTML with bundled fonts/graphics/scripts/notes, a **24-page PDF at density 3**, presenter notes with scene timings/transitions/questions/qualifications, and a public evidence register. Final user-facing files belong under `outputs/digital-bank-observability`. A PowerPoint export is not required for this browser-format request.

[Hive Mind](https://github.com/elastic/hive-mind) is recommended as an excluded local development reference if additional Elastic implementation patterns are needed; no installation or runtime dependency is required for this static presentation.

## Acceptance and execution

1. Finish the independent written-spec review, obtain the user's review, and commit an implementation plan before building.
2. Build and visually inspect four representative scenes first: cover, affected journey, cause verification and a customer-proof scene.
3. Complete all 24 scenes and notes, preserving the business story and the evidence/causality/payment-state distinctions.
4. Review every scene at densities 1, 3 and 5; inspect desktop/mobile layouts, reverse navigation, replay, reduced motion, thumbnails, notes, timer, fullscreen and annotations. Require readable text, complete graphics and no clipping, missing assets or browser errors.
5. Open the offline copy with networking disabled. Check the PDF has exactly 24 complete, readable pages with the relevant sources. Inspect the actual rendered exports, not just their existence.
6. Audit intended public files/history for source-deck material, private paths, identifiers and unsupported claims. Build with locked dependencies; run appropriate browser checks in deployment automation.
7. Verify the published site, direct links and downloadable files. Keep the source and previous successful deployment recoverable through Git history and documented rollback.

Implementation remains pending approval of this written design. No presentation code or public repository has been created for this request.
