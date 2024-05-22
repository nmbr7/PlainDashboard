import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics {
  // Whether CloudWatch publishing for S3 Storage Lens metrics is enabled.
  enabled?: boolean;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether CloudWatch publishing for S3 Storage Lens metrics is enabled.",
      [],
      true,
      false,
    ),
  ];
}
