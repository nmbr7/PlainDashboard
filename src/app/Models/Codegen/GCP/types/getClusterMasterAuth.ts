import { getClusterMasterAuthClientCertificateConfig } from "./getClusterMasterAuthClientCertificateConfig";

export interface getClusterMasterAuth {
  // Base64 encoded private key used by clients to authenticate to the cluster endpoint.
  ClientKey?: string;

  // Base64 encoded public certificate that is the root of trust for the cluster.
  ClusterCaCertificate?: string;

  // Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
  ClientCertificate?: string;

  // Whether client certificate authorization is enabled for this cluster.
  ClientCertificateConfigs?: Array<getClusterMasterAuthClientCertificateConfig>;
}
