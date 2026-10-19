# Elastic Observability for Digital Banking — presenter notes

Customer-neutral presentation. Suggested speaking plan: 18:00; discussion is additional. Public evidence checked 19 October 2026. All incident data and banking experiences are fictional illustrations. No live systems, models or transactions are connected.

Use arrows to change scenes immediately. Animations loop on each scene; Pause holds the view and Replay restarts it. G opens the overview, N shows these notes, F requests fullscreen, and 1–5 controls density. Hide notes before sharing the presentation window.

## Opening

“Elastic connects the loop from operational data to investigation to action. I will show how Streams makes logs useful, how a shared search foundation supports RCA, and how Workflows coordinates repeatable response. Then we will connect those ideas to banking and published customer examples.”

## 01 — Elastic Observability

Suggested time: 0:30 · Chapter: From data to action

**Opening:** Elastic's Observability story starts with the data and finishes with a useful action.

A bank already has plenty of dashboards. The harder problem is connecting the evidence behind them. We will show the Elastic approach: collect openly, make logs useful through Streams, investigate across signals on a searchable foundation, then make routine response repeatable with Workflows. We will keep the examples close to banking and use published customer results to ground the discussion. The objective is to explain why these pieces belong together, rather than take you through a long configuration tour.

**Ask:** Which part of that loop is hardest for your teams today?

**Transition:** Start with the environment that makes this approach necessary.

**Qualification:** Original illustrations. Product availability depends on the deployed release and subscription.

This is a customer-neutral presentation, not a live product environment. The banking examples are synthetic; no model, banking system or workflow is connected. The source reference informs the philosophy and visual flow, while all published narration and diagrams are original.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.

## 02 — A connected bank needs connected answers

Suggested time: 1:00 · Chapter: The observability challenge

**Opening:** Your customer sees one banking experience. Your engineers may see many separate systems.

A slow payment could involve the app, identity checks, an API, a queue, a core platform or an external provider. Each team may be looking at a different tool and a different clock. Adding another chart does not necessarily connect those views. The business cost is the delay in answering simple questions: what is affected, where should we investigate, and who should act? This is why the Elastic story starts with shared evidence, rather than an isolated view of one component.

**Ask:** Where do investigations most often cross a team or tool boundary?

**Transition:** Elastic approaches that problem with three connected ideas.

**Qualification:** Illustrative bank architecture. Actual systems and telemetry coverage must be established.

The diagram illustrates common banking dependencies; it does not describe the prospect's architecture or claim that Elastic automatically observes external providers, mainframes or every application. Sources, access and instrumentation define coverage.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic for financial services](https://www.elastic.co/industries/financial-services): Public industry context for application performance, payment visibility, customer experience and operating-model choices. The presentation's banking use cases are proposed applications, not claims of the prospect's current implementation, quantified results or regulatory compliance.

## 03 — Open. Connected. Actionable.

Suggested time: 1:00 · Chapter: The Elastic philosophy

**Opening:** The differentiator is how the pieces work together.

Open means meeting the bank's data where it is, including OpenTelemetry and supported existing collectors. Connected means the logs, performance trends and request paths can contribute to the same investigation. Actionable means an alert can start an authored sequence that gathers context and coordinates a response. Streams is the log-management part of that story; Workflows is the repeatable-action part. Elasticsearch supplies the shared search and analytics foundation. We will unpack those mechanisms, then apply them to banking rather than treating them as a list of product names.

**Ask:** Which matters most: preparing data, connecting evidence, or coordinating action?

**Transition:** First, why does the search foundation matter when something goes wrong?

**Qualification:** Architecture overview. Collection, correlation and automation require configuration and appropriate access.

These are supported capability families, not a claim of zero configuration or automatic coverage. Streams, APM, anomaly detection and Workflows have individual version, entitlement and operational requirements. The presentation does not promise autonomous root cause verification or remediation.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.

## 04 — Search beyond the dashboard

