import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings {
  // Describes whether model deployment permissions are enabled or disabled in the Canvas application. Valid values are `ENABLED` and `DISABLED`.
  status?: string;
}

export function sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Describes whether model deployment permissions are enabled or disabled in the Canvas application. Valid values are `ENABLED` and `DISABLED`.",
      () => [],
      false,
      false,
    ),
  ];
}
