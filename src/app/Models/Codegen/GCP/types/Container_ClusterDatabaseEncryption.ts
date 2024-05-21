import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterDatabaseEncryption {
  /*
the key to use to encrypt/decrypt secrets.  See the [DatabaseEncryption definition](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.DatabaseEncryption) for more information.

<a name="nested_enable_k8s_beta_apis"></a>The `enable_k8s_beta_apis` block supports:
*/
  keyName?: string;

  // `ENCRYPTED` or `DECRYPTED`
  state?: string;
}

export function container_ClusterDatabaseEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyName",
      'the key to use to encrypt/decrypt secrets.  See the [DatabaseEncryption definition](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.DatabaseEncryption) for more information.\n\n<a name="nested_enable_k8s_beta_apis"></a>The `enable_k8s_beta_apis` block supports:',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "`ENCRYPTED` or `DECRYPTED`",
      [],
      true,
      false,
    ),
  ];
}
