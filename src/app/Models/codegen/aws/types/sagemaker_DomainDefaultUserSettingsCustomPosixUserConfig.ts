import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig {
  // The POSIX group ID.
  gid?: number;

  // The POSIX user ID.
  uid?: number;
}

export function sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "gid",
      "The POSIX group ID.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "uid",
      "The POSIX user ID.",
      () => [],
      true,
      false,
    ),
  ];
}
