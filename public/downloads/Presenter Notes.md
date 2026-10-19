# Elastic Observability for Digital Banking — presenter notes

Customer-neutral presentation. Suggested speaking plan: 18:00; discussion is additional. Public evidence checked 19 October 2026. All incident data and banking experiences are fictional illustrations. No live systems, models or transactions are connected.

Use arrows to change scenes immediately. Animations loop on each scene; Pause holds the view and Replay restarts it. G opens the overview, N shows these notes, F requests fullscreen, and 1–5 controls density. Hide notes before sharing the presentation window.

## Opening

“Payment processing is slowing and pending work is growing. The first alert tells us there is a problem; the useful question is what the owner should do next. We will follow the evidence through Streams, connected investigation and a bounded Workflow, then compare the approach with published banking operations examples.”

## 01 — Elastic Observability

Suggested time: 0:30 · Chapter: From alert to action

**Opening:** Payment processing is slowing and pending work is growing. Which team should act—and on what evidence?

That is the operational question behind this presentation. We will follow one fictional payment-processing incident, using Elastic’s philosophy as the spine: collect openly, prepare useful logs with Streams, connect service and infrastructure evidence, then coordinate a repeatable response with Workflows. The point is a better incident decision, with enough context to explain and defend it. Published bank examples show earlier API detection, faster problem location and useful investigation history. We will keep the story focused on backend services and operations.

**Ask:** Which part of that loop is hardest for your teams today?

**Transition:** The first alert tells us there is a problem. It does not tell us where to start.

**Qualification:** Original illustrations. Product availability depends on the deployed release and subscription.

This is a customer-neutral presentation, not a live product environment. The banking examples are synthetic; no model, banking system or workflow is connected. The source reference informs the philosophy and visual flow, while all published narration and diagrams are original.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces, application performance and infrastructure monitoring. Actual coverage depends on collection, configuration, instrumentation and permissions; the presentation does not establish the bank’s current capabilities.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.

## 02 — The backlog is growing. Where is the cause?

Suggested time: 1:00 · Chapter: The operational challenge

**Opening:** The payment-processing alert is red. The queue is growing. Is this the service, its infrastructure, or a dependency?

Every team has a plausible explanation. The application owner sees connection waits. The messaging team sees pending work. Infrastructure has its own resource metrics, and a dependency has separate logs. Without shared context, the incident becomes a sequence of handoffs while work continues to accumulate. Elastic’s role is to make those clues searchable and connected, so the owner can test an explanation and choose the next action. We will return to this same incident as each differentiator adds a useful piece.

**Ask:** When pending work builds up, how do your teams establish ownership?

**Transition:** Three connected ideas change how that investigation moves.

**Qualification:** Illustrative bank architecture. Actual systems and telemetry coverage must be established.

