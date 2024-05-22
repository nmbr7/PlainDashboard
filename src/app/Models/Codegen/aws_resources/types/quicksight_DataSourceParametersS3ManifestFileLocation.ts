import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSourceParametersS3ManifestFileLocation {
  // The name of the bucket that contains the manifest file.
  bucket?: string;

  // The key of the manifest file within the bucket.
  key?: string;
}

export function quicksight_DataSourceParametersS3ManifestFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the bucket that contains the manifest file.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the manifest file within the bucket.",
      [],
      true,
      false,
    ),
  ];
}
