import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceSettingsMetadata {
  // A metadata key/value items map. The total size of all keys and values must be less than 512KB
  items?: Map<string, string>;
}

export function compute_InstanceSettingsMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "items",
      "A metadata key/value items map. The total size of all keys and values must be less than 512KB",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
