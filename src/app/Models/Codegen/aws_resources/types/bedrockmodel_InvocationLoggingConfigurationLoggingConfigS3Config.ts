import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config {
  // S3 bucket name.
  bucketName?: string;

  // S3 prefix.
  keyPrefix?: string;
}

export function bedrockmodel_InvocationLoggingConfigurationLoggingConfigS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "S3 bucket name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyPrefix",
      "S3 prefix.",
      [],
      false,
      false,
    ),
  ];
}
