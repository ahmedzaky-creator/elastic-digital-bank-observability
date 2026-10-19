/** Entirely synthetic teaching example; no live service, person or transaction. */
export const incident = {
  label: "Illustrative transfer incident",
  synthetic: true,
  journey: "Transfer",
  channel: "Mobile",
  symptom: "A subset of transfer requests remains pending",
  comparison: [
    { channel: "Mobile", states: ["Accepted", "Pending"] },
    { channel: "Web", states: ["Accepted"] },
  ],
  stateBoundary:
    "Request response states do not prove downstream completion or settlement.",
  path: ["Mobile app", "API gateway", "Payment service", "External provider"],
  unobserved: "External-provider internals are unobserved",
  observation: "Connection-acquisition waits in the payment service",
  context: "Approved configuration-change record",
  candidate: "A lower connection limit may explain the wait",
  alternatives: [
    "Demand increase",
    "Slow downstream responses",
    "Resource pressure",
  ],
  ownerCheck:
    "The service owner checks configuration and competing explanations",
  verifiedFinding: "The owner confirms an incorrectly reduced connection limit",
  action: "Restore the approved setting through the normal change process",
  freshCheck: "Check fresh transfer requests",
  downstreamCheck: "Check the agreed downstream completion signal",
  backlogCheck: "Reconcile earlier pending transfers separately",
  recoveryBoundary:
    "A successful API response alone does not establish settlement or correct balances.",
} as const;
