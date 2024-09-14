import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
  // A long integer value.
  longValue?: number;

  // A list of strings.
  stringListValues?: Array<string>;

  //
  stringValue?: string;

  // A date expressed as an ISO 8601 string. It is important for the time zone to be included in the ISO 8601 date-time format. As of this writing only UTC is supported. For example, `2012-03-25T12:30:10+00:00`.
  dateValue?: string;
}

export function kendra_DataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "longValue",
      "A long integer value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stringListValues",
      "A list of strings.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dateValue",
      "A date expressed as an ISO 8601 string. It is important for the time zone to be included in the ISO 8601 date-time format. As of this writing only UTC is supported. For example, `2012-03-25T12:30:10+00:00`.",
      () => [],
      false,
      false,
    ),
  ];
}