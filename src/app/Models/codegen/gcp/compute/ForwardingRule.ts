import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_ForwardingRuleServiceDirectoryRegistrations,
  compute_ForwardingRuleServiceDirectoryRegistrations_GetTypes,
} from "../types/compute_ForwardingRuleServiceDirectoryRegistrations";

export interface ForwardingRuleArgs {
  /*
The URL of the target resource to receive the matched traffic.  For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.
The forwarded traffic must be of a type appropriate to the target object.
-  For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
-  For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
-  `vpc-sc` - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
-  `all-apis` - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.
*/
  target?: string;

  /*
This field is used along with the `backend_service` field for
internal load balancing or with the `target` field for internal
TargetInstance.
If the field is set to `TRUE`, clients can access ILB from all
regions.
Otherwise only allows access from clients in the same region as the
internal load balancer.
*/
  allowGlobalAccess?: boolean;

  /*
IP address for which this forwarding rule accepts traffic. When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced `target` or `backendService`.
While creating a forwarding rule, specifying an `IPAddress` is
required under the following circumstances:
- When the `target` is set to `targetGrpcProxy` and
`validateForProxyless` is set to `true`, the
`IPAddress` should be set to `0.0.0.0`.
- When the `target` is a Private Service Connect Google APIs
bundle, you must specify an `IPAddress`.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.
Use one of the following formats to specify an IP address while creating a
forwarding rule:
- IP address number, as in `100.1.2.3`
- IPv6 address range, as in `2600:1234::/96`
- Full resource URL, as in
`https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name`
- Partial URL or by name, as in:
- `projects/project_id/regions/region/addresses/address-name`
- `regions/region/addresses/address-name`
- `global/addresses/address-name`
- `address-name`

The forwarding rule's `target` or `backendService`,
and in most cases, also the `loadBalancingScheme`, determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
When reading an `IPAddress`, the API always returns the IP
address number.
*/
  ipAddress?: string;

  /*
Indicates whether or not this load balancer can be used as a collector for
packet mirroring. To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
`PacketMirroring` rule applies to them.
This can only be set to true for load balancers that have their
`loadBalancingScheme` set to `INTERNAL`.
*/
  isMirroringCollector?: boolean;

  /*
Labels to apply to this forwarding rule.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `ports` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,
and
- It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal protocol forwarding.
- You can specify a list of up to five ports by number, separated by
commas. The ports can be contiguous or discontiguous.
For external forwarding rules, two or more forwarding rules cannot use the
same `[IPAddress, IPProtocol]` pair if they share at least one port
number.
For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same `[IPAddress, IPProtocol]` pair if
they share at least one port number.
*/
  ports?: Array<string>;

  /*
Service Directory resources to register this forwarding rule with.
Currently, only supports a single Service Directory resource.
Structure is documented below.
*/
  serviceDirectoryRegistrations?: compute_ForwardingRuleServiceDirectoryRegistrations;

  /*
An optional prefix to the service name for this Forwarding Rule.
If specified, will be the first label of the fully qualified service
name.
The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression `a-z?` which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
This field is only used for INTERNAL load balancing.
*/
  serviceLabel?: string;

  /*
The IP address version that will be used by this forwarding rule.
Valid options are IPV4 and IPV6.
If not set, the IPv4 address will be used by default.
Possible values are: `IPV4`, `IPV6`.
*/
  ipVersion?: string;

  /*
Specifies the forwarding rule type.
For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  loadBalancingScheme?: string;

  /*
This signifies the networking tier used for configuring
this load balancer and can only take the following values:
`PREMIUM`, `STANDARD`.
For regional ForwardingRule, the valid values are `PREMIUM` and
`STANDARD`. For GlobalForwardingRule, the valid value is
`PREMIUM`.
If this field is not specified, it is assumed to be `PREMIUM`.
If `IPAddress` is specified, this value must be equal to the
networkTier of the Address.
Possible values are: `PREMIUM`, `STANDARD`.
*/
  networkTier?: string;

  /*
A reference to the region where the regional forwarding rule resides.
This field is not applicable to global forwarding rules.
*/
  region?: string;

  // If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).
  sourceIpRanges?: Array<string>;

  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `allPorts` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, SCTP, or
L3_DEFAULT.
- It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal and external protocol forwarding.
- Set this field to true to allow packets addressed to any port or packets
lacking destination port information (for example, UDP fragments after the
first fragment) to be forwarded to the backends configured with this
forwarding rule. The L3_DEFAULT protocol requires `allPorts` be set to
true.
*/
  allPorts?: boolean;

