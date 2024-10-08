import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_SpaceSpaceSharingSettings {
  // Specifies the sharing type of the space. Valid values are `Private` and `Shared`.
  sharingType?: string;
}

export function sagemaker_SpaceSpaceSharingSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sharingType",
      "Specifies the sharing type of the space. Valid values are `Private` and `Shared`.",
      () => [],
      true,
      false,
    ),
  ];
}
