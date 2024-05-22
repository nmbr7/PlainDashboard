import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_InsightFiltersConfidence {
  // The equal-to condition to be applied to a single field when querying for findings, provided as a String.
  eq?: string;

  // The greater-than-equal condition to be applied to a single field when querying for findings, provided as a String.
  gte?: string;

  // The less-than-equal condition to be applied to a single field when querying for findings, provided as a String.
  lte?: string;
}

export function securityhub_InsightFiltersConfidence_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eq",
      "The equal-to condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gte",
      "The greater-than-equal condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lte",
      "The less-than-equal condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
  ];
}
