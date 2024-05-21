import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterMasterAuthClientCertificateConfig,
  container_ClusterMasterAuthClientCertificateConfig_GetTypes,
} from "./container_ClusterMasterAuthClientCertificateConfig";

export interface container_ClusterMasterAuth {
  // Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
  clientCertificate?: string;

  // Whether client certificate authorization is enabled for this cluster.  For example:
  clientCertificateConfig?: container_ClusterMasterAuthClientCertificateConfig;

  // Base64 encoded private key used by clients to authenticate to the cluster endpoint.
  clientKey?: string;

  // Base64 encoded public certificate that is the root of trust for the cluster.
  clusterCaCertificate?: string;
}

export function container_ClusterMasterAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientCertificate",
      "Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "clientCertificateConfig",
      "Whether client certificate authorization is enabled for this cluster.  For example:",
      container_ClusterMasterAuthClientCertificateConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientKey",
      "Base64 encoded private key used by clients to authenticate to the cluster endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCaCertificate",
      "Base64 encoded public certificate that is the root of trust for the cluster.",
      [],
      false,
      false,
    ),
  ];
}
