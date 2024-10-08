import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesS3,
  kinesis_AnalyticsApplicationReferenceDataSourcesS3_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesS3";
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchema,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchema_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchema";

export interface kinesis_AnalyticsApplicationReferenceDataSources {
  // The in-application Table Name.
  tableName?: string;

  // The ARN of the Kinesis Analytics Application.
  id?: string;

  // The S3 configuration for the reference data source. See S3 Reference below for more details.
  s3?: kinesis_AnalyticsApplicationReferenceDataSourcesS3;

  // The Schema format of the data in the streaming source. See Source Schema below for more details.
  schema?: kinesis_AnalyticsApplicationReferenceDataSourcesSchema;
}

export function kinesis_AnalyticsApplicationReferenceDataSources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The in-application Table Name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ARN of the Kinesis Analytics Application.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "The S3 configuration for the reference data source. See S3 Reference below for more details.",
      () => kinesis_AnalyticsApplicationReferenceDataSourcesS3_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schema",
      "The Schema format of the data in the streaming source. See Source Schema below for more details.",
      () => kinesis_AnalyticsApplicationReferenceDataSourcesSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
