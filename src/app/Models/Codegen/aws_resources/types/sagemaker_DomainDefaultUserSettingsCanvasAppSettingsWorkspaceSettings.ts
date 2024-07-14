import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings {
  // The Amazon S3 bucket used to store artifacts generated by Canvas. Updating the Amazon S3 location impacts existing configuration settings, and Canvas users no longer have access to their artifacts. Canvas users must log out and log back in to apply the new location.
  s3ArtifactPath?: string;

  // The Amazon Web Services Key Management Service (KMS) encryption key ID that is used to encrypt artifacts generated by Canvas in the Amazon S3 bucket.
  s3KmsKeyId?: string;
}

export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3ArtifactPath",
      "The Amazon S3 bucket used to store artifacts generated by Canvas. Updating the Amazon S3 location impacts existing configuration settings, and Canvas users no longer have access to their artifacts. Canvas users must log out and log back in to apply the new location.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KmsKeyId",
      "The Amazon Web Services Key Management Service (KMS) encryption key ID that is used to encrypt artifacts generated by Canvas in the Amazon S3 bucket.",
      [],
      false,
      false,
    ),
  ];
}
