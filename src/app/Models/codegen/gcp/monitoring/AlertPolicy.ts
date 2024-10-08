import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_AlertPolicyCreationRecord,
  monitoring_AlertPolicyCreationRecord_GetTypes,
} from "../types/monitoring_AlertPolicyCreationRecord";
import {
  monitoring_AlertPolicyDocumentation,
  monitoring_AlertPolicyDocumentation_GetTypes,
} from "../types/monitoring_AlertPolicyDocumentation";
import {
  monitoring_AlertPolicyCondition,
  monitoring_AlertPolicyCondition_GetTypes,
} from "../types/monitoring_AlertPolicyCondition";
import {
  monitoring_AlertPolicyAlertStrategy,
  monitoring_AlertPolicyAlertStrategy_GetTypes,
} from "../types/monitoring_AlertPolicyAlertStrategy";

export interface AlertPolicyArgs {
  /*
Documentation that is included with notifications and incidents related
to this policy. Best practice is for the documentation to include information
to help responders understand, mitigate, escalate, and correct the underlying
problems detected by the alerting policy. Notification channels that have
limited capacity might not show this documentation.
Structure is documented below.
*/
  documentation?: monitoring_AlertPolicyDocumentation;

  /*
Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`
*/
  notificationChannels?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A list of conditions for the policy. The conditions are combined by
AND or OR according to the combiner field. If the combined conditions
evaluate to true, then an incident is created. A policy can have from
one to six conditions.
Structure is documented below.
*/
  conditions?: Array<monitoring_AlertPolicyCondition>;

  /*
A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.
*/
  displayName?: string;

  // Whether or not the policy is enabled. The default is true.
  enabled?: boolean;

  /*
The severity of an alert policy indicates how important incidents generated
by that policy are. The severity level will be displayed on the Incident
detail page and in notifications.
Possible values are: `CRITICAL`, `ERROR`, `WARNING`.
*/
  severity?: string;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  userLabels?: Map<string, string>;

  /*
Control over how this alert policy's notification channels are notified.
Structure is documented below.
*/
  alertStrategy?: monitoring_AlertPolicyAlertStrategy;

  /*
How to combine the results of multiple conditions to
determine if an incident should be opened.
Possible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.
*/
  combiner?: string;
}
export class AlertPolicy extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  public userLabels?: Map<string, string>;

  /*
Control over how this alert policy's notification channels are notified.
Structure is documented below.
*/
  public alertStrategy?: monitoring_AlertPolicyAlertStrategy;

  /*
How to combine the results of multiple conditions to
determine if an incident should be opened.
Possible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.
*/
  public combiner?: string;

  /*
A read-only record of the creation of the alerting policy.
If provided in a call to create or update, this field will
be ignored.
Structure is documented below.
*/
  public creationRecords?: Array<monitoring_AlertPolicyCreationRecord>;

  /*
Documentation that is included with notifications and incidents related
to this policy. Best practice is for the documentation to include information
to help responders understand, mitigate, escalate, and correct the underlying
problems detected by the alerting policy. Notification channels that have
limited capacity might not show this documentation.
Structure is documented below.
*/
  public documentation?: monitoring_AlertPolicyDocumentation;

  /*
(Output)
The unique resource name for this condition.
Its syntax is:
projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
[CONDITION_ID] is assigned by Stackdriver Monitoring when
the condition is created as part of a new or updated alerting
policy.
*/
  public name?: string;

  /*
A list of conditions for the policy. The conditions are combined by
AND or OR according to the combiner field. If the combined conditions
evaluate to true, then an incident is created. A policy can have from
one to six conditions.
Structure is documented below.
*/
  public conditions?: Array<monitoring_AlertPolicyCondition>;

  /*
A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.
*/
  public displayName?: string;

  // Whether or not the policy is enabled. The default is true.
  public enabled?: boolean;

  /*
Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`
*/
  public notificationChannels?: Array<string>;

  /*
The severity of an alert policy indicates how important incidents generated
by that policy are. The severity level will be displayed on the Incident
detail page and in notifications.
Possible values are: `CRITICAL`, `ERROR`, `WARNING`.
*/
  public severity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "notificationChannels",
        "Identifies the notification channels to which notifications should be\nsent when incidents are opened or closed or when new violations occur\non an already opened incident. Each element of this array corresponds\nto the name field in each of the NotificationChannel objects that are\nreturned from the notificationChannels.list method. The syntax of the\nentries in this field is\n`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A short name or phrase used to identify the policy in\ndashboards, notifications, and incidents. To avoid confusion, don't use\nthe same display name for multiple policies in the same project. The\nname is limited to 512 Unicode characters.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether or not the policy is enabled. The default is true.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "userLabels",
        "This field is intended to be used for organizing and identifying the AlertPolicy\nobjects.The field can contain up to 64 entries. Each key and value is limited\nto 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values\ncan contain only lowercase letters, numerals, underscores, and dashes. Keys\nmust begin with a letter.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "alertStrategy",
        "Control over how this alert policy's notification channels are notified.\nStructure is documented below.",
        () => monitoring_AlertPolicyAlertStrategy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "combiner",
        "How to combine the results of multiple conditions to\ndetermine if an incident should be opened.\nPossible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "documentation",
        "Documentation that is included with notifications and incidents related\nto this policy. Best practice is for the documentation to include information\nto help responders understand, mitigate, escalate, and correct the underlying\nproblems detected by the alerting policy. Notification channels that have\nlimited capacity might not show this documentation.\nStructure is documented below.",
        () => monitoring_AlertPolicyDocumentation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "severity",
        "The severity of an alert policy indicates how important incidents generated\nby that policy are. The severity level will be displayed on the Incident\ndetail page and in notifications.\nPossible values are: `CRITICAL`, `ERROR`, `WARNING`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "conditions",
        "A list of conditions for the policy. The conditions are combined by\nAND or OR according to the combiner field. If the combined conditions\nevaluate to true, then an incident is created. A policy can have from\none to six conditions.\nStructure is documented below.",
        () => monitoring_AlertPolicyCondition_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
