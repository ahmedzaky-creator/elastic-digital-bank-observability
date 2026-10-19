import type { Scene } from "./types";
import { S } from "./evidence";

export const scenes: Scene[] = [
  {
    id: "elastic-observability-digital-banking",
    chapter: "From data to action",
    eyebrow: "ELASTIC OBSERVABILITY · DIGITAL BANKING",
    title: "Elastic",
    emphasis: "Observability",
    lead: "Connect your data. Understand what matters. Make action repeatable.",
    visual: 30,
    takeaway: "From scattered telemetry to answers and action—on your terms.",
    detail:
      "Streams, connected investigation and Workflows, applied to digital banking.",
    qualification:
      "Original illustrations. Product availability depends on the deployed release and subscription.",
    requirements:
      "This is a customer-neutral presentation, not a live product environment. The banking examples are synthetic; no model, banking system or workflow is connected. The source reference informs the philosophy and visual flow, while all published narration and diagrams are original.",
    sources: [S.observability, S.streams, S.workflows],
    notes: {
      opening:
        "Elastic's Observability story starts with the data and finishes with a useful action.",
      body: "A bank already has plenty of dashboards. The harder problem is connecting the evidence behind them. We will show the Elastic approach: collect openly, make logs useful through Streams, investigate across signals on a searchable foundation, then make routine response repeatable with Workflows. We will keep the examples close to banking and use published customer results to ground the discussion. The objective is to explain why these pieces belong together, rather than take you through a long configuration tour.",
      transition:
        "Start with the environment that makes this approach necessary.",
      seconds: 30,
      prompt: "Which part of that loop is hardest for your teams today?",
    },
    steps: ["Collect", "Understand", "Act", "One connected loop"],
    illustrative: false,
  },
  {
    id: "connected-bank-connected-answers",
    chapter: "The observability challenge",
    eyebrow: "THE CHALLENGE · COMPLEXITY WITHOUT CONTEXT",
    title: "A connected bank needs",
    emphasis: "connected answers",
    lead: "One customer experience can cross mobile apps, APIs, payment services and legacy systems.",
    visual: 31,
    takeaway: "More telemetry only helps when teams can connect it.",
    detail:
      "Separate tools and separate views can turn an incident into a handoff exercise.",
    qualification:
      "Illustrative bank architecture. Actual systems and telemetry coverage must be established.",
    requirements:
      "The diagram illustrates common banking dependencies; it does not describe the prospect's architecture or claim that Elastic automatically observes external providers, mainframes or every application. Sources, access and instrumentation define coverage.",
    sources: [S.observability, S.fsi],
    notes: {
      opening:
        "Your customer sees one banking experience. Your engineers may see many separate systems.",
      body: "A slow payment could involve the app, identity checks, an API, a queue, a core platform or an external provider. Each team may be looking at a different tool and a different clock. Adding another chart does not necessarily connect those views. The business cost is the delay in answering simple questions: what is affected, where should we investigate, and who should act? This is why the Elastic story starts with shared evidence, rather than an isolated view of one component.",
      transition: "Elastic approaches that problem with three connected ideas.",
      seconds: 60,
      prompt:
        "Where do investigations most often cross a team or tool boundary?",
    },
    steps: [
      "One customer experience",
      "Many dependencies",
      "Separate evidence",
      "Context is the missing link",
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
      "Streams prepares the evidence. Investigation connects it. Workflows puts it to work.",
    detail:
      "A shared Elasticsearch foundation supports the loop from telemetry to operational outcome.",
    qualification:
      "Architecture overview. Collection, correlation and automation require configuration and appropriate access.",
    requirements:
      "These are supported capability families, not a claim of zero configuration or automatic coverage. Streams, APM, anomaly detection and Workflows have individual version, entitlement and operational requirements. The presentation does not promise autonomous root cause verification or remediation.",
    sources: [S.observability, S.streams, S.workflows],
    notes: {
      opening: "The differentiator is how the pieces work together.",
      body: "Open means meeting the bank's data where it is, including OpenTelemetry and supported existing collectors. Connected means the logs, performance trends and request paths can contribute to the same investigation. Actionable means an alert can start an authored sequence that gathers context and coordinates a response. Streams is the log-management part of that story; Workflows is the repeatable-action part. Elasticsearch supplies the shared search and analytics foundation. We will unpack those mechanisms, then apply them to banking rather than treating them as a list of product names.",
      transition:
        "First, why does the search foundation matter when something goes wrong?",
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
    lead: "Ask a new question across events, service behavior and request context—not just a prebuilt chart.",
    visual: 33,
    takeaway:
      "The next question does not have to be the one the dashboard designer anticipated.",
    detail:
      "Elasticsearch search and analytics help teams explore structured fields and unstructured event detail.",
    qualification:
      "Illustrative investigation. Queries use available, permitted data; correlation does not establish cause.",
    requirements:
      "The diagram shows related evidence retrieved and examined in one investigation, not a promise that one natural-language prompt or a single query automatically joins every telemetry source. Appropriate indexing, fields, time alignment and permissions are required. Supporting records remain inspectable.",
    sources: [S.observability, S.apmOverview],
    notes: {
      opening:
        "A dashboard is a useful starting point. An incident creates questions you did not prepare in advance.",
      body: "Suppose payment latency rises. The team needs more than the average: which service, channel, release and event pattern changed? Elasticsearch lets teams search and analyze the evidence behind the view, including structured fields and the original event detail. In this illustration a trend, a request path and relevant logs converge around the same question. That helps the team explore the unfamiliar rather than stop at a fixed set of charts. Related evidence narrows the investigation; the engineer still checks the explanation.",
      transition:
        "The foundation becomes useful when we can collect the right evidence without closing off our options.",
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
      "Start with useful data and supported collectors; expand as the bank sees value.",
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
        "Collecting logs is only the beginning. Streams helps make that data useful.",
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
    lead: "A guided place to process, inspect and manage the logs your teams depend on.",
    visual: 35,
    takeaway:
      "Spend less effort reconstructing log meaning before the investigation can begin.",
    detail:
      "Extract useful fields, preview the result, inspect data quality and manage the stream's lifecycle.",
    qualification:
      "Streams management: Stack 9.2+. AI assistance needs an approved model and entitlement; features vary by version.",
    requirements:
      "The example uses log processing and management. Wired partitioning and Streams-specific workflow actions have separate Preview status and are not required by this story. AI pipeline suggestions are optional and require a configured generative AI connector. Review parsing accuracy, data quality, privileges and retention before applying changes; no universal savings or automatic understanding of every format is promised.",
    sources: [S.streams, S.processing, S.streamLifecycle],
    notes: {
      opening:
        "Streams addresses the work between receiving logs and being able to investigate them.",
      body: "Banks have many log formats. If the service name, channel or outcome is buried in a string, teams first have to work out what the event means. Streams brings processing and log management into a guided experience: extract fields, inspect a preview and apply a reviewed change. AI can help suggest processing when an approved model is configured. The differentiator is making this preparation visible alongside the data that investigators use. It is a way to reduce repeated preparation work, not a claim that parsing or governance disappears.",
      transition: "Here is that idea applied to a small banking example.",
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
    emphasis: "from raw logs to answers",
    lead: "Make API and legacy payment events understandable through useful, consistent fields.",
    visual: 36,
    takeaway:
      "Ask about the payment service and outcome, rather than decode a different log format each time.",
    detail:
      "The processing preview checks fields such as service, channel and observed outcome before a change is applied.",
    qualification:
      "Synthetic log-processing illustration. Parsing is configured and reviewed; request status is not payment settlement.",
    requirements:
      "The authored example is not a real Kibana capture. It contains no customer, account, provider or transaction identifiers. Field extraction must be tested against representative permitted samples, with failed processing visible for review. It does not rely on wired-stream partitioning, arbitrary joins or a prebuilt banking data model. An observed request status does not prove final payment completion.",
    sources: [S.processing, S.streams],
    notes: {
      opening:
        "Imagine two systems describe the same kind of payment-service issue in different formats.",
      body: "One API emits a structured event; a legacy application writes a line of text. We prepare fields that help the investigator: service, channel and observed outcome. Streams processing and its preview let the owner check the extraction before saving the change. Once those fields are useful, the team can filter the evidence consistently and compare related behavior. This is the business consequence of better log preparation: less decoding before asking what is affected. The illustration stays at request evidence; settlement and reconciliation need their own agreed sources.",
      transition:
        "Prepared logs become more powerful when the surrounding signals are connected.",
      seconds: 90,
      prompt:
        "Which important banking source is hardest to make searchable today?",
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
    title: "One service.",
    emphasis: "Connected signals.",
    lead: "Logs, metrics, traces and user experience answer different parts of the same question.",
    visual: 37,
    takeaway:
      "Move from a symptom to its supporting evidence while keeping the service in context.",
    detail:
      "Metrics show change, traces locate delay, logs explain events, and experience data adds customer impact.",
    qualification:
      "Coverage depends on instrumentation and shared context. Anomaly detection requires a supported configuration and subscription.",
    requirements:
      "Not every telemetry source is automatically correlated. Service identity, timestamps and trace context must be configured appropriately. ML can surface unusual behavior relative to a learned baseline; it does not verify causality or replace service-level targets. Each experience or infrastructure view depends on available instrumentation.",
    sources: [S.observability, S.apmOverview, S.ml],
    notes: {
      opening:
        "The point is not collecting four signals for their own sake. Each explains something different.",
      body: "A metric shows that latency changed. A trace helps locate where a request waited. A log supplies event detail, and user-experience evidence helps establish who felt the problem. Elastic brings these investigation paths around shared service context. Anomaly detection can highlight unusual behavior, while service targets express what the bank considers acceptable. This is a stronger starting point for RCA than looking at each signal in isolation. The actual view remains bounded by instrumentation; a missing provider trace is a gap to acknowledge, not a healthy green box.",
      transition: "Now use that connected evidence to investigate a cause.",
      seconds: 75,
      prompt: "Which signal-to-signal handoff is hardest during an incident?",
    },
    steps: [
      "Metrics: what changed?",
      "Traces: where?",
      "Logs: what happened?",
      "Experience: who is affected?",
    ],
    illustrative: false,
  },
  {
    id: "rca-follow-the-evidence",
    chapter: "Root cause investigation",
    eyebrow: "RCA · CONTEXT BEFORE CONCLUSION",
    title: "RCA:",
    emphasis: "follow the evidence",
    lead: "Connect service degradation, request timing, log events and change context in one investigation.",
    visual: 38,
    takeaway:
      "Elastic narrows the search. The service owner verifies the explanation.",
    detail:
      "In this fictional example, connection waits and a configuration change lead to a candidate that the owner checks.",
    qualification:
      "Illustrative RCA. Correlation is a candidate, not a verified cause; external-provider internals remain unobserved.",
    requirements:
      "The fictional owner checks the actual setting, capacity, database health and alternative explanations before confirming an incorrectly reduced connection limit. This is not a real investigation or an autonomous diagnosis. Recovery requires approved action and separate checks; an API success response alone does not establish settled funds or correct balances.",
    sources: [S.apmOverview, S.serviceMap],
    notes: {
      opening:
        "The useful RCA story is a short chain of evidence that an engineer can check.",
      body: "A service slows down. The request trace locates a wait; related logs describe connection acquisition; the change record points to a configuration adjustment. That is a candidate explanation, not a conclusion. The service owner checks the setting and competing possibilities before confirming the fictional finding. Elastic's contribution is connecting the relevant evidence and reducing blind handoffs. It does not create visibility inside an uninstrumented payment provider. This distinction makes the demonstration credible: the team can explain both what it knows and what still needs checking.",
      transition:
        "The same approach can support several high-value banking questions.",
      seconds: 90,
      prompt:
        "What evidence does your incident owner need before accepting an RCA?",
    },
    steps: [
      "See the degradation",
      "Locate the wait",
      "Inspect related evidence",
      "Owner verifies the cause",
    ],
    illustrative: true,
  },
  {
    id: "banking-use-cases",
    chapter: "FSI applications",
    eyebrow: "FSI · CONNECT THE PLATFORM TO BANKING OUTCOMES",
    title: "Built for the",
    emphasis: "banking questions",
    lead: "Apply the same evidence platform to payments, account access and channel reliability.",
    visual: 39,
    takeaway:
      "Prioritize the banking outcome, then connect the technical evidence that explains it.",
    detail:
      "Track observed exceptions, journey errors and service delay using explicitly defined indicators.",
    qualification:
      "Proposed use cases and indicators, not measured prospect outcomes. Payment acceptance and settlement are distinct.",
    requirements:
      "The bank defines event eligibility, completion, target and review window. Login/onboarding evidence must respect access and data minimization requirements. Card and payment-provider coverage depends on available integrations and instrumentation. These use cases do not claim reduced fraud, revenue uplift or regulatory compliance.",
    sources: [S.fsi, S.enbd, S.slo],
    notes: {
      opening:
        "The banking value is concrete even when the platform underneath is shared.",
      body: "For payments, the question is which requests are delayed or exceptional and what downstream evidence confirms the outcome. For login and onboarding, it is where customers encounter errors or friction. For cards and digital channels, it is whether service behavior explains a customer-facing problem. Streams helps prepare the evidence; connected investigation helps explain it. The bank chooses the indicators and their meaning. We should not turn an accepted request into a claim of settlement, or turn an infrastructure alert into a measured customer impact without supporting data.",
      transition:
        "Once the evidence is useful, the next differentiator is putting it to work.",
      seconds: 75,
      prompt:
        "Which of these use cases would have the clearest operational owner?",
    },
    steps: [
      "Payment exceptions",
      "Login and onboarding friction",
      "Card and channel reliability",
      "Shared evidence, distinct outcomes",
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
      "Automate the repeatable investigation work where the evidence already lives.",
    detail:
      "Manual, scheduled or alert triggers pass context through steps; execution history makes each run inspectable.",
    qualification:
      "Workflows: Stack 9.4+ GA, Enterprise. Enable the feature; permissions, actions and external integrations must be configured.",
    requirements:
      "Core Workflows uses versionable definitions and configured actions. Native Elasticsearch queries differ from external ticketing, notification or HTTP integrations, which need their own credentials, network path and authorization. Steps and integrations can have separate maturity. This example does not use Preview Streams-specific workflow steps or execute a customer-impacting action.",
    sources: [S.workflows, S.workflowSetup, S.workflowHistory],
    notes: {
      opening:
        "A finding is valuable. A repeatable way to use it is the next step.",
      body: "Workflows lets a team define what should happen when an alert arrives, on a schedule or when a person starts a run. The sequence can query Elastic for context, test a condition, and call configured actions. Think of it as a reusable operational recipe, with execution history showing the steps and outputs. This connects the evidence platform to everyday work instead of asking an operator to copy the same information between tools. The recipe and its permissions are designed by the team; nothing in this presentation runs against a live system.",
      transition:
        "For a bank, start with low-risk coordination before considering a controlled response.",
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
    lead: "Collect the evidence, route the incident and notify the owner—with the bank's approval process intact.",
    visual: 41,
    takeaway:
      "Automate preparation and coordination; authorize operational changes through the agreed process.",
    detail:
      "A configured incident integration carries context forward. Any response and recovery checks stay explicit.",
    qualification:
      "Illustrative authored runbook. Ticketing, notifications and approval use configured integrations or the bank's existing process.",
    requirements:
      "The diagram is not a native approval screen or a prebuilt banking workflow. Automatic steps collect context and coordinate the incident. A customer-impacting response requires the bank's existing approval process or an explicitly configured approval integration, appropriate credentials and a separate authorized action. Recovery is checked; earlier pending transfers need separate reconciliation. No transaction handling, system change or notification is executed here.",
    sources: [S.workflowObservability, S.workflowHistory, S.workflowSetup],
    notes: {
      opening:
        "A useful first banking runbook prepares the response rather than jumping straight to a system change.",
      body: "An alert starts a context query, gathers the relevant evidence and identifies the service owner. A configured ticketing integration creates or updates the incident, and a notification reaches the responsible team. If a system response is proposed, the bank's approval process comes before execution. The result then needs a recovery check. Workflows makes the repeatable preparation and coordination explicit and inspectable; it does not decide the bank's response authority. Start with that bounded runbook and prove its usefulness before extending the automation.",
      transition:
        "This loop also needs to fit the bank's infrastructure and operating controls.",
      seconds: 90,
      prompt:
        "Which steps can run automatically, and which require an authorized person?",
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
    lead: "Run self-managed, keep useful history searchable, and choose access and retention deliberately.",
    visual: 42,
    takeaway:
      "Balance investigation depth, operating effort and retention cost within the bank's requirements.",
    detail:
      "Storage tiers and lifecycle policies help match evidence age to its access needs.",
    qualification:
      "Self-managed deployment is supported. Tiering, snapshots, licenses and approved data flows need design and validation.",
    requirements:
      "Searchable history is governed by configured retention, storage tier, snapshot repository and subscription. It is not a promise to store everything indefinitely or achieve universal savings. Plan package, upgrade and support dependencies. AI-assisted features need an explicitly approved model path; on-premises storage does not establish local inference. No Saudi-hosting or compliance assurance is implied.",
    sources: [S.airGapped, S.retention, S.subscriptions],
    notes: {
      opening:
        "The bank should be able to choose an operating model that fits its requirements.",
      body: "Elastic can run on the bank's infrastructure. Retention and data tiers let the team decide which evidence needs fast access and which older evidence can use a different storage approach. That matters when an investigation needs to look beyond the immediate alert window. The tradeoff includes storage, search performance, recovery, licensing and operational effort. Self-managed does not mean dependency-free: package access, upgrades, support and any optional model connection need a planned path. The discussion is about control and design choices, not a blanket promise of compliance or lower cost.",
      transition:
        "A regional customer provides a concrete example of the shared-evidence approach on premises.",
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
    lead: "Centralized logs and APM support a reported move from days to minutes to locate problems.",
    visual: 43,
    takeaway:
      "Shared evidence helps teams investigate the customer-facing problem together.",
    detail:
      "The published story covers online banking, card transactions and ATM experience, with logs stored on premises.",
    qualification:
      "Elastic-published customer account. On-premises logs + APM; not a Saudi-hosting or regulatory-approval claim.",
    requirements:
      "The source reports faster location and resolution of customer-facing issues, from days to minutes. This is an attributed customer account, not a measured guarantee or a forecast for this bank. It is evidence for the shared logs/APM approach, not proof that Streams or Workflows produced the reported result.",
    sources: [S.enbd],
    customerReported: true,
    notes: {
      opening:
        "Emirates NBD is the clearest regional example for this conversation.",
      body: "The published account describes logs stored on premises and APM supporting a common investigation view. It connects that view to online banking issues, card transaction problems and ATM experience. The reported shift is from days to minutes to locate problems, with teams spending less time searching separate files. That makes it relevant to both the bank's operational priorities and its deployment preference. Keep the attribution exact: this is a customer story about centralized logs and APM, not a claim that Streams or Workflows delivered the historical result.",
      transition:
        "Two other customers illustrate different parts of the incident clock.",
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
    id: "customer-oney-wepay",
    chapter: "Customer evidence",
    eyebrow: "ONEY BANK + WEPAY · TWO PRECISE CUSTOMER RESULTS",
    title: "Two customers.",
    emphasis: "Two different clocks.",
    lead: "Oney shows earlier detection. WePay shows faster identification of customer impact.",
    visual: 44,
    takeaway:
      "Measure detection and customer-impact identification separately from time to resolve.",
    detail:
      "Oney: API incidents, up to 20 minutes to 1 minute. WePay: 90% less time to identify customer impact during incidents.",
    qualification:
      "Customer-reported examples, not forecasts. WePay: Google Cloud; its APM adoption was a future plan.",
    requirements:
      "Oney's measure is API-incident detection, not resolution or MTTR; its hosting is not established as on premises. WePay's 90% measure is impact identification, not downtime, incident count or MTTR, and must not be attributed to APM. Neither story establishes that Streams or Workflows caused the result. The two measures are not combined into one improvement claim.",
    sources: [S.oney, S.wepay],
    customerReported: true,
    notes: {
      opening:
        "These two results are useful because they measure different operational questions.",
      body: "Oney reports API incident detection moving from up to twenty minutes to one minute after consolidating monitoring. WePay reports ninety percent less time to identify customer impact during incidents using consolidated logging and telemetry. Its story is in Google Cloud, and APM is described as a future plan. Those details matter: neither number is an MTTR claim or a forecast for your bank. Together they show why we should agree which clock a validation will measure instead of presenting a broad, undefined promise to make incidents faster.",
      transition:
        "Close by joining the differentiators into one practical validation.",
      seconds: 60,
      prompt:
        "Would earlier detection, faster impact identification or faster investigation matter most first?",
    },
    steps: [
      "Oney: detection",
      "Up to 20 minutes → 1",
      "WePay: impact identification",
      "90% less time, distinct measure",
    ],
    illustrative: false,
  },
  {
    id: "why-elastic-validate-the-loop",
    chapter: "Why Elastic",
    eyebrow: "WHY ELASTIC · VALIDATE THE CONNECTED LOOP",
    title: "Why Elastic?",
    emphasis: "Connect the whole loop.",
    lead: "Streams makes logs useful. Connected investigation explains the issue. Workflows coordinates action.",
    visual: 45,
    takeaway:
      "Prove that loop on one banking service, with agreed evidence, owners and success criteria.",
    detail:
      "Choose the log sources, an RCA question and one bounded runbook; measure the result against a known baseline or record it as unknown.",
    qualification:
      "Proposed validation. Scope, access, version, subscription, baseline and response authority must be agreed.",
    requirements:
      "The next step is an evaluation proposal, not a promise of a specific result or a request to connect production systems through this website. Choose permitted samples, responsible owners, an appropriate test environment and an explicit decision criterion. Keep the original sources and the bank's operating requirements visible throughout.",
    sources: [S.streams, S.apmOverview, S.workflows],
    notes: {
      opening:
        "The Elastic difference is the connected loop from data preparation to investigation to action.",
      body: "Choose one important service. Use Streams to make selected logs useful, connect them to the evidence needed for one RCA question, then author a bounded Workflow that collects context and coordinates the response. Keep the bank's deployment and approval requirements explicit. Agree the baseline, or mark it unknown, and decide what evidence will justify the next step. That gives the team a practical way to evaluate the differentiators we have shown rather than leave with another feature checklist.",
      transition:
        "Agree the service, the owners and the evidence for the next conversation.",
      seconds: 30,
      prompt: "Which service would be the strongest place to prove this loop?",
    },
    steps: [
      "Streams",
      "Connected RCA",
      "Workflows",
      "One agreed banking validation",
    ],
    illustrative: false,
  },
];
