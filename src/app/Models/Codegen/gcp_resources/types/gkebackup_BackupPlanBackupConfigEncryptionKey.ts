import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkebackup_BackupPlanBackupConfigEncryptionKey {
  // Google Cloud KMS encryption key. Format: projects/-/locations/-/keyRings/-/cryptoKeys/-
  gcpKmsEncryptionKey?: string;
}

export function gkebackup_BackupPlanBackupConfigEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gcpKmsEncryptionKey",
      "Google Cloud KMS encryption key. Format: projects/*/locations/*/keyRings/*/cryptoKeys/*",
      [],
      true,
      false,
    ),
  ];
}
