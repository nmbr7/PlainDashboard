import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  // Path to the top-level parent that contains the records.
  recordRowPath?: string;
}

export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordRowPath",
      "Path to the top-level parent that contains the records.",
      [],
      true,
      false,
    ),
  ];
}
