import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch {
  // The end of the range (exclusive).
  rangeEnd?: number;

  // The start of the range (inclusive).
  rangeStart?: number;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "rangeEnd",
      "The end of the range (exclusive).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rangeStart",
      "The start of the range (inclusive).",
      [],
      true,
      false,
    ),
  ];
}
