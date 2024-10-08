import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface looker_InstanceAdminSettings {
  //
  allowedEmailDomains?: Array<string>;
}

export function looker_InstanceAdminSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedEmailDomains",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
