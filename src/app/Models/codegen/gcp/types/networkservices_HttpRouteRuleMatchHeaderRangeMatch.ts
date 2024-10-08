import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_HttpRouteRuleMatchHeaderRangeMatch {
  // End of the range (exclusive).
  end?: number;

  // Start of the range (inclusive).
  start?: number;
}

export function networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "end",
      "End of the range (exclusive).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "start",
      "Start of the range (inclusive).",
      () => [],
      true,
      false,
    ),
  ];
}
