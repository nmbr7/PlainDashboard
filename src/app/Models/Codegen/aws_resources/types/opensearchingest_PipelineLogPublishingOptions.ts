import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination,
  opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination_GetTypes,
} from "./opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination";

export interface opensearchingest_PipelineLogPublishingOptions {
  // The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This parameter is required if IsLoggingEnabled is set to true. See `cloudwatch_log_destination` below.
  cloudwatchLogDestination?: opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination;

  // Whether logs should be published.
  isLoggingEnabled?: boolean;
}

export function opensearchingest_PipelineLogPublishingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogDestination",
      "The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This parameter is required if IsLoggingEnabled is set to true. See `cloudwatch_log_destination` below.",
      opensearchingest_PipelineLogPublishingOptionsCloudwatchLogDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isLoggingEnabled",
      "Whether logs should be published.",
      [],
      false,
      false,
    ),
  ];
}
