import type { Source } from "./types";

// Public references only. The authored examples never use customer production data.
export const S = {
  observability: {
    id: "observability",
    label: "Elastic Observability overview",
    url: "https://www.elastic.co/docs/solutions/observability",
    note: "Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.",
  },
  streams: {
    id: "streams",
    label: "Elastic Streams overview",
    url: "https://www.elastic.co/docs/solutions/observability/streams/streams",
    note: "Streams management is documented GA from Stack 9.2. Wired ingestion and individual AI capabilities have separate maturity and entitlement requirements. An approved model connection is needed for AI assistance, not basic manual management. The illustration uses synthetic data and promises no measured savings.",
  },
  processing: {
    id: "streams-processing",
    label: "Process documents with Streams",
    url: "https://www.elastic.co/docs/solutions/observability/streams/parse-and-process",
    note: "Users review suggested processors and preview field extraction before saving. AI suggestions send sample logs to the configured model and can incur costs; manual processors are also supported. Saved changes affect future incoming data. Banking fields are synthetic; automatic understanding of every source is not promised.",
  },
  streamLifecycle: {
    id: "streams-lifecycle",
    label: "Streams data lifecycle",
    url: "https://www.elastic.co/docs/solutions/observability/streams/configure-retention",
    note: "Streams exposes retention and lifecycle choices. Available options depend on the release, stream type, privileges and subscription. Retention periods and storage phases are choices made by the bank; they do not automatically satisfy a regulatory requirement.",
  },
  workflows: {
    id: "workflows",
    label: "Elastic Workflows overview",
    url: "https://www.elastic.co/docs/explore-analyze/workflows",
    note: "Core Workflows is GA from Stack 9.4, with Enterprise entitlement on self-managed and Elastic Cloud Hosted. Individual steps and AI authoring have separate maturity and connection requirements. The banking runbook illustrates configured queries, conditions and actions; it is not an actual execution or customer result.",
  },
  workflowSetup: {
    id: "workflows-setup",
    label: "Set up Elastic Workflows",
    url: "https://www.elastic.co/docs/explore-analyze/workflows/get-started/setup",
    note: "Verify the intended version, subscription, feature availability and role privileges before enabling Workflows. Native Elastic queries and configured external actions have different access and connection requirements. A self-managed deployment does not establish that external actions or AI inference remain inside the bank.",
  },
  workflowHistory: {
    id: "workflows-history",
    label: "Monitor workflow execution",
    url: "https://www.elastic.co/docs/explore-analyze/workflows/authoring-techniques/monitor-workflows",
    note: "Execution views expose workflow and step status, outputs and errors for operational review. The presentation's example history is illustrative. Execution history alone is not an immutable audit archive or proof of regulatory compliance.",
  },
  workflowObservability: {
    id: "workflows-observability",
    label: "Observability workflow patterns",
    url: "https://www.elastic.co/docs/explore-analyze/workflows/use-cases/observability",
    note: "Official patterns include anomaly-alert response, related log queries, service enrichment, cases, notifications and cross-signal queries with conditional actions. These support the proposed runbook; external integrations must be configured and the example triggers no customer-impacting change.",
  },
  workflowRelease: {
    id: "workflows-ga-94",
    label: "Elastic Workflows 9.4 general availability",
    url: "https://www.elastic.co/security-labs/blog/elastic-workflows-ga-9-4",
    note: "The official 9.4 release account states that core Workflows is GA across Security, Observability and Search, with Enterprise availability on Elastic Cloud Hosted and self-managed deployments. It distinguishes preview natural-language authoring. Usage-based execution pricing and promotions can change; no free or unlimited execution claim is made.",
  },
  workflowApproval: {
    id: "workflows-human-input",
    label: "Workflows human review step",
    url: "https://www.elastic.co/docs/explore-analyze/workflows/steps/wait-for-input",
    note: "The waitForInput step is documented for Stack 9.4+ and pauses execution for structured human input. External delivery and dedicated approval steps have separate preview/version conditions. The presentation uses the bank's configured approval process and shows no automatic customer-impacting action.",
  },
  otel: {
    id: "opentelemetry",
    label: "OpenTelemetry with Elastic APM",
    url: "https://www.elastic.co/docs/solutions/observability/apm/opentelemetry",
    note: "Elastic accepts OpenTelemetry instrumentation alongside supported Elastic collection options. Language, signal, collector and deployment compatibility must be checked for the chosen release. Open instrumentation preserves collection choices; it does not mean every source is already instrumented or every feature is identical across deployment types.",
  },
  retention: {
    id: "data-tiers",
    label: "Elasticsearch data tiers",
    url: "https://www.elastic.co/docs/manage-data/lifecycle/data-tiers",
    note: "Hot, warm, cold and frozen tiers support different access, performance and storage needs. Searchable snapshots require suitable object storage/repositories and entitlement. Longer retained history supports later investigation, subject to the bank's retention, access and cost decisions; no storage-saving percentage is promised.",
  },
  management: {
    id: "self-managed",
    label: "Self-managed Elasticsearch",
    url: "https://www.elastic.co/docs/deploy-manage/deploy/self-managed",
    note: "Self-managed deployment gives the organization responsibility for installation, configuration, capacity, security, availability and upgrades. It supports operating-model choice; it does not establish Saudi hosting, regulatory approval, feature parity or local AI inference.",
  },
  ml: {
    id: "machine-learning-anomalies",
    label: "Machine learning anomaly detection",
    url: "https://www.elastic.co/docs/explore-analyze/machine-learning/anomaly-detection",
    note: "Machine learning can identify anomalous patterns in time-series telemetry. Appropriate data, jobs, privileges, capacity and entitlement are required. An anomaly is a signal for investigation and is not proof of the cause, prevention of every incident or a generative-AI diagnosis.",
  },
  apmOverview: {
    id: "apm-overview",
    label: "Application and service monitoring",
    url: "https://www.elastic.co/docs/solutions/observability/applications",
    note: "APM and tracing help teams examine application performance, errors and dependencies. End-to-end visibility depends on instrumentation and propagated context, including across external providers. A candidate cause must be verified, and API success is not proof of payment settlement.",
  },
  fsi: {
    id: "financial-services",
    label: "Elastic for financial services",
    url: "https://www.elastic.co/industries/financial-services",
    note: "Public industry context for application performance, payment visibility, customer experience and operating-model choices. The presentation's banking use cases are proposed applications, not claims of the prospect's current implementation, quantified results or regulatory compliance.",
  },
  serviceMap: {
    id: "service-map",
    label: "Elastic APM service maps",
    url: "https://www.elastic.co/docs/solutions/observability/apm/service-map",
    note: "Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.",
  },
  slo: {
    id: "slos",
    label: "Elastic service-level objectives",
    url: "https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos",
    note: "SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.",
  },
  airGapped: {
    id: "restricted-network",
    label: "Elastic restricted-network collection",
    url: "https://www.elastic.co/docs/reference/fleet/air-gapped",
    note: "Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.",
  },
  subscriptions: {
    id: "subscriptions",
    label: "Elastic subscriptions",
    url: "https://www.elastic.co/subscriptions",
    note: "Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.",
  },
  oney: {
    id: "oney",
    label: "Oney Bank customer story",
    url: "https://www.elastic.co/customers/oney-bank",
    note: "Elastic-published customer account: API incident detection changed from up to 20 minutes to one minute. This measures detection, not resolution or MTTR. The source does not establish an on-premises deployment. Reported outcome, not a prospect forecast.",
  },
  wepay: {
    id: "wepay",
    label: "WePay customer story",
    url: "https://www.elastic.co/customers/wepay/",
    note: "Elastic-published customer account: 90% less time to identify customer impact during incidents, with consolidated logging/telemetry in a Google Cloud context. APM adoption was a future plan in this story; do not attribute the result to APM or redefine it as downtime, failures or MTTR.",
  },
  enbd: {
    id: "emirates-nbd",
    label: "Emirates NBD customer story",
    url: "https://www.elastic.co/customers/emirates-nbd/",
    note: "Elastic-published customer account: centralized logs stored on premises, plus APM, with locating customer-facing problems and issue resolution improving from days to minutes. The source does not establish Saudi hosting or regulatory approval; this is a reported outcome, not a universal benchmark.",
  },
} satisfies Record<string, Source>;

export const evidence: Source[] = Object.values(S);