  // This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.
  allowPscGlobalAccess?: boolean;

  /*
The IP protocol to which this rule applies.
For protocol forwarding, valid
options are `TCP`, `UDP`, `ESP`,
`AH`, `SCTP`, `ICMP` and
`L3_DEFAULT`.
The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).
A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP.
Possible values are: `TCP`, `UDP`, `ESP`, `AH`, `SCTP`, `ICMP`, `L3_DEFAULT`.
*/
  ipProtocol?: string;

  // This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field.
  noAutomateDnsZone?: boolean;

  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `portRange` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,
and
- It's applicable only to the following products: external passthrough
Network Load Balancers, internal and external proxy Network Load
Balancers, internal and external Application Load Balancers, external
protocol forwarding, and Classic VPN.
- Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.
For external forwarding rules, two or more forwarding rules cannot use the
same `[IPAddress, IPProtocol]` pair, and cannot have overlapping
`portRange`s.
For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same `[IPAddress, IPProtocol]` pair, and
cannot have overlapping `portRange`s.
*/
  portRange?: string;

  // This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed
  recreateClosedPsc?: boolean;

  /*
This field identifies the subnetwork that the load balanced IP should
belong to for this Forwarding Rule, used in internal load balancing and
network load balancing with IPv6.
If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.
*/
  subnetwork?: string;

  /*
Identifies the backend service to which the forwarding rule sends traffic.
Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.
*/
  backendService?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, the name must be 1-63 characters long and match the regular
expression `a-z?` which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.
For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.


- - -
*/
  name?: string;

  /*
This field is not used for external load balancing.
For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.
For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ForwardingRule extends DS_Resource {
  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `portRange` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,
and
- It's applicable only to the following products: external passthrough
Network Load Balancers, internal and external proxy Network Load
Balancers, internal and external Application Load Balancers, external
protocol forwarding, and Classic VPN.
- Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.
For external forwarding rules, two or more forwarding rules cannot use the
same `[IPAddress, IPProtocol]` pair, and cannot have overlapping
`portRange`s.
For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same `[IPAddress, IPProtocol]` pair, and
cannot have overlapping `portRange`s.
*/
  public portRange?: string;

  /*
An optional prefix to the service name for this Forwarding Rule.
If specified, will be the first label of the fully qualified service
name.
The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression `a-z?` which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
This field is only used for INTERNAL load balancing.
*/
  public serviceLabel?: string;

  // If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).
  public sourceIpRanges?: Array<string>;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Specifies the forwarding rule type.
For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  public loadBalancingScheme?: string;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, the name must be 1-63 characters long and match the regular
expression `a-z?` which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.
For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.


- - -
*/
  public name?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
This field identifies the subnetwork that the load balanced IP should
belong to for this Forwarding Rule, used in internal load balancing and
network load balancing with IPv6.
If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.
*/
  public subnetwork?: string;

  /*
This signifies the networking tier used for configuring
this load balancer and can only take the following values:
`PREMIUM`, `STANDARD`.
For regional ForwardingRule, the valid values are `PREMIUM` and
`STANDARD`. For GlobalForwardingRule, the valid value is
`PREMIUM`.
If this field is not specified, it is assumed to be `PREMIUM`.
If `IPAddress` is specified, this value must be equal to the
networkTier of the Address.
Possible values are: `PREMIUM`, `STANDARD`.
*/
  public networkTier?: string;

  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `ports` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,
and
- It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal protocol forwarding.
- You can specify a list of up to five ports by number, separated by
commas. The ports can be contiguous or discontiguous.
For external forwarding rules, two or more forwarding rules cannot use the
same `[IPAddress, IPProtocol]` pair if they share at least one port
number.
For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same `[IPAddress, IPProtocol]` pair if
they share at least one port number.
*/
  public ports?: Array<string>;

  // This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.
  public allowPscGlobalAccess?: boolean;

  // [Output Only] The URL for the corresponding base Forwarding Rule. By base Forwarding Rule, we mean the Forwarding Rule that has the same IP address, protocol, and port settings with the current Forwarding Rule, but without sourceIPRanges specified. Always empty if the current Forwarding Rule does not have sourceIPRanges specified.
  public baseForwardingRule?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The IP address version that will be used by this forwarding rule.
Valid options are IPV4 and IPV6.
If not set, the IPv4 address will be used by default.
Possible values are: `IPV4`, `IPV6`.
*/
  public ipVersion?: string;

