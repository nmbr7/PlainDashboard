import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_AnalyticsConfigurationFilter {
  // Object prefix for filtering.
  prefix?: string;

  // Set of object tags for filtering.
  tags?: Map<string, string>;
}

export function s3_AnalyticsConfigurationFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object prefix for filtering.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Set of object tags for filtering.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
