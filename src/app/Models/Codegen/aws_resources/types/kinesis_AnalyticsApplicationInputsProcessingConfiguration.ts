import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda,
  kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda";

export interface kinesis_AnalyticsApplicationInputsProcessingConfiguration {
  // The Lambda function configuration. See Lambda below for more details.
  lambda?: kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda;
}

export function kinesis_AnalyticsApplicationInputsProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lambda",
      "The Lambda function configuration. See Lambda below for more details.",
      kinesis_AnalyticsApplicationInputsProcessingConfigurationLambda_GetTypes(),
      true,
      false,
    ),
  ];
}
