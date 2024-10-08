import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {
  // SSE-KMS encryption. See SSE KMS below for more details.
  sseKms?: s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms;

  // SSE-S3 encryption. An empty configuration block `{}` should be used.
  sseS3s?: Array<s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3>;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sseKms",
      "SSE-KMS encryption. See SSE KMS below for more details.",
      () =>
        s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sseS3s",
      "SSE-S3 encryption. An empty configuration block `{}` should be used.",
      () =>
        s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3_GetTypes(),
      false,
      false,
    ),
  ];
}
