import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
  // The email HTML body.
  htmlBody?: string;

  // The email subject.
  subject?: string;

  // The email text body.
  textBody?: string;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "textBody",
      "The email text body.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "htmlBody",
      "The email HTML body.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subject",
      "The email subject.",
      () => [],
      true,
      false,
    ),
  ];
}