  /*
Indicates whether or not this load balancer can be used as a collector for
packet mirroring. To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
`PacketMirroring` rule applies to them.
This can only be set to true for load balancers that have their
`loadBalancingScheme` set to `INTERNAL`.
*/
  public isMirroringCollector?: boolean;

  /*
Labels to apply to this forwarding rule.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed
  public recreateClosedPsc?: boolean;

  /*
Service Directory resources to register this forwarding rule with.
Currently, only supports a single Service Directory resource.
Structure is documented below.
*/
  public serviceDirectoryRegistrations?: compute_ForwardingRuleServiceDirectoryRegistrations;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
IP address for which this forwarding rule accepts traffic. When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced `target` or `backendService`.
While creating a forwarding rule, specifying an `IPAddress` is
required under the following circumstances:
- When the `target` is set to `targetGrpcProxy` and
`validateForProxyless` is set to `true`, the
`IPAddress` should be set to `0.0.0.0`.
- When the `target` is a Private Service Connect Google APIs
bundle, you must specify an `IPAddress`.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.
Use one of the following formats to specify an IP address while creating a
forwarding rule:
- IP address number, as in `100.1.2.3`
- IPv6 address range, as in `2600:1234::/96`
- Full resource URL, as in
`https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name`
- Partial URL or by name, as in:
- `projects/project_id/regions/region/addresses/address-name`
- `regions/region/addresses/address-name`
- `global/addresses/address-name`
- `address-name`

The forwarding rule's `target` or `backendService`,
and in most cases, also the `loadBalancingScheme`, determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
When reading an `IPAddress`, the API always returns the IP
address number.
*/
  public ipAddress?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The PSC connection id of the PSC Forwarding Rule.
  public pscConnectionId?: string;

  /*
The internal fully qualified service name for this Forwarding Rule.
This field is only used for INTERNAL load balancing.
*/
  public serviceName?: string;

  /*
The URL of the target resource to receive the matched traffic.  For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.
The forwarded traffic must be of a type appropriate to the target object.
-  For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
-  For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
-  `vpc-sc` - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
-  `all-apis` - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.
*/
  public target?: string;

  /*
This field is used along with the `backend_service` field for
internal load balancing or with the `target` field for internal
TargetInstance.
If the field is set to `TRUE`, clients can access ILB from all
regions.
Otherwise only allows access from clients in the same region as the
internal load balancer.
*/
  public allowGlobalAccess?: boolean;

  /*
This field is not used for external load balancing.
For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.
For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.
*/
  public network?: string;

  // This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field.
  public noAutomateDnsZone?: boolean;

  /*
The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.
Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.
The `allPorts` field has the following limitations:
- It requires that the forwarding rule `IPProtocol` be TCP, UDP, SCTP, or
L3_DEFAULT.
- It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal and external protocol forwarding.
- Set this field to true to allow packets addressed to any port or packets
lacking destination port information (for example, UDP fragments after the
first fragment) to be forwarded to the backends configured with this
forwarding rule. The L3_DEFAULT protocol requires `allPorts` be set to
true.
*/
  public allPorts?: boolean;

  /*
The IP protocol to which this rule applies.
For protocol forwarding, valid
options are `TCP`, `UDP`, `ESP`,
`AH`, `SCTP`, `ICMP` and
`L3_DEFAULT`.
The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).
A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP.
Possible values are: `TCP`, `UDP`, `ESP`, `AH`, `SCTP`, `ICMP`, `L3_DEFAULT`.
*/
  public ipProtocol?: string;

  // The PSC connection status of the PSC Forwarding Rule. Possible values: `STATUS_UNSPECIFIED`, `PENDING`, `ACCEPTED`, `REJECTED`, `CLOSED`
  public pscConnectionStatus?: string;

  /*
A reference to the region where the regional forwarding rule resides.
This field is not applicable to global forwarding rules.
*/
  public region?: string;

