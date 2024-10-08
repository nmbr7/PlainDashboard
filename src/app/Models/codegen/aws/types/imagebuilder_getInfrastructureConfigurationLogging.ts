import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_getInfrastructureConfigurationLoggingS3Log,
  imagebuilder_getInfrastructureConfigurationLoggingS3Log_GetTypes,
} from "./imagebuilder_getInfrastructureConfigurationLoggingS3Log";

export interface imagebuilder_getInfrastructureConfigurationLogging {
  // Nested list of S3 logs settings.
  s3Logs?: Array<imagebuilder_getInfrastructureConfigurationLoggingS3Log>;
}

export function imagebuilder_getInfrastructureConfigurationLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "s3Logs",
      "Nested list of S3 logs settings.",
      () => imagebuilder_getInfrastructureConfigurationLoggingS3Log_GetTypes(),
      true,
      false,
    ),
  ];
}
