export interface getServiceCondition {
  // State of the condition.
  State?: string;

  // type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: - "Ready": True when the Resource is ready.
  Type?: string;

  // A reason for the execution condition.
  ExecutionReason?: string;

  /*
Last time the condition transitioned from one status to another.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  LastTransitionTime?: string;

  // Human readable message indicating details about the current status.
  Message?: string;

  // A common (service-level) reason for this condition.
  Reason?: string;

  // A reason for the revision condition.
  RevisionReason?: string;

  // How to interpret failures of this condition, one of Error, Warning, Info
  Severity?: string;
}
