import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue {
  // The tag value.
  value?: string;

  // The tag key.
  key?: string;
}

export function macie2_ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The tag key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The tag value.",
      [],
      false,
      false,
    ),
  ];
}
