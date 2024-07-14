import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  // A KMS key ARN that is used to encrypt the connection password. If connection password protection is enabled, the caller of CreateConnection and UpdateConnection needs at least `kms:Encrypt` permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog.
  awsKmsKeyId?: string;

  // When set to `true`, passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently of the catalog encryption.
  returnConnectionPasswordEncrypted?: boolean;
}

export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "awsKmsKeyId",
      "A KMS key ARN that is used to encrypt the connection password. If connection password protection is enabled, the caller of CreateConnection and UpdateConnection needs at least `kms:Encrypt` permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "returnConnectionPasswordEncrypted",
      "When set to `true`, passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently of the catalog encryption.",
      [],
      true,
      false,
    ),
  ];
}
