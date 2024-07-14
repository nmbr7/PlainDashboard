import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation,
  networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation_GetTypes,
} from "./networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation";

export interface networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfiguration {
  // A block value of AWS Region locations where you're creating Core Network Edges. Detailed below.
  edgeLocations?: Array<networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation>;

  // The Classless Inter-Domain Routing (CIDR) block range used to create tunnels for AWS Transit Gateway Connect. The format is standard AWS CIDR range (for example, `10.0.1.0/24`). You can optionally define the inside CIDR in the Core Network Edges section per Region. The minimum is a `/24` for IPv4 or `/64` for IPv6. You can provide multiple `/24` subnets or a larger CIDR range. If you define a larger CIDR range, new Core Network Edges will be automatically assigned `/24` and `/64` subnets from the larger CIDR. an Inside CIDR block is required for attaching Connect attachments to a Core Network Edge.
  insideCidrBlocks?: Array<string>;

  // Indicates whether the core network forwards traffic over multiple equal-cost routes using VPN. The value can be either `true` or `false`. The default is `true`.
  vpnEcmpSupport?: boolean;

  // List of strings containing Autonomous System Numbers (ASNs) to assign to Core Network Edges. By default, the core network automatically assigns an ASN for each Core Network Edge but you can optionally define the ASN in the edge-locations for each Region. The ASN uses an array of integer ranges only from `64512` to `65534` and `4200000000` to `4294967294` expressed as a string like `"64512-65534"`. No other ASN ranges can be used.
  asnRanges?: Array<string>;
}

export function networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "vpnEcmpSupport",
      "Indicates whether the core network forwards traffic over multiple equal-cost routes using VPN. The value can be either `true` or `false`. The default is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "asnRanges",
      'List of strings containing Autonomous System Numbers (ASNs) to assign to Core Network Edges. By default, the core network automatically assigns an ASN for each Core Network Edge but you can optionally define the ASN in the edge-locations for each Region. The ASN uses an array of integer ranges only from `64512` to `65534` and `4200000000` to `4294967294` expressed as a string like `"64512-65534"`. No other ASN ranges can be used.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "edgeLocations",
      "A block value of AWS Region locations where you're creating Core Network Edges. Detailed below.",
      networkmanager_getCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "insideCidrBlocks",
      "The Classless Inter-Domain Routing (CIDR) block range used to create tunnels for AWS Transit Gateway Connect. The format is standard AWS CIDR range (for example, `10.0.1.0/24`). You can optionally define the inside CIDR in the Core Network Edges section per Region. The minimum is a `/24` for IPv4 or `/64` for IPv6. You can provide multiple `/24` subnets or a larger CIDR range. If you define a larger CIDR range, new Core Network Edges will be automatically assigned `/24` and `/64` subnets from the larger CIDR. an Inside CIDR block is required for attaching Connect attachments to a Core Network Edge.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
