import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration {
  // SQS queue to deliver results.
  insightsTarget?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "insightsTarget",
      "SQS queue to deliver results.",
      [],
      true,
      false,
    ),
  ];
}
