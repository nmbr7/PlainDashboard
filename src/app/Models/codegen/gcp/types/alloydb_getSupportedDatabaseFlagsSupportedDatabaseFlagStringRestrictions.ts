import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions {
  // The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.
  allowedValues?: Array<string>;
}

export function alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedValues",
      "The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
