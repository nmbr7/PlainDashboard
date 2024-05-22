import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool {
  /*
If true, avoid using IPs ending in .0 or .255.
This avoids buggy consumer devices mistakenly dropping IPv4 traffic for
those special IP addresses.
*/
  avoidBuggyIps?: boolean;

  /*
If true, prevent IP addresses from being automatically assigned.

<a name="nested_dataplane_v2"></a>The `dataplane_v2` block supports:
*/
  manualAssign?: boolean;

  // The name of the address pool.
  pool?: string;

  /*
The addresses that are part of this pool. Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).
*/
  addresses?: Array<string>;
}

export function gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "avoidBuggyIps",
      "If true, avoid using IPs ending in .0 or .255.\nThis avoids buggy consumer devices mistakenly dropping IPv4 traffic for\nthose special IP addresses.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "manualAssign",
      'If true, prevent IP addresses from being automatically assigned.\n\n<a name="nested_dataplane_v2"></a>The `dataplane_v2` block supports:',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pool",
      "The name of the address pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "addresses",
      "The addresses that are part of this pool. Each address\nmust be either in the CIDR form (1.2.3.0/24) or range\nform (1.2.3.1-1.2.3.5).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
