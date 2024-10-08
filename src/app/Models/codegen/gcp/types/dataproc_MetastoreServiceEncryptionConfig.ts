import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_MetastoreServiceEncryptionConfig {
  /*
The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  kmsKey?: string;
}

export function dataproc_MetastoreServiceEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "The fully qualified customer provided Cloud KMS key name to use for customer data encryption.\nUse the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`",
      () => [],
      true,
      true,
    ),
  ];
}
