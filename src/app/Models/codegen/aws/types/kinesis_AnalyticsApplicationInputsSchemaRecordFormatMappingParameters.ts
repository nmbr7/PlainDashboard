import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv,
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv";
import {
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson,
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson";

export interface kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /*
Mapping information when the record format uses delimiters.
See CSV Mapping Parameters below for more details.
*/
  csv?: kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;

  /*
Mapping information when JSON is the record format on the streaming source.
See JSON Mapping Parameters below for more details.
*/
  json?: kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}

export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "csv",
      "Mapping information when the record format uses delimiters.\nSee CSV Mapping Parameters below for more details.",
      () =>
        kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "json",
      "Mapping information when JSON is the record format on the streaming source.\nSee JSON Mapping Parameters below for more details.",
      () =>
        kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson_GetTypes(),
      false,
      false,
    ),
  ];
}
