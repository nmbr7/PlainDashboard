export interface FlexibleAppVersionNetwork {
  /*
Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.
If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
*/
  Subnetwork?: string;

  // List of ports, or port pairs, to forward from the virtual machine to the application container.
  ForwardedPorts?: Array<string>;

  // Tag to apply to the instance during creation.
  InstanceTag?: string;

  // Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.
  Name?: string;

  // Enable session affinity.
  SessionAffinity?: boolean;
}
