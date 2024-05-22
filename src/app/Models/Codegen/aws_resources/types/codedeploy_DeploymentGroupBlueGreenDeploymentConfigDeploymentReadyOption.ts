import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  // When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
  actionOnTimeout?: string;

  // The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
  waitTimeInMinutes?: number;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "actionOnTimeout",
      "When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "waitTimeInMinutes",
      "The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.",
      [],
      false,
      false,
    ),
  ];
}
