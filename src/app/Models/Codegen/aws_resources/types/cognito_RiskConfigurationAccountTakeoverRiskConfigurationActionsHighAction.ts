import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction {
  // Whether to send a notification.
  notify?: boolean;

  // The action to take in response to the account takeover action. Valid values are `BLOCK`, `MFA_IF_CONFIGURED`, `MFA_REQUIRED` and `NO_ACTION`.
  eventAction?: string;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "notify",
      "Whether to send a notification.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventAction",
      "The action to take in response to the account takeover action. Valid values are `BLOCK`, `MFA_IF_CONFIGURED`, `MFA_REQUIRED` and `NO_ACTION`.",
      [],
      true,
      false,
    ),
  ];
}
