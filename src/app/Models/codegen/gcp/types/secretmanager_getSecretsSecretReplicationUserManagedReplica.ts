import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption,
  secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from "./secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface secretmanager_getSecretsSecretReplicationUserManagedReplica {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  customerManagedEncryptions?: Array<secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data.
  location?: string;
}

export function secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customerManagedEncryptions",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      () =>
        secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "The canonical IDs of the location to replicate data.",
      () => [],
      true,
      false,
    ),
  ];
}