  /*
Identifies the backend service to which the forwarding rule sends traffic.
Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.
*/
  public backendService?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "portRange",
        "The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.\nOnly packets addressed to ports in the specified range will be forwarded\nto the backends configured with this forwarding rule.\nThe `portRange` field has the following limitations:\n* It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,\nand\n* It's applicable only to the following products: external passthrough\nNetwork Load Balancers, internal and external proxy Network Load\nBalancers, internal and external Application Load Balancers, external\nprotocol forwarding, and Classic VPN.\n* Some products have restrictions on what ports can be used. See\n[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)\nfor details.\nFor external forwarding rules, two or more forwarding rules cannot use the\nsame `[IPAddress, IPProtocol]` pair, and cannot have overlapping\n`portRange`s.\nFor internal forwarding rules within the same VPC network, two or more\nforwarding rules cannot use the same `[IPAddress, IPProtocol]` pair, and\ncannot have overlapping `portRange`s.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "This field identifies the subnetwork that the load balanced IP should\nbelong to for this Forwarding Rule, used in internal load balancing and\nnetwork load balancing with IPv6.\nIf the network specified is in auto subnet mode, this field is optional.\nHowever, a subnetwork must be specified if the network is in custom subnet\nmode or when creating external forwarding rule with IPv6.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "backendService",
        "Identifies the backend service to which the forwarding rule sends traffic.\nRequired for Internal TCP/UDP Load Balancing and Network Load Balancing;\nmust be omitted for all other load balancer types.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        'The URL of the target resource to receive the matched traffic.  For\nregional forwarding rules, this target must be in the same region as the\nforwarding rule. For global forwarding rules, this target must be a global\nload balancing resource.\nThe forwarded traffic must be of a type appropriate to the target object.\n*  For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).\n*  For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:\n*  `vpc-sc` - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).\n*  `all-apis` - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).\n\nFor Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowGlobalAccess",
        "This field is used along with the `backend_service` field for\ninternal load balancing or with the `target` field for internal\nTargetInstance.\nIf the field is set to `TRUE`, clients can access ILB from all\nregions.\nOtherwise only allows access from clients in the same region as the\ninternal load balancer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingScheme",
        "Specifies the forwarding rule type.\nFor more information about forwarding rules, refer to\n[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts).\nDefault value is `EXTERNAL`.\nPossible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allPorts",
        "The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.\nOnly packets addressed to ports in the specified range will be forwarded\nto the backends configured with this forwarding rule.\nThe `allPorts` field has the following limitations:\n* It requires that the forwarding rule `IPProtocol` be TCP, UDP, SCTP, or\nL3_DEFAULT.\n* It's applicable only to the following products: internal passthrough\nNetwork Load Balancers, backend service-based external passthrough Network\nLoad Balancers, and internal and external protocol forwarding.\n* Set this field to true to allow packets addressed to any port or packets\nlacking destination port information (for example, UDP fragments after the\nfirst fragment) to be forwarded to the backends configured with this\nforwarding rule. The L3_DEFAULT protocol requires `allPorts` be set to\ntrue.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipProtocol",
        'The IP protocol to which this rule applies.\nFor protocol forwarding, valid\noptions are `TCP`, `UDP`, `ESP`,\n`AH`, `SCTP`, `ICMP` and\n`L3_DEFAULT`.\nThe valid IP protocols are different for different load balancing products\nas described in [Load balancing\nfeatures](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).\nA Forwarding Rule with protocol L3_DEFAULT can attach with target instance or\nbackend service with UNSPECIFIED protocol.\nA forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP.\nPossible values are: `TCP`, `UDP`, `ESP`, `AH`, `SCTP`, `ICMP`, `L3_DEFAULT`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this forwarding rule.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ports",
        "The `ports`, `portRange`, and `allPorts` fields are mutually exclusive.\nOnly packets addressed to ports in the specified range will be forwarded\nto the backends configured with this forwarding rule.\nThe `ports` field has the following limitations:\n* It requires that the forwarding rule `IPProtocol` be TCP, UDP, or SCTP,\nand\n* It's applicable only to the following products: internal passthrough\nNetwork Load Balancers, backend service-based external passthrough Network\nLoad Balancers, and internal protocol forwarding.\n* You can specify a list of up to five ports by number, separated by\ncommas. The ports can be contiguous or discontiguous.\nFor external forwarding rules, two or more forwarding rules cannot use the\nsame `[IPAddress, IPProtocol]` pair if they share at least one port\nnumber.\nFor internal forwarding rules within the same VPC network, two or more\nforwarding rules cannot use the same `[IPAddress, IPProtocol]` pair if\nthey share at least one port number.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceDirectoryRegistrations",
        "Service Directory resources to register this forwarding rule with.\nCurrently, only supports a single Service Directory resource.\nStructure is documented below.",
        () => compute_ForwardingRuleServiceDirectoryRegistrations_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceLabel",
        "An optional prefix to the service name for this Forwarding Rule.\nIf specified, will be the first label of the fully qualified service\nname.\nThe label must be 1-63 characters long, and comply with RFC1035.\nSpecifically, the label must be 1-63 characters long and match the\nregular expression `a-z?` which means the first\ncharacter must be a lowercase letter, and all following characters\nmust be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\nThis field is only used for INTERNAL load balancing.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourceIpRanges",
        "If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-63 characters long, and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).\nSpecifically, the name must be 1-63 characters long and match the regular\nexpression `a-z?` which means the first\ncharacter must be a lowercase letter, and all following characters must\nbe a dash, lowercase letter, or digit, except the last character, which\ncannot be a dash.\nFor Private Service Connect forwarding rules that forward traffic to Google\nAPIs, the forwarding rule name must be a 1-20 characters string with\nlowercase letters and numbers and must start with a letter.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "This field is not used for external load balancing.\nFor Internal TCP/UDP Load Balancing, this field identifies the network that\nthe load balanced IP should belong to for this Forwarding Rule.\nIf the subnetwork is specified, the network of the subnetwork will be used.\nIf neither subnetwork nor this field is specified, the default network will\nbe used.\nFor Private Service Connect forwarding rules that forward traffic to Google\nAPIs, a network must be provided.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "IP address for which this forwarding rule accepts traffic. When a client\nsends traffic to this IP address, the forwarding rule directs the traffic\nto the referenced `target` or `backendService`.\nWhile creating a forwarding rule, specifying an `IPAddress` is\nrequired under the following circumstances:\n* When the `target` is set to `targetGrpcProxy` and\n`validateForProxyless` is set to `true`, the\n`IPAddress` should be set to `0.0.0.0`.\n* When the `target` is a Private Service Connect Google APIs\nbundle, you must specify an `IPAddress`.\n\nOtherwise, you can optionally specify an IP address that references an\nexisting static (reserved) IP address resource. When omitted, Google Cloud\nassigns an ephemeral IP address.\nUse one of the following formats to specify an IP address while creating a\nforwarding rule:\n* IP address number, as in `100.1.2.3`\n* IPv6 address range, as in `2600:1234::/96`\n* Full resource URL, as in\n`https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name`\n* Partial URL or by name, as in:\n* `projects/project_id/regions/region/addresses/address-name`\n* `regions/region/addresses/address-name`\n* `global/addresses/address-name`\n* `address-name`\n\nThe forwarding rule's `target` or `backendService`,\nand in most cases, also the `loadBalancingScheme`, determine the\ntype of IP address that you can use. For detailed information, see\n[IP address\nspecifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).\nWhen reading an `IPAddress`, the API always returns the IP\naddress number.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isMirroringCollector",
        "Indicates whether or not this load balancer can be used as a collector for\npacket mirroring. To prevent mirroring loops, instances behind this\nload balancer will not have their traffic mirrored even if a\n`PacketMirroring` rule applies to them.\nThis can only be set to true for load balancers that have their\n`loadBalancingScheme` set to `INTERNAL`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "A reference to the region where the regional forwarding rule resides.\nThis field is not applicable to global forwarding rules.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowPscGlobalAccess",
        "This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noAutomateDnsZone",
        "This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipVersion",
        "The IP address version that will be used by this forwarding rule.\nValid options are IPV4 and IPV6.\nIf not set, the IPv4 address will be used by default.\nPossible values are: `IPV4`, `IPV6`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkTier",
        "This signifies the networking tier used for configuring\nthis load balancer and can only take the following values:\n`PREMIUM`, `STANDARD`.\nFor regional ForwardingRule, the valid values are `PREMIUM` and\n`STANDARD`. For GlobalForwardingRule, the valid value is\n`PREMIUM`.\nIf this field is not specified, it is assumed to be `PREMIUM`.\nIf `IPAddress` is specified, this value must be equal to the\nnetworkTier of the Address.\nPossible values are: `PREMIUM`, `STANDARD`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "recreateClosedPsc",
        "This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
