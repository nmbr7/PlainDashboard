import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  /*
The [networking tier][network-tier] used for configuring
this instance template. This field can take the following values: PREMIUM or
STANDARD. If this field is not specified, it is assumed to be PREMIUM.
*/
  networkTier?: string;

  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  publicPtrDomainName?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.
  externalIpv6?: string;

  // The prefix length of the external IPv6 range.
  externalIpv6PrefixLength?: string;

  // The name of the instance template. One of `name`, `filter` or `self_link_unique` must be provided.
  name?: string;
}

export function compute_getInstanceTemplateNetworkInterfaceIpv6AccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkTier",
      "The [networking tier][network-tier] used for configuring\nthis instance template. This field can take the following values: PREMIUM or\nSTANDARD. If this field is not specified, it is assumed to be PREMIUM.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicPtrDomainName",
      "The domain name to be used when creating DNSv6 records for the external IPv6 ranges.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalIpv6",
      "The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalIpv6PrefixLength",
      "The prefix length of the external IPv6 range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance template. One of `name`, `filter` or `self_link_unique` must be provided.",
      () => [],
      true,
      false,
    ),
  ];
}