Suggested time: 1:00 · Chapter: Search as the foundation

**Opening:** A dashboard is a useful starting point. An incident creates questions you did not prepare in advance.

Suppose payment latency rises. The team needs more than the average: which service, channel, release and event pattern changed? Elasticsearch lets teams search and analyze the evidence behind the view, including structured fields and the original event detail. In this illustration a trend, a request path and relevant logs converge around the same question. That helps the team explore the unfamiliar rather than stop at a fixed set of charts. Related evidence narrows the investigation; the engineer still checks the explanation.

**Ask:** What question usually forces your team out of its dashboard into another tool?

**Transition:** The foundation becomes useful when we can collect the right evidence without closing off our options.

**Qualification:** Illustrative investigation. Queries use available, permitted data; correlation does not establish cause.

The diagram shows related evidence retrieved and examined in one investigation, not a promise that one natural-language prompt or a single query automatically joins every telemetry source. Appropriate indexing, fields, time alignment and permissions are required. Supporting records remain inspectable.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.

## 05 — Open collection. More choice.

Suggested time: 1:00 · Chapter: Open by design

**Opening:** Open collection is a practical choice for a bank with investments it wants to keep.

Elastic supports OpenTelemetry, including Elastic distributions, alongside its integrations and collection options. That means the discussion can start with an important service and the evidence already available, rather than demand an estate-wide replacement on day one. The value is flexibility in instrumentation and deployment, with a deliberate path to broader coverage. We would check the bank's languages, collectors, network boundaries and operational standards. Open standards create options; they do not remove the need to validate the actual collection path.

**Ask:** Which collection investments or standards must a new platform preserve?

**Transition:** Collecting logs is only the beginning. Streams helps make that data useful.

**Qualification:** Supported collection paths vary by signal, language, collector, release and deployment.

OpenTelemetry compatibility does not mean every agent or vendor format works unchanged. Validate instrumentation, collector configuration and trace-context propagation. Self-managed environments need a supported ingest path and approved package/update access; no mandatory migration of every source is implied.

**Public evidence:**

