import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
  // A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3 bucket might contain multiple metadata files. Use `s3_prefix` to include only the desired metadata files.
  s3Prefix?: string;
}

export function kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Prefix",
      "A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3 bucket might contain multiple metadata files. Use `s3_prefix` to include only the desired metadata files.",
      [],
      false,
      false,
    ),
  ];
}
