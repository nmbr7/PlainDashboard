import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration {
  // S3 URI to deliver recordings.
  destination?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "S3 URI to deliver recordings.",
      () => [],
      false,
      false,
    ),
  ];
}
