import type { Scene } from "./types";
import { S } from "./evidence";

export const scenes: Scene[] = [
  {
    id: "elastic-observability-digital-banking",
    chapter: "From alert to action",
    eyebrow: "ELASTIC OBSERVABILITY · DIGITAL BANKING",
    title: "Elastic",
    emphasis: "Observability",
    lead: "Payments slow. Pending work grows. Make the next move clear.",
    visual: 30,
    takeaway:
      "Connect the operational evidence. Verify the cause. Coordinate the response.",
    detail:
      "A backend payment-processing incident connects Streams, RCA and Workflows.",
    qualification:
      "Original illustrations. Product availability depends on the deployed release and subscription.",
    requirements:
      "This is a customer-neutral presentation, not a live product environment. The banking examples are synthetic; no model, banking system or workflow is connected. The source reference informs the philosophy and visual flow, while all published narration and diagrams are original.",
    sources: [S.observability, S.streams, S.workflows],
    notes: {
      opening:
        "Payment processing is slowing and pending work is growing. Which team should act—and on what evidence?",
      body: "That is the operational question behind this presentation. We will follow one fictional payment-processing incident, using Elastic’s philosophy as the spine: collect openly, prepare useful logs with Streams, connect service and infrastructure evidence, then coordinate a repeatable response with Workflows. The point is a better incident decision, with enough context to explain and defend it. Published bank examples show earlier API detection, faster problem location and useful investigation history. We will keep the story focused on backend services and operations.",
      transition:
        "The first alert tells us there is a problem. It does not tell us where to start.",
      seconds: 30,
      prompt: "Which part of that loop is hardest for your teams today?",
    },
    steps: ["Collect", "Understand", "Act", "One connected loop"],
    illustrative: false,
  },
  {
    id: "connected-bank-connected-answers",
    chapter: "The operational challenge",
    eyebrow: "THE HOOK · A GROWING PAYMENT BACKLOG",
    title: "The backlog is growing.",
    emphasis: "Where is the cause?",
    lead: "Payment APIs, messaging, processing services and core dependencies each hold part of the answer.",
    visual: 31,
    takeaway:
      "An alert starts the clock. Shared evidence tells the right team where to look.",
    detail:
      "In this fictional incident, latency rises and pending work accumulates across backend services.",
    qualification:
      "Illustrative bank architecture. Actual systems and telemetry coverage must be established.",
    requirements:
      "The diagram illustrates common banking dependencies; it does not describe the prospect's architecture or claim that Elastic automatically observes external providers, mainframes or every application. Sources, access and instrumentation define coverage.",
    sources: [S.observability, S.fsi],
    notes: {
      opening:
        "The payment-processing alert is red. The queue is growing. Is this the service, its infrastructure, or a dependency?",
      body: "Every team has a plausible explanation. The application owner sees connection waits. The messaging team sees pending work. Infrastructure has its own resource metrics, and a dependency has separate logs. Without shared context, the incident becomes a sequence of handoffs while work continues to accumulate. Elastic’s role is to make those clues searchable and connected, so the owner can test an explanation and choose the next action. We will return to this same incident as each differentiator adds a useful piece.",
      transition: "Three connected ideas change how that investigation moves.",
      seconds: 60,
      prompt:
        "When pending work builds up, how do your teams establish ownership?",
    },
    steps: [
      "Payment processing slows",
      "Dependencies hold separate clues",
      "Pending work grows",
      "Find the responsible service",
    ],
    illustrative: true,
  },
  {
    id: "elastic-observability-philosophy",
    chapter: "The Elastic philosophy",
    eyebrow: "THE PHILOSOPHY · OPEN → CONNECTED → ACTIONABLE",
    title: "Open. Connected.",
    emphasis: "Actionable.",
    lead: "Bring data in openly, preserve its context, and turn useful findings into repeatable action.",
    visual: 32,
    takeaway:
      "Prepare the evidence once. Carry its context into investigation and action.",
    detail:
      "Streams, connected telemetry and Workflows share an Elasticsearch search foundation.",
    qualification:
      "Architecture overview. Collection, correlation and automation require configuration and appropriate access.",
    requirements:
      "These are supported capability families, not a claim of zero configuration or automatic coverage. Streams, APM, anomaly detection and Workflows have individual version, entitlement and operational requirements. The presentation does not promise autonomous root cause verification or remediation.",
    sources: [S.observability, S.streams, S.workflows],
    notes: {
      opening: "The differentiator is how the pieces work together.",
      body: "Open collection brings the bank’s operational data into a supported path. Streams makes important log fields useful before the next incident. Connected investigation follows the service, its request path and the infrastructure beneath it. Workflows carries that evidence into a repeatable response, with ownership and approvals explicit. In our example, the differentiator is continuity: the team does not have to rebuild the payment incident’s context at every handoff. Elasticsearch supplies the shared search and analytics foundation that joins this operational loop.",
      transition:
        "Start with the question that the first dashboard cannot answer.",
      seconds: 60,
      prompt:
        "Which matters most: preparing data, connecting evidence, or coordinating action?",
    },
    steps: [
      "Open collection",
      "Connected context",
      "Repeatable action",
      "Shared search foundation",
    ],
    illustrative: false,
  },
  {
    id: "search-beyond-the-dashboard",
    chapter: "Search as the foundation",
    eyebrow: "DIFFERENTIATOR · SEARCH THE EVIDENCE BEHIND THE VIEW",
    title: "Search beyond",
    emphasis: "the dashboard",
    lead: "Follow a new question from the backlog alert into service events, performance trends and request timing.",
    visual: 33,
    takeaway: "Keep investigating when the answer is outside the first chart.",
    detail:
      "Elasticsearch search and analytics help teams explore structured fields and unstructured event detail.",
    qualification:
      "Illustrative investigation. Queries use available, permitted data; correlation does not establish cause.",
    requirements:
      "The diagram shows related evidence retrieved and examined in one investigation, not a promise that one natural-language prompt or a single query automatically joins every telemetry source. Appropriate indexing, fields, time alignment and permissions are required. Supporting records remain inspectable.",
    sources: [S.observability, S.apmOverview],
    notes: {
      opening:
        "The chart shows the backlog. The next question is what changed when it began to grow.",
      body: "We search the payment service’s events, timing trend and request evidence around the same window. A connection-wait message, a rise in waiting time and a slow service call become related clues. Elasticsearch lets the investigator search structured fields and the original event detail, rather than stop at a fixed set of charts. That gives the owner a way to examine an unfamiliar failure. It does not automatically prove cause; the value is reaching the evidence needed to test an explanation.",
      transition:
        "That investigation starts with collecting the backend data we are permitted to use.",
      seconds: 60,
      prompt:
        "What question usually forces your team out of its dashboard into another tool?",
    },
    steps: [
      "Ask a banking question",
      "Find related evidence",
      "Connect the context",
      "Investigate beyond the chart",
    ],
    illustrative: true,
  },
  {
    id: "open-collection-choice",
    chapter: "Open by design",
    eyebrow: "DIFFERENTIATOR · OPEN COLLECTION",
    title: "Open collection.",
    emphasis: "More choice.",
    lead: "Use OpenTelemetry and supported Elastic integrations across the environments you operate.",
    visual: 34,
    takeaway:
      "Keep collection choices open while bringing backend evidence into one investigation.",
    detail:
      "Elastic distributions of OpenTelemetry support an open instrumentation approach.",
    qualification:
      "Supported collection paths vary by signal, language, collector, release and deployment.",
    requirements:
      "OpenTelemetry compatibility does not mean every agent or vendor format works unchanged. Validate instrumentation, collector configuration and trace-context propagation. Self-managed environments need a supported ingest path and approved package/update access; no mandatory migration of every source is implied.",
    sources: [S.otel, S.airGapped],
    notes: {
      opening:
        "Open collection is a practical choice for a bank with investments it wants to keep.",
      body: "Elastic supports OpenTelemetry, including Elastic distributions, alongside its integrations and collection options. That means the discussion can start with an important service and the evidence already available, rather than demand an estate-wide replacement on day one. The value is flexibility in instrumentation and deployment, with a deliberate path to broader coverage. We would check the bank's languages, collectors, network boundaries and operational standards. Open standards create options; they do not remove the need to validate the actual collection path.",
      transition:
        "Once the logs arrive, Streams helps keep preparation work out of the incident’s critical path.",
      seconds: 60,
      prompt:
        "Which collection investments or standards must a new platform preserve?",
    },
    steps: [
      "OpenTelemetry",
      "Elastic integrations",
      "Supported existing sources",
      "A shared ingest path",
    ],
    illustrative: false,
  },
  {
    id: "streams-make-logs-useful",
    chapter: "Streams",
    eyebrow: "STREAMS · FROM INGEST TO INVESTIGATION",
    title: "Streams:",
    emphasis: "make logs useful",
    lead: "Make useful log fields available before the next incident puts the team under pressure.",
    visual: 35,
    takeaway: "Move log preparation out of the incident’s critical path.",
    detail:
      "Extract useful fields, preview the result, inspect data quality and manage the stream's lifecycle.",
    qualification:
      "Streams management: Stack 9.2+. AI assistance needs an approved model and entitlement; features vary by version.",
    requirements:
      "The example uses log processing and management. Wired partitioning and Streams-specific workflow actions have separate Preview status and are not required by this story. AI pipeline suggestions are optional and require a configured generative AI connector. Review parsing accuracy, data quality, privileges and retention before applying changes; no universal savings or automatic understanding of every format is promised.",
    sources: [S.streams, S.processing, S.streamLifecycle],
    notes: {
      opening:
        "During a growing backlog, the on-call engineer should be investigating—not decoding a new log format.",
      body: "Streams addresses the preparation between receiving logs and being able to investigate them. The service owner extracts useful fields, inspects a processing preview and applies a reviewed change. AI can suggest processing when an approved model and entitlement are configured. In our incident, the payoff is practical: service, component and event details are ready when the investigator needs to find the waiting worker. The processing remains visible and reviewable alongside the data. It reduces repeated preparation; it does not remove the need to validate a source.",
      transition:
        "Here is the payment-service evidence that preparation makes usable.",
      seconds: 90,
      prompt:
        "How much investigation time starts with finding or fixing a log format?",
    },
    steps: [
      "Raw log formats",
      "Process and extract",
      "Preview and review",
      "Queryable, managed evidence",
    ],
    illustrative: false,
  },
  {
    id: "streams-banking-example",
    chapter: "Streams in banking",
    eyebrow: "STREAMS · ILLUSTRATIVE BANKING EXAMPLE",
    title: "Streams:",
    emphasis: "make the waiting work visible",
    lead: "Turn API and worker logs into fields the incident owner can search and compare.",
    visual: 36,
    takeaway:
      "Find the payment worker’s waiting events without decoding each log format again.",
    detail:
      "Review service, component and event fields in the processing preview before applying changes.",
    qualification:
      "Synthetic log-processing illustration. Field extraction is configured and reviewed; these are operational events.",
    requirements:
      "The illustration is not a real Kibana capture and contains no account, provider or transaction identifiers. Test extraction against permitted representative samples and inspect failed processing. It uses basic management and processing, without wired-stream partitioning or a prebuilt banking data model. Waiting events and service health do not establish payment settlement or correct balances.",
    sources: [S.processing, S.streams],
    notes: {
      opening:
        "Two backend systems describe the same waiting work in different formats.",
      body: "The API emits a structured service record; the payment worker writes a text event. Streams helps the owner prepare service, component and event fields and inspect the output before saving. The investigator can then find waiting worker events and compare them with the service’s behavior during the backlog window. This is the step that turns a pile of log messages into useful operational evidence. Processing is reviewed against representative samples, including failures, and saved changes affect future incoming data.",
      transition:
        "The logs tell us what happened. Other telemetry tells us where and under what conditions.",
      seconds: 90,
      prompt: "Which backend log source takes the most effort to make useful?",
    },
    steps: [
      "API and legacy formats",
      "Extract useful fields",
      "Inspect the preview",
      "Search with banking context",
    ],
    illustrative: true,
  },
  {
    id: "connected-signals-one-service",
    chapter: "Connected signals",
    eyebrow: "DIFFERENTIATOR · SHARED SERVICE CONTEXT",
    title: "Different clues.",
    emphasis: "One investigation.",
    lead: "Connect logs, metrics and traces with the infrastructure context behind the payment service.",
    visual: 37,
    takeaway:
      "Follow the same service from the alert to the wait, the event and the resource condition.",
    detail:
      "Metrics show change, traces locate delay, logs explain events, and infrastructure context shows constraints.",
    qualification:
      "Coverage depends on instrumentation and shared context. Anomaly detection requires a supported configuration and subscription.",
    requirements:
      "Service identity, timestamps and propagated trace context must be configured appropriately. Infrastructure context comes from collected metrics and logs; it is not a fourth independent telemetry type. ML can highlight unusual behavior but does not verify cause. Instrumentation defines visibility, including across providers and dependencies.",
    sources: [S.observability, S.apmOverview, S.infrastructure],
    notes: {
      opening:
        "The clues become useful when they describe the same service in the same incident window.",
      body: "The backlog and latency metrics show what changed. The trace locates the connection-acquisition wait. Worker logs supply the event detail. Infrastructure context helps check resource pressure, while dependency evidence tests other explanations. These are complementary views of one incident, rather than separate dashboards competing for attention. Elastic connects those investigation paths around shared service context. ML can highlight unusual behavior where configured, but the engineer still tests the explanation. Missing dependency telemetry remains an acknowledged gap.",
      transition:
        "Together, those clues support a candidate cause the owner can verify.",
      seconds: 75,
      prompt: "Which signal-to-signal handoff is hardest during an incident?",
    },
    steps: [
      "Metrics: what changed?",
      "Traces: where is the wait?",
      "Logs: what happened?",
      "Infrastructure: what is constrained?",
    ],
    illustrative: false,
  },
  {
    id: "rca-follow-the-evidence",
    chapter: "Root cause investigation",
    eyebrow: "RCA · CONTEXT BEFORE CONCLUSION",
    title: "Find the wait.",
    emphasis: "Verify the cause.",
    lead: "Connection waits, backlog growth and a recent configuration change point to one testable explanation.",
    visual: 38,
    takeaway:
      "Give the incident owner a supported explanation—not another disconnected alert.",
    detail:
      "The fictional owner confirms a reduced connection limit after checking infrastructure and dependency alternatives.",
    qualification:
      "Illustrative RCA. The owner verifies the actual setting and alternatives; uninstrumented provider internals remain unobserved.",
    requirements:
      "The fictional owner checks the actual setting, capacity, database health and alternative explanations before confirming an incorrectly reduced connection limit. This is not a real investigation or an autonomous diagnosis. Recovery requires approved action and separate checks; an API success response alone does not establish settled funds or correct balances.",
    sources: [S.apmOverview, S.serviceMap],
    notes: {
      opening:
        "The wait is inside the payment service. Now the owner has a specific explanation to check.",
      body: "The trace shows connection acquisition taking time. Worker logs report waits and timeouts; pool metrics and backlog trends show work accumulating. A recent configuration record reveals a reduced connection limit. The owner checks the actual setting, infrastructure pressure and dependency health, then confirms the fictional finding: the limit was reduced incorrectly. The investigation has moved from a red alert to a defensible explanation. A proposed restoration still goes through normal approval, and operational recovery needs its own fresh checks.",
      transition:
        "The same approach applies to other backend workloads without changing the operating model.",
      seconds: 90,
      prompt:
        "What evidence does your incident owner need before accepting an RCA?",
    },
    steps: [
      "See latency and backlog",
      "Locate the connection wait",
      "Check the changed limit",
      "Owner verifies the finding",
    ],
    illustrative: true,
  },
  {
    id: "banking-use-cases",
    chapter: "FSI applications",
    eyebrow: "FSI · CONNECT THE PLATFORM TO BANKING OUTCOMES",
    title: "Protect the workloads",
    emphasis: "that keep banking moving",
    lead: "Apply the same investigation loop to payment APIs, messaging and batch processing.",
    visual: 39,
    takeaway:
      "Know which workload is falling behind, where it is waiting and who owns the next move.",
    detail:
      "Agree operational indicators: service latency and errors, queue backlog and age, or batch duration and failures.",
    qualification:
      "Proposed backend use cases and indicators. Processing health does not prove settlement, balances or reconciliation.",
    requirements:
      "The bank defines the relevant service boundaries, eligible events, thresholds and processing deadlines. Queue depth, message age and job duration require appropriate source instrumentation. A job or request completing technically does not establish financial correctness. These use cases do not promise reduced fraud, revenue uplift or compliance.",
    sources: [S.fsi, S.apmOverview, S.infrastructure],
    notes: {
      opening:
        "The shared platform supports three operational questions that matter to a bank.",
      body: "For payment APIs: which service is slow or erroring, and which dependency explains it? For messaging: where is work accumulating, how old is the oldest item, and are retries increasing? For batch processing: which job is failing or running long, and is an agreed processing deadline at risk? Streams prepares the events, connected investigation explains the constraints, and Workflows coordinates the response. The bank chooses the thresholds and owners. Technical processing indicators remain separate from confirmation of settlement, balances or reconciliation.",
      transition:
        "Once the owner knows what needs to happen, Workflows carries that context forward.",
      seconds: 75,
      prompt:
        "Which workload creates the most difficult handoff during an incident?",
    },
    steps: [
      "Payment APIs: latency and errors",
      "Messaging: backlog and age",
      "Batch: duration and failures",
      "One operational investigation loop",
    ],
    illustrative: true,
  },
  {
    id: "workflows-insight-to-action",
    chapter: "Workflows",
    eyebrow: "WORKFLOWS · DATA-AWARE AUTOMATION",
    title: "Workflows:",
    emphasis: "turn insight into action",
    lead: "An authored sequence can query Elastic, apply conditions and coordinate the next steps.",
    visual: 40,
    takeaway:
      "Carry the evidence into action instead of rebuilding it in the next tool.",
    detail:
      "Manual, scheduled or alert triggers pass context through steps; execution history makes each run inspectable.",
    qualification:
      "Workflows: Stack 9.4+ GA, Enterprise. Enable the feature; permissions, actions and external integrations must be configured.",
    requirements:
      "Core Workflows uses versionable definitions and configured actions. Native Elasticsearch queries differ from external ticketing, notification or HTTP integrations, which need their own credentials, network path and authorization. Steps and integrations can have separate maturity. This example does not use Preview Streams-specific workflow steps or execute a customer-impacting action.",
    sources: [S.workflows, S.workflowSetup, S.workflowHistory],
    notes: {
      opening:
        "The cause is understood. The next delay is often assembling the handoff and coordinating the response.",
      body: "Workflows defines the operational recipe. An alert, schedule or manual start can launch Elastic queries, evaluate conditions and call configured actions. For our backlog incident, it gathers the service evidence and ownership information and passes that context to the next step. Execution history shows what each step did and returned. The benefit is consistency under pressure: routine preparation does not depend on someone remembering every query and copy-pasting every result. The team authors the recipe and its permissions; no live workflow runs in this presentation.",
      transition:
        "Here is the bounded payment-service runbook, including the bank’s approval boundary.",
      seconds: 90,
      prompt:
        "Which response steps are repeated manually on almost every incident?",
    },
    steps: [
      "A trigger starts the run",
      "Query useful context",
      "Branch on a condition",
      "Act and inspect the run",
    ],
    illustrative: false,
  },
  {
    id: "workflows-banking-runbook",
    chapter: "Workflows in banking",
    eyebrow: "WORKFLOWS · ILLUSTRATIVE BANKING RUNBOOK",
    title: "Workflows:",
    emphasis: "a repeatable response",
    lead: "Package the payment-service evidence, route the incident and prepare an approved response.",
    visual: 41,
    takeaway:
      "Reduce repeated handoffs while keeping response authority with the bank.",
    detail:
      "Restore the approved setting, then check fresh service latency, errors and backlog trends.",
    qualification:
      "Illustrative authored runbook. Ticketing, notifications and approval use configured integrations or the bank's existing process.",
    requirements:
      "The diagram is not a native approval screen or a prebuilt banking workflow. Automatic steps collect context and coordinate the incident. A customer-impacting response requires the bank's existing approval process or an explicitly configured approval integration, appropriate credentials and a separate authorized action. Recovery is checked; earlier pending transfers need separate reconciliation. No transaction handling, system change or notification is executed here.",
    sources: [S.workflowObservability, S.workflowHistory, S.workflowSetup],
    notes: {
      opening:
        "The same evidence that explained the backlog should arrive with the response request.",
      body: "A Workflow gathers the payment-service context, the relevant events and the owner. Configured incident and notification integrations carry the evidence to the responsible team. The bank’s existing approval process authorizes a permitted configuration response; the diagram does not invent a native approval screen. After the approved setting is restored, the owner checks fresh latency, errors and whether pending work is draining. This closes the operational loop without automating transaction handling. Settlement and any earlier pending transfers still require their own agreed checks.",
      transition:
        "A useful response also needs the history and operating controls to investigate recurrence.",
      seconds: 90,
      prompt:
        "Which preparation steps can be automated, and who authorizes a configuration response?",
    },
    steps: [
      "Collect the evidence",
      "Coordinate the incident",
      "Bank approval before response",
      "Verify and record the outcome",
    ],
    illustrative: true,
  },
  {
    id: "operating-model-choice",
    chapter: "Operate on your terms",
    eyebrow: "DIFFERENTIATOR · DEPLOYMENT AND DATA-LIFECYCLE CHOICE",
    title: "Your infrastructure.",
    emphasis: "Your operating model.",
    lead: "Run self-managed and keep the evidence needed to investigate recurring operational problems.",
    visual: 42,
    takeaway:
      "Choose the history you need, the controls you require and the operating tradeoffs you accept.",
    detail:
      "Storage tiers and lifecycle policies help match evidence age to its access needs.",
    qualification:
      "Self-managed deployment is supported. Tiering, snapshots, licenses and approved data flows need design and validation.",
    requirements:
      "Searchable history is governed by configured retention, storage tier, snapshot repository and subscription. It is not a promise to store everything indefinitely or achieve universal savings. Plan package, upgrade and support dependencies. AI-assisted features need an explicitly approved model path; on-premises storage does not establish local inference. No Saudi-hosting or compliance assurance is implied.",
    sources: [S.airGapped, S.retention, S.subscriptions],
    notes: {
      opening:
        "An incident can look new until the team searches the right history.",
      body: "The bank can run Elastic on its infrastructure and choose how evidence is retained and accessed. Storage tiers let teams balance the investigation window against storage, performance and operational effort. That is useful when the payment backlog resembles a previous release or configuration incident. Self-managed remains an operating responsibility: package access, upgrades, support and optional model connections need planned paths. The differentiator is control over the operating design and useful history, rather than a promise to store everything forever or achieve a universal saving.",
      transition:
        "The customer references show three concrete operational benefits of this approach.",
      seconds: 60,
      prompt:
        "What history must stay searchable, and what operating boundaries are fixed?",
    },
    steps: [
      "Choose the deployment",
      "Control access",
      "Design useful history",
      "Review every data flow",
    ],
    illustrative: false,
  },
  {
    id: "customer-emirates-nbd",
    chapter: "Customer evidence",
    eyebrow: "EMIRATES NBD · REGIONAL, ON-PREMISES CUSTOMER STORY",
    title: "Emirates NBD:",
    emphasis: "shared investigation",
    lead: "Centralized logs and APM helped teams locate application problems in minutes instead of days.",
    visual: 43,
    takeaway:
      "Replace the search through scattered logs with a shared application investigation.",
    detail:
      "The published account describes centralized on-premises log storage and application monitoring.",
    qualification:
      "Elastic-published customer account. On-premises logs + APM; not a Saudi-hosting or regulatory-approval claim.",
    requirements:
      "The source reports faster location and resolution of customer-facing issues, from days to minutes. This is an attributed customer account, not a measured guarantee or a forecast for this bank. It is evidence for the shared logs/APM approach, not proof that Streams or Workflows produced the reported result.",
    sources: [S.enbd],
    customerReported: true,
    notes: {
      opening:
        "Emirates NBD is the regional on-premises example for the investigation part of the story.",
      body: "The published account describes engineers moving from disparate log files to centralized evidence, with logs stored on premises and APM adding application context. It reports a shift from days to minutes to locate problems. That makes the story relevant to the bank’s operational needs and deployment preference: teams can investigate the same application issue together. Keep the attribution exact. This is historical evidence for centralized logs and APM, not proof that the modern Streams or Workflows features produced the result.",
      transition:
        "Oney and Discover reinforce earlier detection and useful investigation history.",
      seconds: 60,
      prompt:
        "Which of these banking examples most resembles your operational priorities?",
    },
    steps: [
      "Centralized logs",
      "On-premises evidence",
      "Application context",
      "Reported days to minutes",
    ],
    illustrative: false,
  },
  {
    id: "customer-oney-discover",
    chapter: "Customer evidence",
    eyebrow: "ONEY BANK + DISCOVER · OPERATIONAL CUSTOMER RESULTS",
    title: "Detect sooner.",
    emphasis: "Keep history useful.",
    lead: "Oney shows earlier API-incident detection. Discover makes historical evidence quicker to retrieve.",
    visual: 44,
    takeaway:
      "Improve the time to notice a problem and the ability to investigate what happened before.",
    detail:
      "Oney: API detection, up to 20 minutes to 1 minute. Discover: historical-data retrieval, 24+ hours to minutes.",
    qualification:
      "Reported examples, not forecasts. Discover uses ECE with AWS and S3; it is not an on-premises reference.",
    requirements:
      "Oney measures API-incident detection, not resolution or MTTR. Discover measures historical-data retrieval and separately reports 50% lower storage requirements, not total observability spend. Its account describes data streams, ILM and Watcher, not evidence that modern Streams or Workflows produced these outcomes. The two results have different scopes and are not a combined performance promise.",
    sources: [S.oney, S.discover],
    customerReported: true,
    notes: {
      opening:
        "These examples make two parts of operational readiness concrete.",
      body: "Oney reports API-incident detection moving from up to twenty minutes to one minute. Discover reports historical-data retrieval moving from twenty-four hours or more to minutes after changing its storage architecture. Its story uses Elastic Cloud Enterprise with AWS and S3; it is not an on-premises reference. Together they support two questions for a validation: can we notice the issue earlier, and can we search the evidence needed to understand recurrence? Neither result is a promise for this bank or proof that modern Streams or Workflows caused the historical outcome.",
      transition:
        "Close by proving the connected loop on one payment-processing service.",
      seconds: 60,
      prompt:
        "Is earlier detection or faster access to investigation history the stronger first priority?",
    },
    steps: [
      "Oney: API-incident detection",
      "Up to 20 minutes → 1",
      "Discover: historical retrieval",
      "24+ hours → minutes",
    ],
    illustrative: false,
  },
  {
    id: "why-elastic-validate-the-loop",
    chapter: "Why Elastic",
    eyebrow: "WHY ELASTIC · VALIDATE THE CONNECTED LOOP",
    title: "From the first alert",
    emphasis: "to a supported next move",
    lead: "Useful logs through Streams. A verified explanation. A repeatable response through Workflows.",
    visual: 45,
    takeaway: "Prove the connected loop on one payment-processing service.",
    detail:
      "Agree the evidence, owner, baseline and operational recovery criteria before the evaluation.",
    qualification:
      "Proposed validation. Scope, access, version, subscription, baseline and response authority must be agreed.",
    requirements:
      "The next step is an evaluation proposal, not a promise of a specific result or a request to connect production systems through this website. Choose permitted samples, responsible owners, an appropriate test environment and an explicit decision criterion. Keep the original sources and the bank's operating requirements visible throughout.",
    sources: [S.streams, S.apmOverview, S.workflows],
    notes: {
      opening:
        "The story began with an alert and a growing backlog. It ends with a supported next move.",
      body: "Choose one payment-processing service. Make selected logs useful through Streams, connect them to traces and infrastructure evidence, and test one RCA question. Then use a bounded Workflow to prepare and route the response, with the bank’s approval process intact. Agree the baseline, or record it as unknown, and check fresh operational recovery against explicit criteria. This is a concrete way to evaluate Elastic’s differentiators: less context rebuilt during the incident and a clearer path from evidence to an authorized action.",
      transition:
        "Agree the service, evidence and operational owner for the validation.",
      seconds: 30,
      prompt:
        "Which payment-processing service should we use to prove this loop?",
    },
    steps: [
      "An alert and growing backlog",
      "Useful, connected evidence",
      "Verified and approved response",
      "One payment-service validation",
    ],
    illustrative: false,
  },
];
