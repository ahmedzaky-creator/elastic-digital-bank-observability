import type { Source } from "./types";

// Public references only. The authored examples never use customer production data.
export const S = {
  observability: {
    id: "observability",
    label: "Elastic Observability overview",
    url: "https://www.elastic.co/docs/solutions/observability",
    note: "Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.",
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
