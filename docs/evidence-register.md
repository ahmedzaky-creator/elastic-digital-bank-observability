# Reliable Digital Banking — public evidence register

Checked 19 October 2026. Original diagrams and synthetic incident data illustrate the discussion; they are not production captures or measured prospect results. Customer examples are vendor-published reports with their original scope. Product availability depends on the actual release, entitlement, permissions, instrumentation and operating model.

## Elastic Observability overview

[Official source](https://www.elastic.co/docs/solutions/observability)

Public capability reference for logs, metrics, traces and user-experience evidence. Actual coverage depends on collection, configuration, instrumentation and permissions; it does not establish the fictional bank’s current capabilities.

## Elastic APM service maps

[Official source](https://www.elastic.co/docs/solutions/observability/apm/service-map)

Observed service relationships depend on instrumentation and propagated trace context. Missing telemetry is not evidence of a healthy dependency, and a map is not proof of complete coverage.

## Elastic service-level objectives

[Official source](https://www.elastic.co/docs/solutions/observability/incident-management/service-level-objectives-slos)

SLOs require the appropriate subscription, privileges and supporting configuration. The bank defines eligible events, good events, target and time window. An API success SLO does not establish payment settlement or correct balances.

## Elastic restricted-network collection

[Official source](https://www.elastic.co/docs/reference/fleet/air-gapped)

Restricted-network Fleet operation requires a planned package, artifact and upgrade path. Self-managed deployment does not automatically remove support, update or package dependencies.

## Elastic subscriptions

[Official source](https://www.elastic.co/subscriptions)

Validate features against the intended release, deployment and actual subscription. The presentation makes no blanket feature-parity, free-platform, compliance or savings claim.

## Oney Bank customer story

[Official source](https://www.elastic.co/customers/oney-bank)

Elastic-published customer account: API incident detection changed from up to 20 minutes to one minute. This measures detection, not resolution or MTTR. The source does not establish an on-premises deployment. Reported outcome, not a prospect forecast.

## WePay customer story

[Official source](https://www.elastic.co/customers/wepay/)

Elastic-published customer account: 90% less time to identify customer impact during incidents, with consolidated logging/telemetry in a Google Cloud context. APM adoption was a future plan in this story; do not attribute the result to APM or redefine it as downtime, failures or MTTR.

## Emirates NBD customer story

[Official source](https://www.elastic.co/customers/emirates-nbd/)

Elastic-published customer account: centralized logs stored on premises, plus APM, with locating customer-facing problems and issue resolution improving from days to minutes. The source does not establish Saudi hosting or regulatory approval; this is a reported outcome, not a universal benchmark.

## Measurement boundaries

Oney measures API-incident detection, from up to 20 minutes to 1 minute. WePay measures time to identify customer impact during incidents, 90% less; its published story uses Google Cloud and describes APM as future adoption. Emirates NBD describes on-premises logs and APM and reports days-to-minutes improvement for customer-facing issues. These are different measures and are not forecasts for the prospect.

The fictional incident separates a pending request, correlated evidence, a candidate explanation, an owner-verified finding and recovery checks. An accepted request alone does not establish settled funds; older pending requests require separate status/reconciliation checks.
