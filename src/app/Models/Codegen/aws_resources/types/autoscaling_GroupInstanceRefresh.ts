import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_GroupInstanceRefreshPreferences,
  autoscaling_GroupInstanceRefreshPreferences_GetTypes,
} from "./autoscaling_GroupInstanceRefreshPreferences";

export interface autoscaling_GroupInstanceRefresh {
  // Override default parameters for Instance Refresh.
  preferences?: autoscaling_GroupInstanceRefreshPreferences;

  // Strategy to use for instance refresh. The only allowed value is `Rolling`. See [StartInstanceRefresh Action](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_StartInstanceRefresh.html#API_StartInstanceRefresh_RequestParameters) for more information.
  strategy?: string;

  /*
Set of additional property names that will trigger an Instance Refresh. A refresh will always be triggered by a change in any of `launch_configuration`, `launch_template`, or `mixed_instances_policy`.

> --NOTE:-- A refresh is started when any of the following Auto Scaling Group properties change: `launch_configuration`, `launch_template`, `mixed_instances_policy`. Additional properties can be specified in the `triggers` property of `instance_refresh`.

> --NOTE:-- A refresh will not start when `version = "$Latest"` is configured in the `launch_template` block. To trigger the instance refresh when a launch template is changed, configure `version` to use the `latest_version` attribute of the `aws.ec2.LaunchTemplate` resource.

> --NOTE:-- Auto Scaling Groups support up to one active instance refresh at a time. When this resource is updated, any existing refresh is cancelled.

> --NOTE:-- Depending on health check settings and group size, an instance refresh may take a long time or fail. This resource does not wait for the instance refresh to complete.
*/
  triggers?: Array<string>;
}

export function autoscaling_GroupInstanceRefresh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "triggers",
      'Set of additional property names that will trigger an Instance Refresh. A refresh will always be triggered by a change in any of `launch_configuration`, `launch_template`, or `mixed_instances_policy`.\n\n> **NOTE:** A refresh is started when any of the following Auto Scaling Group properties change: `launch_configuration`, `launch_template`, `mixed_instances_policy`. Additional properties can be specified in the `triggers` property of `instance_refresh`.\n\n> **NOTE:** A refresh will not start when `version = "$Latest"` is configured in the `launch_template` block. To trigger the instance refresh when a launch template is changed, configure `version` to use the `latest_version` attribute of the `aws.ec2.LaunchTemplate` resource.\n\n> **NOTE:** Auto Scaling Groups support up to one active instance refresh at a time. When this resource is updated, any existing refresh is cancelled.\n\n> **NOTE:** Depending on health check settings and group size, an instance refresh may take a long time or fail. This resource does not wait for the instance refresh to complete.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "preferences",
      "Override default parameters for Instance Refresh.",
      autoscaling_GroupInstanceRefreshPreferences_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "strategy",
      "Strategy to use for instance refresh. The only allowed value is `Rolling`. See [StartInstanceRefresh Action](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_StartInstanceRefresh.html#API_StartInstanceRefresh_RequestParameters) for more information.",
      [],
      true,
      false,
    ),
  ];
}
