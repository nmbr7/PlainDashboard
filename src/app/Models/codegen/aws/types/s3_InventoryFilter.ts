import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_InventoryFilter {
  // Prefix that an object must have to be included in the inventory results.
  prefix?: string;
}

export function s3_InventoryFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix that an object must have to be included in the inventory results.",
      () => [],
      false,
      false,
    ),
  ];
}
