# Reliable Digital Banking — presenter notes

Customer-neutral presentation. Suggested speaking plan: 18:00; discussion is additional. Public evidence checked 19 October 2026. All incident data and banking experiences are fictional illustrations. No live systems, models or transactions are connected.

Use arrows to change scenes immediately. Animations loop on each scene; Pause holds the view and Replay restarts it. G opens the overview, N shows these notes, F requests fullscreen, and 1–5 controls density. Hide notes before sharing the presentation window.

## Opening

“Before we look at technology, which digital banking journey matters most when customers need it to work? I’ll use one fictional transfer incident to show how we can connect the impact to evidence, then we can choose what would be useful to validate in your environment.”

## 01 — Reliable digital banking

Suggested time: 0:30 · Chapter: The customer promise

**Opening:** A reliable banking experience begins with a customer being able to finish what they came to do.

Today we will follow one transfer journey from a pending status to a checked recovery. The example is fictional, but the questions are practical: which journey is affected, where should an engineer look, and what evidence makes the next decision credible? Elastic Observability connects permitted operational signals so teams can investigate with shared context. It does not replace the service owner or the bank’s operating controls. We will finish by choosing one useful validation, with the actual target, data permissions and success measures agreed together.

**Ask:** Which customer journey most needs a dependable experience?

**Transition:** First, consider what the customer is expecting.

**Qualification:** Customer-neutral presentation. The transfer incident is fictional; no live bank data or transactions.

The transfer journey and all incident observations are synthetic teaching examples. Product capabilities require appropriate collection, instrumentation, configuration, access and entitlement. Public customer results later in the presentation are attributed examples, not forecasts for this bank.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.

## 02 — The customer promise

Suggested time: 0:45 · Chapter: The customer promise

**Opening:** The customer sees one journey, even when many services support it.

Account access and payments have different technical paths, but the expectation is simple: the action should work and its status should be clear. A server can be healthy while a customer is still waiting. That is why we begin with a journey outcome rather than a component chart. For a transfer, accepting the request is only one stage. The bank must define which later signal represents completion and where settlement or balance checks belong. This definition gives business and technology teams a shared starting point for investigation.

**Ask:** What tells your team that the customer has actually completed this journey?

**Transition:** Choose one journey whose outcome and owner are clear.

**Qualification:** Illustrative outcomes. The bank defines success; an API response alone does not prove payment completion.

These are discussion outcomes, not claims about the bank’s current services. The journey needs an agreed start, an observable end and an owner. Distinguish request acceptance, downstream completion, settlement and correct balances. Availability of each signal depends on permitted collection and instrumentation.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.

## 03 — The journeys that matter

Suggested time: 0:45 · Chapter: The customer promise

**Opening:** A useful starting point is one journey the business already cares about.

Account opening, login, payments and card use all matter, but they should not be collapsed into one health indicator. Each has a different start, outcome, dependency path and operating owner. We will select transfers for this example and carry that same journey through the investigation. This keeps the discussion concrete without assuming an architecture. In a real validation, the team would also agree what remains outside the view, which events can be collected, and how technical failure differs from a valid business decision or a customer choosing to stop.

**Ask:** Which journey has both a clear business owner and useful evidence today?

**Transition:** Now imagine a transfer that has not reached a clear outcome.

**Qualification:** Illustrative journey map. Coverage depends on permitted evidence and instrumentation.

The four journeys are discussion examples, not an inventory of this bank’s systems. Select one journey with an owner, a defined outcome and accessible evidence. Technical failures, valid business decisions and customer abandonment require different interpretations. Do not infer complete coverage from a service map.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## 04 — Which journey is affected?

Suggested time: 1:30 · Chapter: A shared investigation

**Opening:** Some mobile transfer requests are still pending; first, establish the affected journey.

The customer has submitted a transfer and cannot yet see a clear completion state. We have a symptom, not a root cause. Pending should not be treated as failed or used to blame a provider. Compare mobile and web over the same incident window: mobile includes pending requests, while the web comparison shows accepted responses. Acceptance does not prove downstream completion or settlement. Check cohorts, missing evidence and the agreed completion signal. All observations are fictional. This shared impact description gives support and engineering a bounded question to investigate.

**Ask:** Which channel and state comparisons would make an incident update useful?

