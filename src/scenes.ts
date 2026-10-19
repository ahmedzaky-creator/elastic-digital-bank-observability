import type { Scene } from "./types";
import { S } from "./evidence";

export const scenes: Scene[] = [
  {
    id: "reliable-digital-banking",
    chapter: "The customer promise",
    eyebrow: "Reliable digital banking",
    title: "Reliable digital",
    emphasis: "banking",
    lead: "How Elastic Observability connects customer experience with incident investigation.",
    visual: 0,
    takeaway: "Start with the journey the customer needs to complete.",
    detail:
      "Connect a visible customer outcome to the operating evidence that can explain it.",
    qualification:
      "Customer-neutral presentation. The transfer incident is fictional; no live bank data or transactions.",
    requirements:
      "The transfer journey and all incident observations are synthetic teaching examples. Product capabilities require appropriate collection, instrumentation, configuration, access and entitlement. Public customer results later in the presentation are attributed examples, not forecasts for this bank.",
    sources: [S.observability],
    steps: [
      "Customer journey",
      "Service path",
      "Shared evidence",
      "Reliable experience",
    ],
    illustrative: true,
    notes: {
      opening:
        "A reliable banking experience begins with a customer being able to finish what they came to do.",
      body: "Today we will follow one transfer journey from a pending status to a checked recovery. The example is fictional, but the questions are practical: which journey is affected, where should an engineer look, and what evidence makes the next decision credible? Elastic Observability connects permitted operational signals so teams can investigate with shared context. It does not replace the service owner or the bank’s operating controls. We will finish by choosing one useful validation, with the actual target, data permissions and success measures agreed together.",
      transition: "First, consider what the customer is expecting.",
      seconds: 30,
      prompt: "Which customer journey most needs a dependable experience?",
    },
  },
  {
    id: "customer-promise",
    chapter: "The customer promise",
    eyebrow: "Begin with the outcome",
    title: "The customer",
    emphasis: "promise",
    lead: "Access the account. Make the payment. Know what happened.",
    visual: 1,
    takeaway:
      "A healthy service matters when it supports a clear customer outcome.",
    detail:
      "Journey definitions connect technical signals to an experience customers and service owners can recognize.",
    qualification:
      "Illustrative outcomes. The bank defines success; an API response alone does not prove payment completion.",
    requirements:
      "These are discussion outcomes, not claims about the bank’s current services. The journey needs an agreed start, an observable end and an owner. Distinguish request acceptance, downstream completion, settlement and correct balances. Availability of each signal depends on permitted collection and instrumentation.",
    sources: [S.observability, S.slo],
    steps: ["Access", "Act", "Confirm", "Trust"],
    illustrative: true,
    notes: {
      opening:
        "The customer sees one journey, even when many services support it.",
      body: "Account access and payments have different technical paths, but the expectation is simple: the action should work and its status should be clear. A server can be healthy while a customer is still waiting. That is why we begin with a journey outcome rather than a component chart. For a transfer, accepting the request is only one stage. The bank must define which later signal represents completion and where settlement or balance checks belong. This definition gives business and technology teams a shared starting point for investigation.",
      transition: "Choose one journey whose outcome and owner are clear.",
      seconds: 45,
      prompt:
        "What tells your team that the customer has actually completed this journey?",
    },
  },
  {
    id: "journeys-that-matter",
    chapter: "The customer promise",
    eyebrow: "Select a meaningful journey",
    title: "The journeys",
    emphasis: "that matter",
    lead: "Account opening, login, payments and cards each need an agreed view of success.",
    visual: 3,
    takeaway: "Begin with one journey whose outcome and owner are clear.",
    detail:
      "We will follow a transfer so that impact, investigation and recovery stay connected.",
    qualification:
      "Illustrative journey map. Coverage depends on permitted evidence and instrumentation.",
    requirements:
      "The four journeys are discussion examples, not an inventory of this bank’s systems. Select one journey with an owner, a defined outcome and accessible evidence. Technical failures, valid business decisions and customer abandonment require different interpretations. Do not infer complete coverage from a service map.",
    sources: [S.observability, S.serviceMap],
    steps: ["Account opening", "Login", "Payments", "Select transfer"],
    illustrative: true,
    notes: {
      opening:
        "A useful starting point is one journey the business already cares about.",
      body: "Account opening, login, payments and card use all matter, but they should not be collapsed into one health indicator. Each has a different start, outcome, dependency path and operating owner. We will select transfers for this example and carry that same journey through the investigation. This keeps the discussion concrete without assuming an architecture. In a real validation, the team would also agree what remains outside the view, which events can be collected, and how technical failure differs from a valid business decision or a customer choosing to stop.",
      transition:
        "Now imagine a transfer that has not reached a clear outcome.",
      seconds: 45,
      prompt:
        "Which journey has both a clear business owner and useful evidence today?",
    },
  },
  {
    id: "affected-journey",
    chapter: "A shared investigation",
    eyebrow: "Illustrative transfer incident · Define the impact",
    title: "Which journey",
    emphasis: "is affected?",
    lead: "A subset of mobile transfers is still pending. Compare channels and request states to establish impact.",
    visual: 5,
    takeaway:
      "Customer impact needs journey evidence as well as service health.",
    detail:
      "Pending is the observed symptom. Mobile includes pending requests; the web comparison shows accepted responses.",
    qualification:
      "Synthetic incident. Pending does not mean failed; accepted does not prove downstream completion or settlement.",
    requirements:
      "The transfer incident is synthetic, with no actual customer, account, amount, transaction or provider. Pending is an observed request state, not a verified cause or proof of failure. Do not advise a retry without appropriate status checks. This channel comparison uses labels rather than production counts or a representative cohort. Web acceptance does not establish downstream completion or settlement. Agree eligible requests and the downstream outcome before calculating a completion rate.",
    sources: [S.observability, S.wepay],
    steps: [
      "Shared window",
      "Compare channels",
      "Inspect states",
      "Bound the impact",
    ],
    illustrative: true,
    notes: {
      opening:
        "Some mobile transfer requests are still pending; first, establish the affected journey.",
      body: "The customer has submitted a transfer and cannot yet see a clear completion state. We have a symptom, not a root cause. Pending should not be treated as failed or used to blame a provider. Compare mobile and web over the same incident window: mobile includes pending requests, while the web comparison shows accepted responses. Acceptance does not prove downstream completion or settlement. Check cohorts, missing evidence and the agreed completion signal. All observations are fictional. This shared impact description gives support and engineering a bounded question to investigate.",
      transition:
        "Different teams can now investigate the same bounded incident.",
      seconds: 90,
      prompt:
        "Which channel and state comparisons would make an incident update useful?",
    },
  },
  {
    id: "evidence-across-teams",
    chapter: "A shared investigation",
    eyebrow: "Elastic Observability · Shared evidence",
    title: "Evidence across",
    emphasis: "teams",
    lead: "Elastic Observability connects permitted evidence in a shared, searchable investigation view.",
    visual: 6,
    takeaway:
      "Give support, operations and engineering context they can search together.",
    detail:
      "Connect a journey, incident window and approved request context across logs, metrics and traces.",
    qualification:
      "Coverage depends on collection, instrumentation, configuration and permissions; entitlement also applies.",
    requirements:
      "Elasticsearch provides the searchable foundation; Elastic Observability connects logs, metrics, traces and experience evidence. Logs describe events, metrics show changing conditions, and traces follow instrumented requests. Collection, useful fields, time alignment, trace context, retention and role-based access determine the available view. Missing evidence is not proof that a dependency is healthy. Confirm the actual deployment, release and subscription; no complete-estate coverage or automatic cause verification is implied.",
    sources: [S.observability, S.serviceMap, S.subscriptions],
    steps: [
      "Support context",
      "Operations evidence",
      "Engineering detail",
      "Shared incident",
    ],
    illustrative: true,
    notes: {
      opening:
        "Elastic Observability gives teams a shared place to search the evidence behind a journey.",
      body: "Elasticsearch provides the searchable foundation. Logs describe events, metrics show changing conditions, and traces follow an instrumented request. These views help support, operations and engineers investigate the same journey, time window and approved request context. An application event may show a connection wait; a trend shows when it increased; a trace places it in the request path. Collection, instrumentation, configuration, permissions and entitlement define what is visible. Gaps do not prove a dependency is healthy. The owner still checks the explanation, while each team sees only the evidence its role allows.",
      transition:
        "Follow the transfer through the part of the request path that is instrumented.",
      seconds: 75,
      prompt: "What information most often disappears between teams today?",
    },
  },
  {
    id: "transfer-path",
    chapter: "A shared investigation",
    eyebrow: "Follow the observed request",
    title: "The path of a",
    emphasis: "transfer request",
    lead: "Follow the request through the gateway into the payment service.",
    visual: 9,
    takeaway: "A request path helps locate delay within the observed boundary.",
    detail:
      "The external provider remains outside the observed boundary unless its instrumentation is established.",
    qualification:
      "Synthetic trace. Instrumentation and trace context define coverage; provider internals are unobserved.",
    requirements:
      "The diagram illustrates a logical request path, not this bank’s architecture. Service relationships depend on instrumentation and propagated context. A slow observed span identifies where time was spent within the available view; it does not independently establish the cause. External-provider internals stay unobserved, and downstream completion needs its own permitted signal.",
    sources: [S.serviceMap, S.observability],
    steps: [
      "Mobile request",
      "Gateway",
      "Payment service",
      "Observe the boundary",
    ],
    illustrative: true,
    notes: {
      opening:
        "We can now follow an observed request toward the place it waits.",
      body: "The fictional path runs from a mobile app through a gateway into a payment service and then toward an external provider. The payment service is instrumented, so the team can inspect its request timing and relevant events. The provider’s internal operations remain gray because we have not established visibility there. A service map is a view of observed relationships, not proof of complete estate coverage. This narrows where to investigate, but a slow segment still needs supporting evidence. In particular, a delay inside a service should not become an untested accusation about an outside provider.",
      transition: "Bring together the evidence around the waiting time.",
      seconds: 90,
      prompt: "Where does your visibility stop along a critical payment path?",
    },
  },
  {
    id: "delay-evidence",
    chapter: "A shared investigation",
    eyebrow: "From observation to candidate",
    title: "Evidence behind",
    emphasis: "the delay",
    lead: "Request timing, connection-wait events and a configuration record point to a candidate explanation.",
    visual: 10,
    takeaway:
      "A plausible explanation is a question to check, not a verified cause.",
    detail:
      "The timing aligns with an approved change record. The owner still needs to inspect the setting and alternatives.",
    qualification:
      "Synthetic evidence. Correlation and a slow trace alone do not establish causality.",
    requirements:
      "In this fictional incident, the observed wait is connection acquisition within the payment service. A configuration-change record is relevant context, not an automatic root-cause finding. Confirm time alignment, whether the change reached the affected instances, the actual connection limit, and competing explanations such as demand, slow downstream responses or resource pressure.",
    sources: [S.observability, S.serviceMap],
    steps: [
      "Request waiting",
      "Connection events",
      "Change context",
      "Candidate explanation",
    ],
    illustrative: true,
    notes: {
      opening:
        "The evidence suggests a connection-limit question that the owner can test.",
      body: "Request timing places the wait in the payment service. Application events identify connection acquisition, and an approved configuration-change record appears in the relevant window. Together, these make a reduced connection limit a plausible candidate. They do not prove it caused the incident. The owner should check the actual setting on the affected service and compare demand, downstream response conditions and resource pressure. This distinction keeps the investigation honest: an observation tells us what happened, correlated context suggests a question, and a verified finding requires the responsible owner to check that question.",
      transition:
        "The service owner now checks the candidate against the alternatives.",
      seconds: 90,
      prompt: "What evidence would make this candidate more or less credible?",
    },
  },
  {
    id: "owner-verifies-cause",
    chapter: "A shared investigation",
    eyebrow: "Verification belongs to the owner",
    title: "The owner",
    emphasis: "verifies the cause",
    lead: "The owner checks the setting and competing explanations before confirming the finding.",
    visual: 11,
    takeaway: "The fictional finding: an incorrectly reduced connection limit.",
    detail:
      "The owner confirms the deployed setting and checks demand, downstream timing and resource pressure.",
    qualification:
      "Synthetic owner-verified finding. A chart or correlation alone does not prove a cause.",
    requirements:
      "This is a prepared fictional finding, not a live diagnosis. The service owner confirms the effective reduced limit on the affected service and checks whether demand, downstream delay or resource pressure better explains the wait. Only then is the candidate treated as verified in this example. Restoration remains subject to the bank’s normal approval process; nothing is executed by the presentation.",
    sources: [S.observability, S.serviceMap],
    steps: [
      "Inspect setting",
      "Check alternatives",
      "Confirm finding",
      "Approve next action",
    ],
    illustrative: true,
    notes: {
      opening: "A candidate becomes a finding only after the owner checks it.",
      body: "The owner inspects the effective configuration on the affected payment service and confirms that the connection limit was incorrectly reduced. They also examine demand, downstream timing and resource pressure so the explanation does not rest only on a matching timestamp. In this fictional incident, those checks support the configuration finding. The next action is then proposed through the bank’s normal change process. Elastic supplies evidence for that decision; the owner remains responsible for verifying the explanation and approving the response. The presentation performs no configuration change or other action.",
      transition: "A checked explanation now needs a checked recovery.",
      seconds: 90,
      prompt: "Who should verify this finding and approve the restoration?",
    },
  },
  {
    id: "customer-confirmed-recovery",
    chapter: "A shared investigation",
    eyebrow: "Check the outcome after restoration",
    title: "Recovery the customer",
    emphasis: "can confirm",
    lead: "Restore the approved setting, check fresh requests and verify the agreed downstream completion signal.",
    visual: 12,
    takeaway:
      "Fresh recovery checks and earlier pending transfers are separate work.",
    detail:
      "The owner checks new request behavior. Operations separately reviews and reconciles earlier pending transfers.",
    qualification:
      "Synthetic recovery. API success alone does not establish settlement or correct balances; reconcile earlier pending transfers.",
    requirements:
      "Restoration is an owner-approved change, not automated remediation. Check fresh requests against the agreed completion signal and watch for recurrence. Do not infer settlement or correct balances from an API response. Earlier pending transfers require a separate status and reconciliation process, including any necessary exceptions and customer communication under the bank’s procedures.",
    sources: [S.observability, S.slo],
    steps: [
      "Approved restore",
      "Fresh requests",
      "Downstream check",
      "Reconcile earlier pending",
    ],
    illustrative: true,
    notes: {
      opening: "Recovery means checking the journey after the approved change.",
      body: "The owner restores the approved connection setting through the normal change process. The team then checks fresh requests and the agreed downstream completion signal, while watching for the waiting pattern to return. A successful API response is useful but does not establish settlement or correct balances. Earlier pending transfers form a separate queue of status and reconciliation work; they do not disappear because new requests look healthy. This separation gives the incident team a clearer recovery statement and helps operations decide what remains open for customer communication or exception handling.",
      transition:
        "The same journey definition can support an ongoing reliability target.",
      seconds: 75,
      prompt:
        "What evidence is required before you can declare this journey recovered?",
    },
  },
  {
    id: "journey-targets",
    chapter: "Operational choices",
    eyebrow: "Define success before setting a target",
    title: "Reliability targets",
    emphasis: "for the journey",
    lead: "Define a good journey, then compare its evidence through demand and release changes.",
    visual: 13,
    takeaway:
      "Choose a target that reflects the customer outcome you can observe.",
    detail:
      "Use the same journey measure before and after a change, with comparable demand and an agreed review window.",
    qualification:
      "No target is prescribed. SLOs need entitlement and configuration; API success does not establish settled payments.",
    requirements:
      "Confirm the appropriate subscription, privileges and SLO configuration. Define eligible events, good events, exclusions, target, time window and evidence owner. An API-level indicator does not automatically measure transfer completion, settlement or correct balances. Before/after release comparisons require suitable windows, comparable demand, consistent definitions and known instrumentation. A change record is context, not proof of cause. The owner chooses further checks or follows the release and rollback process. No bank target, automatic capacity fix or incident-prevention guarantee is prescribed.",
    sources: [S.slo, S.subscriptions],
    steps: [
      "Define the outcome",
      "Choose the measure",
      "Agree the target",
      "Review the window",
    ],
    illustrative: true,
    notes: {
      opening:
        "A useful reliability target starts with a precise definition of a good journey.",
      body: "Agree which requests are eligible and which observed event counts as a good outcome, then choose the target and review period. API success does not establish settled payments. Elastic SLOs require appropriate entitlement and configuration. The same journey measure can also inform a release or peak-demand review: compare suitable windows before and after the change, check demand and evidence gaps, then inspect relevant service conditions. A matching timestamp does not prove a cause. The owner decides whether to continue, investigate or follow the rollback process; the evidence does not automatically fix capacity.",
      transition:
        "The evidence and its supporting services need an approved operating model.",
      seconds: 75,
      prompt:
        "What is the most useful observable definition of a successful transfer?",
    },
  },
  {
    id: "operating-model",
    chapter: "Operational choices",
    eyebrow: "Choose the approved evidence path",
    title: "Control over the",
    emphasis: "operating model",
    lead: "Self-managed operation can keep the evidence platform within the bank’s chosen environment.",
    visual: 16,
    takeaway:
      "Agree access, retention, collection and every required data flow.",
    detail:
      "Plan collection, package and upgrade access, support arrangements and the complete approved data flow.",
    qualification:
      "Self-managed is an option, not a compliance assurance. Package, upgrade and support flows need review.",
    requirements:
      "Confirm the actual deployment topology, release, subscription, roles, retention and collection requirements. Restricted-network operation needs an approved package, artifact, upgrade and support path. Review the complete data flow and external dependencies rather than assuming that self-managed deployment removes them. No Saudi hosting, regulator approval, blanket feature parity or automatic compliance is claimed.",
    sources: [S.airGapped, S.subscriptions],
    steps: [
      "Chosen environment",
      "Scoped access",
      "Retention policy",
      "Approved data flows",
    ],
    illustrative: true,
    notes: {
      opening: "The operating model should fit the bank’s approved boundaries.",
      body: "Elastic supports self-managed operation, including environments where network access is restricted. That choice still needs an end-to-end plan: collection, user access, retention, package access, upgrades and support. Feature entitlement and the intended release also need confirmation. Review the complete data path and external dependencies instead of assuming the deployment choice resolves every operating requirement. The practical outcome is an evidence platform that operations can run within the bank’s chosen boundaries. The bank still decides its policies and approvals; self-managed deployment is not a blanket assurance of regulatory compliance or local hosting for every dependency.",
      transition:
        "Three public customer stories illustrate different outcomes worth discussing.",
      seconds: 60,
      prompt:
        "Which deployment and data-flow boundaries should a validation respect?",
    },
  },
  {
    id: "oney-detection",
    chapter: "Public customer evidence",
    eyebrow: "Oney Bank · Reported customer outcome",
    title: "Oney Bank:",
    emphasis: "earlier detection",
    lead: "API-incident detection moved from up to 20 minutes to one minute.",
    visual: 18,
    takeaway:
      "Measure the time to detect an incident separately from the time to resolve it.",
    detail:
      "Oney describes shared operational data across business, development and operations teams.",
    qualification:
      "Elastic-published customer result. Measure: API-incident detection, not resolution or MTTR. Results are not a forecast.",
    requirements:
      "The detailed public account says prior API-incident detection could take up to 20 minutes and later took one minute. This is not an MTTR, downtime or universal detection guarantee. The story does not establish an on-premises deployment. Its other availability and cost headlines are not used because their scope should not be generalized to this bank.",
    sources: [S.oney],
    steps: [
      "API incidents",
      "Up to 20 minutes",
      "One minute",
      "Detection defined",
    ],
    illustrative: false,
    notes: {
      opening:
        "Oney Bank reports a specific improvement in API-incident detection.",
      body: "The public Elastic customer story describes detection falling from up to twenty minutes to one minute on APIs. The metric matters: it is time to detect an incident, not time to repair it or restore a payment. Oney also describes shared data across business, development and operations. We can use the example to discuss an earlier signal and a common operational view. It is a vendor-published result from a particular customer, not an independent benchmark or a forecast for this bank, and it does not establish an on-premises deployment.",
      transition:
        "WePay reports a different part of the incident timeline: understanding customer impact.",
      seconds: 60,
      prompt:
        "How do you define the start and end of incident detection today?",
    },
  },
  {
    id: "wepay-impact",
    chapter: "Public customer evidence",
    eyebrow: "WePay · Reported customer outcome",
    title: "WePay: clearer",
    emphasis: "customer impact",
    lead: "WePay reports 90% less time to identify customer impact during incidents.",
    visual: 19,
    takeaway:
      "Faster impact identification helps teams agree who and what is affected.",
    detail:
      "The story describes shared logging and telemetry in a Google Cloud environment; APM was a future plan.",
    qualification:
      "Reported impact-identification result, not MTTR or downtime. Google Cloud context; APM was a future plan. No forecast.",
    requirements:
      "This Elastic-published account reports a 90% reduction in time to identify customer impact during incidents through consolidated logging and telemetry. It does not report a 90% reduction in incidents, failed payments, downtime or MTTR. The deployment context is Google Cloud, and the story describes APM adoption as a future plan; do not attribute the reported result to APM or use it as on-premises proof.",
    sources: [S.wepay],
    steps: [
      "Shared telemetry",
      "Incident context",
      "Customer impact",
      "90% less time",
    ],
    illustrative: false,
    notes: {
      opening:
        "WePay’s reported ninety percent result concerns identifying customer impact.",
      body: "The Elastic customer account describes shared logging and telemetry helping WePay identify customer impact during incidents in ninety percent less time. This answers the question of who or what is affected. It does not mean ninety percent fewer incidents, less downtime or faster restoration. The context is Google Cloud, and the story describes Elastic APM adoption as a future plan, so the result should not be attributed to APM. Like Oney, this is a customer-reported example rather than a forecast. It gives us another measure to define in a validation.",
      transition:
        "Emirates NBD provides a regional example of shared investigation with on-premises evidence.",
      seconds: 60,
      prompt:
        "How quickly can the team establish the customer impact of a payment incident?",
    },
  },
  {
    id: "emirates-nbd-investigation",
    chapter: "Public customer evidence",
    eyebrow: "Emirates NBD · Reported customer outcome",
    title: "Emirates NBD:",
    emphasis: "shared investigation",
    lead: "Centralized logs and APM support a reported shift from days to minutes to locate problems.",
    visual: 20,
    takeaway:
      "Shared evidence can help teams locate a customer-facing problem together.",
    detail:
      "The public story explicitly describes on-premises log storage and APM for application investigation.",
    qualification:
      "Elastic-published account: days to minutes to locate problems. On-premises logs + APM; no Saudi-hosting or approval claim.",
    requirements:
      "The public Emirates NBD story describes centralized logging with data stored on premises and APM across applications. It reports customer-facing issue resolution and locating problems moving from days to minutes; this is an attributed description, not a defined universal MTTR benchmark. The source does not establish Saudi hosting or regulator approval. Do not infer a guaranteed result for the prospect.",
    sources: [S.enbd],
    steps: [
      "Separate logs",
      "Centralized evidence",
      "Logs plus APM",
      "Days to minutes",
    ],
    illustrative: false,
    notes: {
      opening:
        "Emirates NBD describes a shared investigation view built on centralized logs and APM.",
      body: "The public customer story explicitly says log data is stored on premises and describes APM supporting application investigation. Its reported improvement is from days to minutes to locate customer-facing problems, alongside faster issue resolution. Keep that wording tied to the account rather than treating it as a universal MTTR benchmark. The relevance here is a common view across teams investigating banking experiences such as online services and cards. This is a regional reference, but the source does not establish Saudi hosting or regulator approval, and it does not promise the same result for another bank.",
      transition:
        "These examples suggest several outcomes to measure separately.",
      seconds: 75,
      prompt:
        "Where would a shared investigation view remove the most delay for your teams?",
    },
  },
  {
    id: "one-validation",
    chapter: "One useful validation",
    eyebrow: "Make the next step concrete",
    title: "One useful",
    emphasis: "validation",
    lead: "Choose one journey, permitted evidence, a baseline or unknown, owners and a decision.",
    visual: 22,
    takeaway: "Finish with enough evidence to decide what should happen next.",
    detail:
      "Measure detection, impact analysis, investigation and restoration separately, with an agreed clock for each.",
    qualification:
      "Proposed validation only. Scope, data permissions, owners, measures and success criteria must be agreed.",
    requirements:
      "Select one journey with a business owner and service owner. Confirm permitted evidence, the baseline or an explicit unknown, the outcome, window and decision. For each chosen measure, agree its start and end event, owner and source: detecting a symptom, identifying customer impact, verifying a cause and checking restoration are different clocks. Do not substitute customer-story percentages for a local baseline or blend them into MTTR. Record evidence gaps and process changes. Confirm deployment and entitlement requirements, use synthetic or approved data, and follow the bank’s change controls.",
    sources: [S.observability, S.slo, S.subscriptions],
    steps: [
      "Choose the journey",
      "Agree the evidence",
      "Assign the owners",
      "Define the decision",
    ],
    illustrative: true,
    notes: {
      opening:
        "A useful next step is a small validation with a decision attached.",
      body: "Choose one journey and its business and service owners. Agree permitted evidence, the baseline or what remains unknown, and the completion signal. Define the clocks separately: detection identifies the incident; impact analysis establishes who or what is affected; investigation verifies the cause; restoration checks the agreed outcome. Each needs start and end events, an owner and an evidence source. Another customer’s percentage cannot replace a local baseline. Set a review window and a decision, such as whether evidence is sufficient or instrumentation needs to change. The validation should answer that operational question within the bank’s approved environment.",
      transition: "Return to the journey that matters most to the customer.",
      seconds: 90,
      prompt:
        "Which journey, evidence owner and decision could anchor the first validation?",
    },
  },
  {
    id: "next-conversation",
    chapter: "One useful validation",
    eyebrow: "The next conversation",
    title: "Which journey",
    emphasis: "should we validate?",
    lead: "Connect customer experience, shared evidence and an owner’s next decision.",
    visual: 23,
    takeaway: "Choose one service worth understanding better.",
    detail:
      "Start with a real question and agree the smallest permitted evidence set that could answer it.",
    qualification:
      "Discussion proposal. The incident was fictional; any validation uses agreed scope, permissions and success measures.",
    requirements:
      "No bank architecture, incident, target, regulatory obligation or financial return has been assumed. The next conversation should establish the actual journey, operating boundary, evidence permissions, owners and decision. Public customer outcomes remain attributed examples. Product availability is checked against the intended release, deployment and entitlement.",
    sources: [S.observability, S.subscriptions],
    steps: [
      "Customer outcome",
      "Useful evidence",
      "Responsible owner",
      "Next decision",
    ],
    illustrative: true,
    notes: {
      opening:
        "Which customer journey would be most useful to understand together?",
      body: "We began with a customer waiting for a transfer and followed a complete investigation: scope the impact, connect evidence, test a candidate explanation, approve a response and check the outcome. The value of the next conversation is to select a real question that matters to your team. We can then agree the smallest permitted evidence set, the relevant owners and a measure that supports a decision. No architecture or improvement target has been assumed. A focused validation gives us a practical way to learn whether this approach helps in your environment.",
      transition:
        "Open the discussion around the selected journey and its owners.",
      seconds: 30,
      prompt: "Which service is worth validating first?",
    },
  },
];