The diagram illustrates common banking dependencies; it does not describe the prospect's architecture or claim that Elastic automatically observes external providers, mainframes or every application. Sources, access and instrumentation define coverage.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces, application performance and infrastructure monitoring. Actual coverage depends on collection, configuration, instrumentation and permissions; the presentation does not establish the bank’s current capabilities.
- [Elastic for financial services](https://www.elastic.co/industries/financial-services): Public industry context for application performance, payment operations, service reliability and operating-model choices. Banking use cases are proposed applications, not claims of the prospect’s current implementation, quantified results or regulatory compliance.

## 03 — Open. Connected. Actionable.

Suggested time: 1:00 · Chapter: The Elastic philosophy

**Opening:** The differentiator is how the pieces work together.

Open collection brings the bank’s operational data into a supported path. Streams makes important log fields useful before the next incident. Connected investigation follows the service, its request path and the infrastructure beneath it. Workflows carries that evidence into a repeatable response, with ownership and approvals explicit. In our example, the differentiator is continuity: the team does not have to rebuild the payment incident’s context at every handoff. Elasticsearch supplies the shared search and analytics foundation that joins this operational loop.

**Ask:** Which matters most: preparing data, connecting evidence, or coordinating action?

**Transition:** Start with the question that the first dashboard cannot answer.

**Qualification:** Architecture overview. Collection, correlation and automation require configuration and appropriate access.

These are supported capability families, not a claim of zero configuration or automatic coverage. Streams, APM, anomaly detection and Workflows have individual version, entitlement and operational requirements. The presentation does not promise autonomous root cause verification or remediation.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces, application performance and infrastructure monitoring. Actual coverage depends on collection, configuration, instrumentation and permissions; the presentation does not establish the bank’s current capabilities.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.

## 04 — Search beyond the dashboard

Suggested time: 1:00 · Chapter: Search as the foundation

**Opening:** The chart shows the backlog. The next question is what changed when it began to grow.

We search the payment service’s events, timing trend and request evidence around the same window. A connection-wait message, a rise in waiting time and a slow service call become related clues. Elasticsearch lets the investigator search structured fields and the original event detail, rather than stop at a fixed set of charts. That gives the owner a way to examine an unfamiliar failure. It does not automatically prove cause; the value is reaching the evidence needed to test an explanation.

**Ask:** What question usually forces your team out of its dashboard into another tool?

**Transition:** That investigation starts with collecting the backend data we are permitted to use.

**Qualification:** Illustrative investigation. Queries use available, permitted data; correlation does not establish cause.

The diagram shows related evidence retrieved and examined in one investigation, not a promise that one natural-language prompt or a single query automatically joins every telemetry source. Appropriate indexing, fields, time alignment and permissions are required. Supporting records remain inspectable.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces, application performance and infrastructure monitoring. Actual coverage depends on collection, configuration, instrumentation and permissions; the presentation does not establish the bank’s current capabilities.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.

## 05 — Open collection. More choice.

Suggested time: 1:00 · Chapter: Open by design

**Opening:** Open collection is a practical choice for a bank with investments it wants to keep.

Elastic supports OpenTelemetry, including Elastic distributions, alongside its integrations and collection options. That means the discussion can start with an important service and the evidence already available, rather than demand an estate-wide replacement on day one. The value is flexibility in instrumentation and deployment, with a deliberate path to broader coverage. We would check the bank's languages, collectors, network boundaries and operational standards. Open standards create options; they do not remove the need to validate the actual collection path.

**Ask:** Which collection investments or standards must a new platform preserve?

**Transition:** Once the logs arrive, Streams helps keep preparation work out of the incident’s critical path.

**Qualification:** Supported collection paths vary by signal, language, collector, release and deployment.

OpenTelemetry compatibility does not mean every agent or vendor format works unchanged. Validate instrumentation, collector configuration and trace-context propagation. Self-managed environments need a supported ingest path and approved package/update access; no mandatory migration of every source is implied.

**Public evidence:**

- [OpenTelemetry with Elastic APM](https://www.elastic.co/docs/solutions/observability/apm/opentelemetry): Elastic accepts OpenTelemetry instrumentation alongside supported Elastic collection options. Language, signal, collector and deployment compatibility must be checked for the chosen release. Open instrumentation preserves collection choices; it does not mean every source is already instrumented or every feature is identical across deployment types.
- [Elastic restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.

## 06 — Streams: make logs useful

Suggested time: 1:30 · Chapter: Streams

**Opening:** During a growing backlog, the on-call engineer should be investigating—not decoding a new log format.

Streams addresses the preparation between receiving logs and being able to investigate them. The service owner extracts useful fields, inspects a processing preview and applies a reviewed change. AI can suggest processing when an approved model and entitlement are configured. In our incident, the payoff is practical: service, component and event details are ready when the investigator needs to find the waiting worker. The processing remains visible and reviewable alongside the data. It reduces repeated preparation; it does not remove the need to validate a source.

**Ask:** How much investigation time starts with finding or fixing a log format?

**Transition:** Here is the payment-service evidence that preparation makes usable.

**Qualification:** Streams management: Stack 9.2+. AI assistance needs an approved model and entitlement; features vary by version.

The example uses log processing and management. Wired partitioning and Streams-specific workflow actions have separate Preview status and are not required by this story. AI pipeline suggestions are optional and require a configured generative AI connector. Review parsing accuracy, data quality, privileges and retention before applying changes; no universal savings or automatic understanding of every format is promised.

**Public evidence:**

- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Process documents with Streams](https://www.elastic.co/docs/solutions/observability/streams/parse-and-process): Users review suggested processors and preview field extraction before saving. AI suggestions send sample logs to the configured model and can incur costs; manual processors are also supported. Saved changes affect future incoming data. Banking fields are synthetic; automatic understanding of every source is not promised.
- [Streams data lifecycle](https://www.elastic.co/docs/solutions/observability/streams/configure-retention): Streams exposes retention and lifecycle choices. Available options depend on the release, stream type, privileges and subscription. Retention periods and storage phases are choices made by the bank; they do not automatically satisfy a regulatory requirement.

## 07 — Streams: make the waiting work visible

Suggested time: 1:30 · Chapter: Streams in banking

**Opening:** Two backend systems describe the same waiting work in different formats.

The API emits a structured service record; the payment worker writes a text event. Streams helps the owner prepare service, component and event fields and inspect the output before saving. The investigator can then find waiting worker events and compare them with the service’s behavior during the backlog window. This is the step that turns a pile of log messages into useful operational evidence. Processing is reviewed against representative samples, including failures, and saved changes affect future incoming data.

**Ask:** Which backend log source takes the most effort to make useful?

**Transition:** The logs tell us what happened. Other telemetry tells us where and under what conditions.

**Qualification:** Synthetic log-processing illustration. Field extraction is configured and reviewed; these are operational events.

The illustration is not a real Kibana capture and contains no account, provider or transaction identifiers. Test extraction against permitted representative samples and inspect failed processing. It uses basic management and processing, without wired-stream partitioning or a prebuilt banking data model. Waiting events and service health do not establish payment settlement or correct balances.

**Public evidence:**

- [Process documents with Streams](https://www.elastic.co/docs/solutions/observability/streams/parse-and-process): Users review suggested processors and preview field extraction before saving. AI suggestions send sample logs to the configured model and can incur costs; manual processors are also supported. Saved changes affect future incoming data. Banking fields are synthetic; automatic understanding of every source is not promised.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.

## 08 — Different clues. One investigation.

Suggested time: 1:15 · Chapter: Connected signals

**Opening:** The clues become useful when they describe the same service in the same incident window.

The backlog and latency metrics show what changed. The trace locates the connection-acquisition wait. Worker logs supply the event detail. Infrastructure context helps check resource pressure, while dependency evidence tests other explanations. These are complementary views of one incident, rather than separate dashboards competing for attention. Elastic connects those investigation paths around shared service context. ML can highlight unusual behavior where configured, but the engineer still tests the explanation. Missing dependency telemetry remains an acknowledged gap.

**Ask:** Which signal-to-signal handoff is hardest during an incident?

**Transition:** Together, those clues support a candidate cause the owner can verify.

**Qualification:** Coverage depends on instrumentation and shared context. Anomaly detection requires a supported configuration and subscription.

Service identity, timestamps and propagated trace context must be configured appropriately. Infrastructure context comes from collected metrics and logs; it is not a fourth independent telemetry type. ML can highlight unusual behavior but does not verify cause. Instrumentation defines visibility, including across providers and dependencies.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces, application performance and infrastructure monitoring. Actual coverage depends on collection, configuration, instrumentation and permissions; the presentation does not establish the bank’s current capabilities.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Infrastructure and host monitoring](https://www.elastic.co/docs/solutions/observability/infra-and-hosts): Elastic connects host, container and infrastructure conditions to an operational investigation using collected metrics and logs. Collection, supported integrations, resource identity and permissions determine coverage. Resource pressure is evidence to examine, not proof of the cause.

## 09 — Find the wait. Verify the cause.

Suggested time: 1:30 · Chapter: Root cause investigation

**Opening:** The wait is inside the payment service. Now the owner has a specific explanation to check.

The trace shows connection acquisition taking time. Worker logs report waits and timeouts; pool metrics and backlog trends show work accumulating. A recent configuration record reveals a reduced connection limit. The owner checks the actual setting, infrastructure pressure and dependency health, then confirms the fictional finding: the limit was reduced incorrectly. The investigation has moved from a red alert to a defensible explanation. A proposed restoration still goes through normal approval, and operational recovery needs its own fresh checks.

**Ask:** What evidence does your incident owner need before accepting an RCA?

**Transition:** The same approach applies to other backend workloads without changing the operating model.

**Qualification:** Illustrative RCA. The owner verifies the actual setting and alternatives; uninstrumented provider internals remain unobserved.

The fictional owner checks the actual setting, capacity, database health and alternative explanations before confirming an incorrectly reduced connection limit. This is not a real investigation or an autonomous diagnosis. Recovery requires approved action and separate checks; an API success response alone does not establish settled funds or correct balances.

**Public evidence:**

- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## 10 — Protect the workloads that keep banking moving

Suggested time: 1:15 · Chapter: FSI applications

**Opening:** The shared platform supports three operational questions that matter to a bank.

For payment APIs: which service is slow or erroring, and which dependency explains it? For messaging: where is work accumulating, how old is the oldest item, and are retries increasing? For batch processing: which job is failing or running long, and is an agreed processing deadline at risk? Streams prepares the events, connected investigation explains the constraints, and Workflows coordinates the response. The bank chooses the thresholds and owners. Technical processing indicators remain separate from confirmation of settlement, balances or reconciliation.

**Ask:** Which workload creates the most difficult handoff during an incident?

**Transition:** Once the owner knows what needs to happen, Workflows carries that context forward.

**Qualification:** Proposed backend use cases and indicators. Processing health does not prove settlement, balances or reconciliation.

The bank defines the relevant service boundaries, eligible events, thresholds and processing deadlines. Queue depth, message age and job duration require appropriate source instrumentation. A job or request completing technically does not establish financial correctness. These use cases do not promise reduced fraud, revenue uplift or compliance.

**Public evidence:**

- [Elastic for financial services](https://www.elastic.co/industries/financial-services): Public industry context for application performance, payment operations, service reliability and operating-model choices. Banking use cases are proposed applications, not claims of the prospect’s current implementation, quantified results or regulatory compliance.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Infrastructure and host monitoring](https://www.elastic.co/docs/solutions/observability/infra-and-hosts): Elastic connects host, container and infrastructure conditions to an operational investigation using collected metrics and logs. Collection, supported integrations, resource identity and permissions determine coverage. Resource pressure is evidence to examine, not proof of the cause.

## 11 — Workflows: turn insight into action

Suggested time: 1:30 · Chapter: Workflows

**Opening:** The cause is understood. The next delay is often assembling the handoff and coordinating the response.

Workflows defines the operational recipe. An alert, schedule or manual start can launch Elastic queries, evaluate conditions and call configured actions. For our backlog incident, it gathers the service evidence and ownership information and passes that context to the next step. Execution history shows what each step did and returned. The benefit is consistency under pressure: routine preparation does not depend on someone remembering every query and copy-pasting every result. The team authors the recipe and its permissions; no live workflow runs in this presentation.

**Ask:** Which response steps are repeated manually on almost every incident?

**Transition:** Here is the bounded payment-service runbook, including the bank’s approval boundary.

**Qualification:** Workflows: Stack 9.4+ GA, Enterprise. Enable the feature; permissions, actions and external integrations must be configured.

Core Workflows uses versionable definitions and configured actions. Native Elasticsearch queries differ from external ticketing, notification or HTTP integrations, which need their own credentials, network path and authorization. Steps and integrations can have separate maturity. This example does not use Preview Streams-specific workflow steps or execute a customer-impacting action.

**Public evidence:**

- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.
- [Set up Elastic Workflows](https://www.elastic.co/docs/explore-analyze/workflows/get-started/setup): Verify the intended version, subscription, feature availability and role privileges before enabling Workflows. Native Elastic queries and configured external actions have different access and connection requirements. A self-managed deployment does not establish that external actions or AI inference remain inside the bank.
- [Monitor workflow execution](https://www.elastic.co/docs/explore-analyze/workflows/authoring-techniques/monitor-workflows): Execution views expose workflow and step status, outputs and errors for operational review. The presentation's example history is illustrative. Execution history alone is not an immutable audit archive or proof of regulatory compliance.

## 12 — Workflows: a repeatable response

Suggested time: 1:30 · Chapter: Workflows in banking

**Opening:** The same evidence that explained the backlog should arrive with the response request.

A Workflow gathers the payment-service context, the relevant events and the owner. Configured incident and notification integrations carry the evidence to the responsible team. The bank’s existing approval process authorizes a permitted configuration response; the diagram does not invent a native approval screen. After the approved setting is restored, the owner checks fresh latency, errors and whether pending work is draining. This closes the operational loop without automating transaction handling. Settlement and any earlier pending transfers still require their own agreed checks.

**Ask:** Which preparation steps can be automated, and who authorizes a configuration response?

**Transition:** A useful response also needs the history and operating controls to investigate recurrence.

**Qualification:** Illustrative authored runbook. Ticketing, notifications and approval use configured integrations or the bank's existing process.

The diagram is not a native approval screen or a prebuilt banking workflow. Automatic steps collect context and coordinate the incident. A customer-impacting response requires the bank's existing approval process or an explicitly configured approval integration, appropriate credentials and a separate authorized action. Recovery is checked; earlier pending transfers need separate reconciliation. No transaction handling, system change or notification is executed here.

**Public evidence:**

- [Observability workflow patterns](https://www.elastic.co/docs/explore-analyze/workflows/use-cases/observability): Official patterns include anomaly-alert response, related log queries, service enrichment, cases, notifications and cross-signal queries with conditional actions. These support the proposed runbook; external integrations must be configured and the example triggers no customer-impacting change.
- [Monitor workflow execution](https://www.elastic.co/docs/explore-analyze/workflows/authoring-techniques/monitor-workflows): Execution views expose workflow and step status, outputs and errors for operational review. The presentation's example history is illustrative. Execution history alone is not an immutable audit archive or proof of regulatory compliance.
- [Set up Elastic Workflows](https://www.elastic.co/docs/explore-analyze/workflows/get-started/setup): Verify the intended version, subscription, feature availability and role privileges before enabling Workflows. Native Elastic queries and configured external actions have different access and connection requirements. A self-managed deployment does not establish that external actions or AI inference remain inside the bank.

## 13 — Your infrastructure. Your operating model.

Suggested time: 1:00 · Chapter: Operate on your terms

**Opening:** An incident can look new until the team searches the right history.

The bank can run Elastic on its infrastructure and choose how evidence is retained and accessed. Storage tiers let teams balance the investigation window against storage, performance and operational effort. That is useful when the payment backlog resembles a previous release or configuration incident. Self-managed remains an operating responsibility: package access, upgrades, support and optional model connections need planned paths. The differentiator is control over the operating design and useful history, rather than a promise to store everything forever or achieve a universal saving.

**Ask:** What history must stay searchable, and what operating boundaries are fixed?

**Transition:** The customer references show three concrete operational benefits of this approach.

**Qualification:** Self-managed deployment is supported. Tiering, snapshots, licenses and approved data flows need design and validation.

Searchable history is governed by configured retention, storage tier, snapshot repository and subscription. It is not a promise to store everything indefinitely or achieve universal savings. Plan package, upgrade and support dependencies. AI-assisted features need an explicitly approved model path; on-premises storage does not establish local inference. No Saudi-hosting or compliance assurance is implied.

**Public evidence:**

- [Elastic restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.
- [Elasticsearch data tiers](https://www.elastic.co/docs/manage-data/lifecycle/data-tiers): Hot, warm, cold and frozen tiers support different access, performance and storage needs. Searchable snapshots require suitable object storage/repositories and entitlement. Longer retained history supports later investigation, subject to the bank's retention, access and cost decisions; no storage-saving percentage is promised.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 14 — Emirates NBD: shared investigation

Suggested time: 1:00 · Chapter: Customer evidence

**Opening:** Emirates NBD is the regional on-premises example for the investigation part of the story.

The published account describes engineers moving from disparate log files to centralized evidence, with logs stored on premises and APM adding application context. It reports a shift from days to minutes to locate problems. That makes the story relevant to the bank’s operational needs and deployment preference: teams can investigate the same application issue together. Keep the attribution exact. This is historical evidence for centralized logs and APM, not proof that the modern Streams or Workflows features produced the result.

**Ask:** Which of these banking examples most resembles your operational priorities?

**Transition:** Oney and Discover reinforce earlier detection and useful investigation history.

**Qualification:** Elastic-published customer account. On-premises logs + APM; not a Saudi-hosting or regulatory-approval claim.

The source reports faster location and resolution of customer-facing issues, from days to minutes. This is an attributed customer account, not a measured guarantee or a forecast for this bank. It is evidence for the shared logs/APM approach, not proof that Streams or Workflows produced the reported result.

**Public evidence:**

- [Emirates NBD customer story](https://www.elastic.co/customers/emirates-nbd/): Elastic-published customer account: centralized logs stored on premises, plus APM, with locating application problems and resolving operational issues improving from days to minutes. This does not establish Saudi hosting or regulatory approval; it is a reported example, not a universal benchmark.

## 15 — Detect sooner. Keep history useful.

Suggested time: 1:00 · Chapter: Customer evidence

**Opening:** These examples make two parts of operational readiness concrete.

Oney reports API-incident detection moving from up to twenty minutes to one minute. Discover reports historical-data retrieval moving from twenty-four hours or more to minutes after changing its storage architecture. Its story uses Elastic Cloud Enterprise with AWS and S3; it is not an on-premises reference. Together they support two questions for a validation: can we notice the issue earlier, and can we search the evidence needed to understand recurrence? Neither result is a promise for this bank or proof that modern Streams or Workflows caused the historical outcome.

**Ask:** Is earlier detection or faster access to investigation history the stronger first priority?

**Transition:** Close by proving the connected loop on one payment-processing service.

**Qualification:** Reported examples, not forecasts. Discover uses ECE with AWS and S3; it is not an on-premises reference.

Oney measures API-incident detection, not resolution or MTTR. Discover measures historical-data retrieval and separately reports 50% lower storage requirements, not total observability spend. Its account describes data streams, ILM and Watcher, not evidence that modern Streams or Workflows produced these outcomes. The two results have different scopes and are not a combined performance promise.

**Public evidence:**

- [Oney Bank customer story](https://www.elastic.co/customers/oney-bank): Elastic-published customer account: API incident detection changed from up to 20 minutes to one minute. This measures detection, not resolution or MTTR. The source does not establish an on-premises deployment. Reported outcome, not a prospect forecast.
- [Discover customer story](https://www.elastic.co/customers/discover): Elastic-published customer account: historical-data retrieval moved from 24 hours or more to minutes, with a reported 50% reduction in storage requirements. The story uses Elastic Cloud Enterprise with AWS and S3, not an on-premises reference. It describes data streams, ILM and Watcher; it does not attribute results to today’s Streams or Workflows. No total-spend saving or prospect forecast is implied.

## 16 — From the first alert to a supported next move

Suggested time: 0:30 · Chapter: Why Elastic

**Opening:** The story began with an alert and a growing backlog. It ends with a supported next move.

Choose one payment-processing service. Make selected logs useful through Streams, connect them to traces and infrastructure evidence, and test one RCA question. Then use a bounded Workflow to prepare and route the response, with the bank’s approval process intact. Agree the baseline, or record it as unknown, and check fresh operational recovery against explicit criteria. This is a concrete way to evaluate Elastic’s differentiators: less context rebuilt during the incident and a clearer path from evidence to an authorized action.

**Ask:** Which payment-processing service should we use to prove this loop?

**Transition:** Agree the service, evidence and operational owner for the validation.

**Qualification:** Proposed validation. Scope, access, version, subscription, baseline and response authority must be agreed.

The next step is an evaluation proposal, not a promise of a specific result or a request to connect production systems through this website. Choose permitted samples, responsible owners, an appropriate test environment and an explicit decision criterion. Keep the original sources and the bank's operating requirements visible throughout.

**Public evidence:**

- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.

## Practical questions about the differentiators

**Does Streams replace every existing pipeline?** No. Start with selected logs and useful fields. Inspect processing previews and failure handling. Existing supported collection can remain part of the design. Saved processing changes affect future incoming data.

**Does Workflows replace our incident-management system?** It can query Elastic and coordinate configured actions. Existing ticketing, notification and approval systems remain explicit integrations. Start with evidence collection and incident coordination; authorize operational changes through the bank’s normal process.

**Does self-managed mean AI stays local?** No. Streams AI assistance requires an approved model connection and entitlement; basic manual log management does not require it. Review what sample data reaches the chosen model. On-premises data storage does not establish the model’s processing location.

**Did the customers obtain these results from Streams or Workflows?** These stories support the broader shared-observability approach. Do not attribute their historical outcomes to either newly illustrated feature.

## Close

“Which payment-processing service should we use to prove the loop from a backlog alert to a supported next move? Let us agree the evidence, operational owner, baseline and recovery criteria.”