**Transition:** Different teams can now investigate the same bounded incident.

**Qualification:** Synthetic incident. Pending does not mean failed; accepted does not prove downstream completion or settlement.

The transfer incident is synthetic, with no actual customer, account, amount, transaction or provider. Pending is an observed request state, not a verified cause or proof of failure. Do not advise a retry without appropriate status checks. This channel comparison uses labels rather than production counts or a representative cohort. Web acceptance does not establish downstream completion or settlement. Agree eligible requests and the downstream outcome before calculating a completion rate.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [WePay customer story](https://www.elastic.co/customers/wepay/): Elastic-published customer account: 90% less time to identify customer impact during incidents, with consolidated logging/telemetry in a Google Cloud context. APM adoption was a future plan in this story; do not attribute the result to APM or redefine it as downtime, failures or MTTR.

## 05 — Evidence across teams

Suggested time: 1:15 · Chapter: A shared investigation

**Opening:** Elastic Observability gives teams a shared place to search the evidence behind a journey.

Elasticsearch provides the searchable foundation. Logs describe events, metrics show changing conditions, and traces follow an instrumented request. These views help support, operations and engineers investigate the same journey, time window and approved request context. An application event may show a connection wait; a trend shows when it increased; a trace places it in the request path. Collection, instrumentation, configuration, permissions and entitlement define what is visible. Gaps do not prove a dependency is healthy. The owner still checks the explanation, while each team sees only the evidence its role allows.

**Ask:** What information most often disappears between teams today?

**Transition:** Follow the transfer through the part of the request path that is instrumented.

**Qualification:** Coverage depends on collection, instrumentation, configuration and permissions; entitlement also applies.

Elasticsearch provides the searchable foundation; Elastic Observability connects logs, metrics, traces and experience evidence. Logs describe events, metrics show changing conditions, and traces follow instrumented requests. Collection, useful fields, time alignment, trace context, retention and role-based access determine the available view. Missing evidence is not proof that a dependency is healthy. Confirm the actual deployment, release and subscription; no complete-estate coverage or automatic cause verification is implied.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 06 — The path of a transfer request

Suggested time: 1:30 · Chapter: A shared investigation

**Opening:** We can now follow an observed request toward the place it waits.

The fictional path runs from a mobile app through a gateway into a payment service and then toward an external provider. The payment service is instrumented, so the team can inspect its request timing and relevant events. The provider’s internal operations remain gray because we have not established visibility there. A service map is a view of observed relationships, not proof of complete estate coverage. This narrows where to investigate, but a slow segment still needs supporting evidence. In particular, a delay inside a service should not become an untested accusation about an outside provider.

**Ask:** Where does your visibility stop along a critical payment path?

**Transition:** Bring together the evidence around the waiting time.

**Qualification:** Synthetic trace. Instrumentation and trace context define coverage; provider internals are unobserved.

The diagram illustrates a logical request path, not this bank’s architecture. Service relationships depend on instrumentation and propagated context. A slow observed span identifies where time was spent within the available view; it does not independently establish the cause. External-provider internals stay unobserved, and downstream completion needs its own permitted signal.

**Public evidence:**

- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.
- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.

## 07 — Evidence behind the delay

Suggested time: 1:30 · Chapter: A shared investigation

**Opening:** The evidence suggests a connection-limit question that the owner can test.

Request timing places the wait in the payment service. Application events identify connection acquisition, and an approved configuration-change record appears in the relevant window. Together, these make a reduced connection limit a plausible candidate. They do not prove it caused the incident. The owner should check the actual setting on the affected service and compare demand, downstream response conditions and resource pressure. This distinction keeps the investigation honest: an observation tells us what happened, correlated context suggests a question, and a verified finding requires the responsible owner to check that question.

**Ask:** What evidence would make this candidate more or less credible?

**Transition:** The service owner now checks the candidate against the alternatives.

**Qualification:** Synthetic evidence. Correlation and a slow trace alone do not establish causality.

In this fictional incident, the observed wait is connection acquisition within the payment service. A configuration-change record is relevant context, not an automatic root-cause finding. Confirm time alignment, whether the change reached the affected instances, the actual connection limit, and competing explanations such as demand, slow downstream responses or resource pressure.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## 08 — The owner verifies the cause

Suggested time: 1:30 · Chapter: A shared investigation

**Opening:** A candidate becomes a finding only after the owner checks it.

The owner inspects the effective configuration on the affected payment service and confirms that the connection limit was incorrectly reduced. They also examine demand, downstream timing and resource pressure so the explanation does not rest only on a matching timestamp. In this fictional incident, those checks support the configuration finding. The next action is then proposed through the bank’s normal change process. Elastic supplies evidence for that decision; the owner remains responsible for verifying the explanation and approving the response. The presentation performs no configuration change or other action.

**Ask:** Who should verify this finding and approve the restoration?

**Transition:** A checked explanation now needs a checked recovery.

**Qualification:** Synthetic owner-verified finding. A chart or correlation alone does not prove a cause.

This is a prepared fictional finding, not a live diagnosis. The service owner confirms the effective reduced limit on the affected service and checks whether demand, downstream delay or resource pressure better explains the wait. Only then is the candidate treated as verified in this example. Restoration remains subject to the bank’s normal approval process; nothing is executed by the presentation.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic APM service maps](https://www.elastic.co/docs/solutions/observability/apm/service-map): Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## 09 — Recovery the customer can confirm

Suggested time: 1:15 · Chapter: A shared investigation

**Opening:** Recovery means checking the journey after the approved change.

The owner restores the approved connection setting through the normal change process. The team then checks fresh requests and the agreed downstream completion signal, while watching for the waiting pattern to return. A successful API response is useful but does not establish settlement or correct balances. Earlier pending transfers form a separate queue of status and reconciliation work; they do not disappear because new requests look healthy. This separation gives the incident team a clearer recovery statement and helps operations decide what remains open for customer communication or exception handling.

**Ask:** What evidence is required before you can declare this journey recovered?

**Transition:** The same journey definition can support an ongoing reliability target.

**Qualification:** Synthetic recovery. API success alone does not establish settlement or correct balances; reconcile earlier pending transfers.

Restoration is an owner-approved change, not automated remediation. Check fresh requests against the agreed completion signal and watch for recurrence. Do not infer settlement or correct balances from an API response. Earlier pending transfers require a separate status and reconciliation process, including any necessary exceptions and customer communication under the bank’s procedures.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.

## 10 — Reliability targets for the journey

Suggested time: 1:15 · Chapter: Operational choices

**Opening:** A useful reliability target starts with a precise definition of a good journey.

Agree which requests are eligible and which observed event counts as a good outcome, then choose the target and review period. API success does not establish settled payments. Elastic SLOs require appropriate entitlement and configuration. The same journey measure can also inform a release or peak-demand review: compare suitable windows before and after the change, check demand and evidence gaps, then inspect relevant service conditions. A matching timestamp does not prove a cause. The owner decides whether to continue, investigate or follow the rollback process; the evidence does not automatically fix capacity.

**Ask:** What is the most useful observable definition of a successful transfer?

**Transition:** The evidence and its supporting services need an approved operating model.

**Qualification:** No target is prescribed. SLOs need entitlement and configuration; API success does not establish settled payments.

Confirm the appropriate subscription, privileges and SLO configuration. Define eligible events, good events, exclusions, target, time window and evidence owner. An API-level indicator does not automatically measure transfer completion, settlement or correct balances. Before/after release comparisons require suitable windows, comparable demand, consistent definitions and known instrumentation. A change record is context, not proof of cause. The owner chooses further checks or follows the release and rollback process. No bank target, automatic capacity fix or incident-prevention guarantee is prescribed.

**Public evidence:**

- [Elastic service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 11 — Control over the operating model

Suggested time: 1:00 · Chapter: Operational choices

**Opening:** The operating model should fit the bank’s approved boundaries.

Elastic supports self-managed operation, including environments where network access is restricted. That choice still needs an end-to-end plan: collection, user access, retention, package access, upgrades and support. Feature entitlement and the intended release also need confirmation. Review the complete data path and external dependencies instead of assuming the deployment choice resolves every operating requirement. The practical outcome is an evidence platform that operations can run within the bank’s chosen boundaries. The bank still decides its policies and approvals; self-managed deployment is not a blanket assurance of regulatory compliance or local hosting for every dependency.

**Ask:** Which deployment and data-flow boundaries should a validation respect?

**Transition:** Three public customer stories illustrate different outcomes worth discussing.

**Qualification:** Self-managed is an option, not a compliance assurance. Package, upgrade and support flows need review.

Confirm the actual deployment topology, release, subscription, roles, retention and collection requirements. Restricted-network operation needs an approved package, artifact, upgrade and support path. Review the complete data flow and external dependencies rather than assuming that self-managed deployment removes them. No Saudi hosting, regulator approval, blanket feature parity or automatic compliance is claimed.

**Public evidence:**

- [Elastic restricted-network collection](https://www.elastic.co/docs/reference/fleet/air-gapped): Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 12 — Oney Bank: earlier detection

Suggested time: 1:00 · Chapter: Public customer evidence

**Opening:** Oney Bank reports a specific improvement in API-incident detection.

The public Elastic customer story describes detection falling from up to twenty minutes to one minute on APIs. The metric matters: it is time to detect an incident, not time to repair it or restore a payment. Oney also describes shared data across business, development and operations. We can use the example to discuss an earlier signal and a common operational view. It is a vendor-published result from a particular customer, not an independent benchmark or a forecast for this bank, and it does not establish an on-premises deployment.

**Ask:** How do you define the start and end of incident detection today?

**Transition:** WePay reports a different part of the incident timeline: understanding customer impact.

**Qualification:** Elastic-published customer result. Measure: API-incident detection, not resolution or MTTR. Results are not a forecast.

The detailed public account says prior API-incident detection could take up to 20 minutes and later took one minute. This is not an MTTR, downtime or universal detection guarantee. The story does not establish an on-premises deployment. Its other availability and cost headlines are not used because their scope should not be generalized to this bank.

**Public evidence:**

- [Oney Bank customer story](https://www.elastic.co/customers/oney-bank): Elastic-published customer account: API incident detection changed from up to 20 minutes to one minute. This measures detection, not resolution or MTTR. The source does not establish an on-premises deployment. Reported outcome, not a prospect forecast.

## 13 — WePay: clearer customer impact

Suggested time: 1:00 · Chapter: Public customer evidence

**Opening:** WePay’s reported ninety percent result concerns identifying customer impact.

The Elastic customer account describes shared logging and telemetry helping WePay identify customer impact during incidents in ninety percent less time. This answers the question of who or what is affected. It does not mean ninety percent fewer incidents, less downtime or faster restoration. The context is Google Cloud, and the story describes Elastic APM adoption as a future plan, so the result should not be attributed to APM. Like Oney, this is a customer-reported example rather than a forecast. It gives us another measure to define in a validation.

**Ask:** How quickly can the team establish the customer impact of a payment incident?

**Transition:** Emirates NBD provides a regional example of shared investigation with on-premises evidence.

**Qualification:** Reported impact-identification result, not MTTR or downtime. Google Cloud context; APM was a future plan. No forecast.

This Elastic-published account reports a 90% reduction in time to identify customer impact during incidents through consolidated logging and telemetry. It does not report a 90% reduction in incidents, failed payments, downtime or MTTR. The deployment context is Google Cloud, and the story describes APM adoption as a future plan; do not attribute the reported result to APM or use it as on-premises proof.

**Public evidence:**

- [WePay customer story](https://www.elastic.co/customers/wepay/): Elastic-published customer account: 90% less time to identify customer impact during incidents, with consolidated logging/telemetry in a Google Cloud context. APM adoption was a future plan in this story; do not attribute the result to APM or redefine it as downtime, failures or MTTR.

## 14 — Emirates NBD: shared investigation

Suggested time: 1:15 · Chapter: Public customer evidence

**Opening:** Emirates NBD describes a shared investigation view built on centralized logs and APM.

The public customer story explicitly says log data is stored on premises and describes APM supporting application investigation. Its reported improvement is from days to minutes to locate customer-facing problems, alongside faster issue resolution. Keep that wording tied to the account rather than treating it as a universal MTTR benchmark. The relevance here is a common view across teams investigating banking experiences such as online services and cards. This is a regional reference, but the source does not establish Saudi hosting or regulator approval, and it does not promise the same result for another bank.

**Ask:** Where would a shared investigation view remove the most delay for your teams?

**Transition:** These examples suggest several outcomes to measure separately.

**Qualification:** Elastic-published account: days to minutes to locate problems. On-premises logs + APM; no Saudi-hosting or approval claim.

The public Emirates NBD story describes centralized logging with data stored on premises and APM across applications. It reports customer-facing issue resolution and locating problems moving from days to minutes; this is an attributed description, not a defined universal MTTR benchmark. The source does not establish Saudi hosting or regulator approval. Do not infer a guaranteed result for the prospect.

**Public evidence:**

- [Emirates NBD customer story](https://www.elastic.co/customers/emirates-nbd/): Elastic-published customer account: centralized logs stored on premises, plus APM, with locating customer-facing problems and issue resolution improving from days to minutes. The source does not establish Saudi hosting or regulatory approval; this is a reported outcome, not a universal benchmark.

## 15 — One useful validation

Suggested time: 1:30 · Chapter: One useful validation

**Opening:** A useful next step is a small validation with a decision attached.

Choose one journey and its business and service owners. Agree permitted evidence, the baseline or what remains unknown, and the completion signal. Define the clocks separately: detection identifies the incident; impact analysis establishes who or what is affected; investigation verifies the cause; restoration checks the agreed outcome. Each needs start and end events, an owner and an evidence source. Another customer’s percentage cannot replace a local baseline. Set a review window and a decision, such as whether evidence is sufficient or instrumentation needs to change. The validation should answer that operational question within the bank’s approved environment.

**Ask:** Which journey, evidence owner and decision could anchor the first validation?

**Transition:** Return to the journey that matters most to the customer.

**Qualification:** Proposed validation only. Scope, data permissions, owners, measures and success criteria must be agreed.

Select one journey with a business owner and service owner. Confirm permitted evidence, the baseline or an explicit unknown, the outcome, window and decision. For each chosen measure, agree its start and end event, owner and source: detecting a symptom, identifying customer impact, verifying a cause and checking restoration are different clocks. Do not substitute customer-story percentages for a local baseline or blend them into MTTR. Record evidence gaps and process changes. Confirm deployment and entitlement requirements, use synthetic or approved data, and follow the bank’s change controls.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic service-level objectives](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos): SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## 16 — Which journey should we validate?

Suggested time: 0:30 · Chapter: One useful validation

**Opening:** Which customer journey would be most useful to understand together?

We began with a customer waiting for a transfer and followed a complete investigation: scope the impact, connect evidence, test a candidate explanation, approve a response and check the outcome. The value of the next conversation is to select a real question that matters to your team. We can then agree the smallest permitted evidence set, the relevant owners and a measure that supports a decision. No architecture or improvement target has been assumed. A focused validation gives us a practical way to learn whether this approach helps in your environment.

**Ask:** Which service is worth validating first?

**Transition:** Open the discussion around the selected journey and its owners.

**Qualification:** Discussion proposal. The incident was fictional; any validation uses agreed scope, permissions and success measures.

No bank architecture, incident, target, regulatory obligation or financial return has been assumed. The next conversation should establish the actual journey, operating boundary, evidence permissions, owners and decision. Public customer outcomes remain attributed examples. Product availability is checked against the intended release, deployment and entitlement.

**Public evidence:**

- [Elastic Observability overview](https://www.elastic.co/docs/solutions/observability): Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.
- [Elastic subscriptions](https://www.elastic.co/subscriptions): Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## Optional question: AI-assisted investigation

If AI becomes a priority, evaluate it against the bank’s intended release and approved model/data flow. Current documentation labels the Observability-specific Agent Builder integration and dedicated RCA skill Preview; core Agent Builder availability does not establish every integration’s availability. Confirm entitlement, scoped access and the approved model connection. On-premises Elastic storage does not establish local model processing. An engineer checks the supporting records and confirms the cause before authorizing changes. Privacy controls differ between AI Agent and AI Assistant. This is optional discussion, outside the 16-slide speaking plan.

[Observability integration](https://www.elastic.co/docs/solutions/observability/ai/agent-builder-observability) · [Model configuration](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models) · [AI experience comparison](https://www.elastic.co/docs/explore-analyze/ai-features/ai-chat-experiences/ai-agent-or-ai-assistant/)

## Close

“Which journey should we validate first, who owns its outcome, and what evidence would make the next decision useful? We can start with one approved service and a recent incident, agree the baseline or record it as unknown, then judge the result together.”