- [OpenTelemetry with Elastic APM](https://www.elastic.co/docs/solutions/observability/apm/opentelemetry): Elastic accepts OpenTelemetry instrumentation alongside supported Elastic collection options. Language, signal, collector and deployment compatibility must be checked for the chosen release. Open instrumentation preserves collection choices; it does not mean every source is already instrumented or every feature is identical across deployment types.
- [Elastic restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.

## 06 — Streams: make logs useful

Suggested time: 1:30 · Chapter: Streams

**Opening:** Streams addresses the work between receiving logs and being able to investigate them.

Banks have many log formats. If the service name, channel or outcome is buried in a string, teams first have to work out what the event means. Streams brings processing and log management into a guided experience: extract fields, inspect a preview and apply a reviewed change. AI can help suggest processing when an approved model is configured. The differentiator is making this preparation visible alongside the data that investigators use. It is a way to reduce repeated preparation work, not a claim that parsing or governance disappears.

**Ask:** How much investigation time starts with finding or fixing a log format?

**Transition:** Here is that idea applied to a small banking example.

**Qualification:** Streams management: Stack 9.2+. AI assistance needs an approved model and entitlement; features vary by version.

The example uses log processing and management. Wired partitioning and Streams-specific workflow actions have separate Preview status and are not required by this story. AI pipeline suggestions are optional and require a configured generative AI connector. Review parsing accuracy, data quality, privileges and retention before applying changes; no universal savings or automatic understanding of every format is promised.

**Public evidence:**

- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.
- [Process documents with Streams](https://www.elastic.co/docs/solutions/observability/streams/parse-and-process): Users review suggested processors and preview field extraction before saving. AI suggestions send sample logs to the configured model and can incur costs; manual processors are also supported. Saved changes affect future incoming data. Banking fields are synthetic; automatic understanding of every source is not promised.
- [Streams data lifecycle](https://www.elastic.co/docs/solutions/observability/streams/configure-retention): Streams exposes retention and lifecycle choices. Available options depend on the release, stream type, privileges and subscription. Retention periods and storage phases are choices made by the bank; they do not automatically satisfy a regulatory requirement.

## 07 — Streams: from raw logs to answers

Suggested time: 1:30 · Chapter: Streams in banking

**Opening:** Imagine two systems describe the same kind of payment-service issue in different formats.

One API emits a structured event; a legacy application writes a line of text. We prepare fields that help the investigator: service, channel and observed outcome. Streams processing and its preview let the owner check the extraction before saving the change. Once those fields are useful, the team can filter the evidence consistently and compare related behavior. This is the business consequence of better log preparation: less decoding before asking what is affected. The illustration stays at request evidence; settlement and reconciliation need their own agreed sources.

**Ask:** Which important banking source is hardest to make searchable today?

**Transition:** Prepared logs become more powerful when the surrounding signals are connected.

**Qualification:** Synthetic log-processing illustration. Parsing is configured and reviewed; request status is not payment settlement.

The authored example is not a real Kibana capture. It contains no customer, account, provider or transaction identifiers. Field extraction must be tested against representative permitted samples, with failed processing visible for review. It does not rely on wired-stream partitioning, arbitrary joins or a prebuilt banking data model. An observed request status does not prove final payment completion.

**Public evidence:**

- [Process documents with Streams](https://www.elastic.co/docs/solutions/observability/streams/parse-and-process): Users review suggested processors and preview field extraction before saving. AI suggestions send sample logs to the configured model and can incur costs; manual processors are also supported. Saved changes affect future incoming data. Banking fields are synthetic; automatic understanding of every source is not promised.
- [Elastic Streams overview](https://www.elastic.co/docs/solutions/observability/streams/streams): Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.

## 08 — One service. Connected signals.

Suggested time: 1:15 · Chapter: Connected signals

**Opening:** The point is not collecting four signals for their own sake. Each explains something different.

A metric shows that latency changed. A trace helps locate where a request waited. A log supplies event detail, and user-experience evidence helps establish who felt the problem. Elastic brings these investigation paths around shared service context. Anomaly detection can highlight unusual behavior, while service targets express what the bank considers acceptable. This is a stronger starting point for RCA than looking at each signal in isolation. The actual view remains bounded by instrumentation; a missing provider trace is a gap to acknowledge, not a healthy green box.

**Ask:** Which signal-to-signal handoff is hardest during an incident?

**Transition:** Now use that connected evidence to investigate a cause.

**Qualification:** Coverage depends on instrumentation and shared context. Anomaly detection requires a supported configuration and subscription.

Not every telemetry source is automatically correlated. Service identity, timestamps and trace context must be configured appropriately. ML can surface unusual behavior relative to a learned baseline; it does not verify causality or replace service-level targets. Each experience or infrastructure view depends on available instrumentation.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Machine learning anomaly detection](https://www.elastic.co/docs/explore-analyze/machine-learning/anomaly-detection): Machine learning can identify anomalous patterns in time-series telemetry. Appropriate data, jobs, privileges, capacity and entitlement are required. An anomaly is a signal for investigation and is not proof of the cause, prevention of every incident or a generative-AI diagnosis.

## 09 — RCA: follow the evidence

Suggested time: 1:30 · Chapter: Root cause investigation

**Opening:** The useful RCA story is a short chain of evidence that an engineer can check.

A service slows down. The request trace locates a wait; related logs describe connection acquisition; the change record points to a configuration adjustment. That is a candidate explanation, not a conclusion. The service owner checks the setting and competing possibilities before confirming the fictional finding. Elastic's contribution is connecting the relevant evidence and reducing blind handoffs. It does not create visibility inside an uninstrumented payment provider. This distinction makes the demonstration credible: the team can explain both what it knows and what still needs checking.

**Ask:** What evidence does your incident owner need before accepting an RCA?

**Transition:** The same approach can support several high-value banking questions.

**Qualification:** Illustrative RCA. Correlation is a candidate, not a verified cause; external-provider internals remain unobserved.

The fictional owner checks the actual setting, capacity, database health and alternative explanations before confirming an incorrectly reduced connection limit. This is not a real investigation or an autonomous diagnosis. Recovery requires approved action and separate checks; an API success response alone does not establish settled funds or correct balances.

**Public evidence:**

- [Application and service monitoring](https://www.elastic.co/docs/solutions/observability/applications): APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## 10 — Built for the banking questions

Suggested time: 1:15 · Chapter: FSI applications

**Opening:** The banking value is concrete even when the platform underneath is shared.

For payments, the question is which requests are delayed or exceptional and what downstream evidence confirms the outcome. For login and onboarding, it is where customers encounter errors or friction. For cards and digital channels, it is whether service behavior explains a customer-facing problem. Streams helps prepare the evidence; connected investigation helps explain it. The bank chooses the indicators and their meaning. We should not turn an accepted request into a claim of settlement, or turn an infrastructure alert into a measured customer impact without supporting data.

**Ask:** Which of these use cases would have the clearest operational owner?

**Transition:** Once the evidence is useful, the next differentiator is putting it to work.

**Qualification:** Proposed use cases and indicators, not measured prospect outcomes. Payment acceptance and settlement are distinct.

The bank defines event eligibility, completion, target and review window. Login/onboarding evidence must respect access and data minimization requirements. Card and payment-provider coverage depends on available integrations and instrumentation. These use cases do not claim reduced fraud, revenue uplift or regulatory compliance.

**Public evidence:**

- [Elastic for financial services](https://www.elastic.co/industries/financial-services): Public industry context for application performance, payment visibility, customer experience and operating-model choices. The presentation's banking use cases are proposed applications, not claims of the prospect's current implementation, quantified results or regulatory compliance.
- [Emirates NBD customer story](https://www.elastic.co/customers/emirates-nbd/): Elastic-published customer account: centralized logs stored on premises, plus APM, with locating customer-facing problems and issue resolution improving from days to minutes. The source does not establish Saudi hosting or regulatory approval; this is a reported outcome, not a universal benchmark.
- [Elastic service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.

## 11 — Workflows: turn insight into action

Suggested time: 1:30 · Chapter: Workflows

**Opening:** A finding is valuable. A repeatable way to use it is the next step.

Workflows lets a team define what should happen when an alert arrives, on a schedule or when a person starts a run. The sequence can query Elastic for context, test a condition, and call configured actions. Think of it as a reusable operational recipe, with execution history showing the steps and outputs. This connects the evidence platform to everyday work instead of asking an operator to copy the same information between tools. The recipe and its permissions are designed by the team; nothing in this presentation runs against a live system.

**Ask:** Which response steps are repeated manually on almost every incident?

**Transition:** For a bank, start with low-risk coordination before considering a controlled response.

**Qualification:** Workflows: Stack 9.4+ GA, Enterprise. Enable the feature; permissions, actions and external integrations must be configured.

Core Workflows uses versionable definitions and configured actions. Native Elasticsearch queries differ from external ticketing, notification or HTTP integrations, which need their own credentials, network path and authorization. Steps and integrations can have separate maturity. This example does not use Preview Streams-specific workflow steps or execute a customer-impacting action.

**Public evidence:**

- [Elastic Workflows overview](https://www.elastic.co/docs/explore-analyze/workflows): Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.
- [Set up Elastic Workflows](https://www.elastic.co/docs/explore-analyze/workflows/get-started/setup): Verify the intended version, subscription, feature availability and role privileges before enabling Workflows. Native Elastic queries and configured external actions have different access and connection requirements. A self-managed deployment does not establish that external actions or AI inference remain inside the bank.
- [Monitor workflow execution](https://www.elastic.co/docs/explore-analyze/workflows/authoring-techniques/monitor-workflows): Execution views expose workflow and step status, outputs and errors for operational review. The presentation's example history is illustrative. Execution history alone is not an immutable audit archive or proof of regulatory compliance.

## 12 — Workflows: a repeatable response

Suggested time: 1:30 · Chapter: Workflows in banking

**Opening:** A useful first banking runbook prepares the response rather than jumping straight to a system change.

An alert starts a context query, gathers the relevant evidence and identifies the service owner. A configured ticketing integration creates or updates the incident, and a notification reaches the responsible team. If a system response is proposed, the bank's approval process comes before execution. The result then needs a recovery check. Workflows makes the repeatable preparation and coordination explicit and inspectable; it does not decide the bank's response authority. Start with that bounded runbook and prove its usefulness before extending the automation.

**Ask:** Which steps can run automatically, and which require an authorized person?

**Transition:** This loop also needs to fit the bank's infrastructure and operating controls.

**Qualification:** Illustrative authored runbook. Ticketing, notifications and approval use configured integrations or the bank's existing process.

The diagram is not a native approval screen or a prebuilt banking workflow. Automatic steps collect context and coordinate the incident. A customer-impacting response requires the bank's existing approval process or an explicitly configured approval integration, appropriate credentials and a separate authorized action. Recovery is checked; earlier pending transfers need separate reconciliation. No transaction handling, system change or notification is executed here.

**Public evidence:**

- [Observability workflow patterns](https://www.elastic.co/docs/explore-analyze/workflows/use-cases/observability): Official patterns include anomaly-alert response, related log queries, service enrichment, cases, notifications and cross-signal queries with conditional actions. These support the proposed runbook; external integrations must be configured and the example triggers no customer-impacting change.
- [Monitor workflow execution](https://www.elastic.co/docs/explore-analyze/workflows/authoring-techniques/monitor-workflows): Execution views expose workflow and step status, outputs and errors for operational review. The presentation's example history is illustrative. Execution history alone is not an immutable audit archive or proof of regulatory compliance.
- [Set up Elastic Workflows](https://www.elastic.co/docs/explore-analyze/workflows/get-started/setup): Verify the intended version, subscription, feature availability and role privileges before enabling Workflows. Native Elastic queries and configured external actions have different access and connection requirements. A self-managed deployment does not establish that external actions or AI inference remain inside the bank.

## 13 — Your infrastructure. Your operating model.

Suggested time: 1:00 · Chapter: Operate on your terms

**Opening:** The bank should be able to choose an operating model that fits its requirements.

Elastic can run on the bank's infrastructure. Retention and data tiers let the team decide which evidence needs fast access and which older evidence can use a different storage approach. That matters when an investigation needs to look beyond the immediate alert window. The tradeoff includes storage, search performance, recovery, licensing and operational effort. Self-managed does not mean dependency-free: package access, upgrades, support and any optional model connection need a planned path. The discussion is about control and design choices, not a blanket promise of compliance or lower cost.

**Ask:** What history must stay searchable, and what operating boundaries are fixed?

**Transition:** A regional customer provides a concrete example of the shared-evidence approach on premises.

**Qualification:** Self-managed deployment is supported. Tiering, snapshots, licenses and approved data flows need design and validation.

Searchable history is governed by configured retention, storage tier, snapshot repository and subscription. It is not a promise to store everything indefinitely or achieve universal savings. Plan package, upgrade and support dependencies. AI-assisted features need an explicitly approved model path; on-premises storage does not establish local inference. No Saudi-hosting or compliance assurance is implied.

**Public evidence:**

- [Elastic restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.
- [Elasticsearch data tiers](https://www.elastic.co/docs/manage-data/lifecycle/data-tiers): Hot, warm, cold and frozen tiers support different access, performance and storage needs. Searchable snapshots require suitable object storage/repositories and entitlement. Longer retained history supports later investigation, subject to the bank's retention, access and cost decisions; no storage-saving percentage is promised.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 14 — Emirates NBD: shared investigation

Suggested time: 1:00 · Chapter: Customer evidence

**Opening:** Emirates NBD is the clearest regional example for this conversation.

The published account describes logs stored on premises and APM supporting a common investigation view. It connects that view to online banking issues, card transaction problems and ATM experience. The reported shift is from days to minutes to locate problems, with teams spending less time searching separate files. That makes it relevant to both the bank's operational priorities and its deployment preference. Keep the attribution exact: this is a customer story about centralized logs and APM, not a claim that Streams or Workflows delivered the historical result.

**Ask:** Which of these banking examples most resembles your operational priorities?

**Transition:** Two other customers illustrate different parts of the incident clock.

**Qualification:** Elastic-published customer account. On-premises logs + APM; not a Saudi-hosting or regulatory-approval claim.

The source reports faster location and resolution of customer-facing issues, from days to minutes. This is an attributed customer account, not a measured guarantee or a forecast for this bank. It is evidence for the shared logs/APM approach, not proof that Streams or Workflows produced the reported result.

**Public evidence:**

- [Emirates NBD customer story](https://www.elastic.co/customers/emirates-nbd/): Elastic-published customer account: centralized logs stored on premises, plus APM, with locating customer-facing problems and issue resolution improving from days to minutes. The source does not establish Saudi hosting or regulatory approval; this is a reported outcome, not a universal benchmark.

## 15 — Two customers. Two different clocks.

Suggested time: 1:00 · Chapter: Customer evidence

**Opening:** These two results are useful because they measure different operational questions.

Oney reports API incident detection moving from up to twenty minutes to one minute after consolidating monitoring. WePay reports ninety percent less time to identify customer impact during incidents using consolidated logging and telemetry. Its story is in Google Cloud, and APM is described as a future plan. Those details matter: neither number is an MTTR claim or a forecast for your bank. Together they show why we should agree which clock a validation will measure instead of presenting a broad, undefined promise to make incidents faster.

**Ask:** Would earlier detection, faster impact identification or faster investigation matter most first?

**Transition:** Close by joining the differentiators into one practical validation.

**Qualification:** Customer-reported examples, not forecasts. WePay: Google Cloud; its APM adoption was a future plan.

Oney's measure is API-incident detection, not resolution or MTTR; its hosting is not established as on premises. WePay's 90% measure is impact identification, not downtime, incident count or MTTR, and must not be attributed to APM. Neither story establishes that Streams or Workflows caused the result. The two measures are not combined into one improvement claim.

**Public evidence:**

- [Oney Bank customer story](https://www.elastic.co/customers/oney-bank): Elastic-published customer account: API incident detection changed from up to 20 minutes to one minute. This measures detection, not resolution or MTTR. The source does not establish an on-premises deployment. Reported outcome, not a prospect forecast.
- [WePay customer story](https://www.elastic.co/customers/wepay/): Elastic-published customer account: 90% less time to identify customer impact during incidents, with consolidated logging/telemetry in a Google Cloud context. APM adoption was a future plan in this story; do not attribute the result to APM or redefine it as downtime, failures or MTTR.

## 16 — Why Elastic? Connect the whole loop.

Suggested time: 0:30 · Chapter: Why Elastic

**Opening:** The Elastic difference is the connected loop from data preparation to investigation to action.

Choose one important service. Use Streams to make selected logs useful, connect them to the evidence needed for one RCA question, then author a bounded Workflow that collects context and coordinates the response. Keep the bank's deployment and approval requirements explicit. Agree the baseline, or mark it unknown, and decide what evidence will justify the next step. That gives the team a practical way to evaluate the differentiators we have shown rather than leave with another feature checklist.

**Ask:** Which service would be the strongest place to prove this loop?

**Transition:** Agree the service, the owners and the evidence for the next conversation.

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

“Which banking service should we use to prove the loop: useful logs through Streams, connected evidence for one RCA question, and a bounded Workflow? Let us agree the evidence, owners, baseline and decision criteria.”
