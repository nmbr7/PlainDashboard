import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig {
  /*
enabled is a flag to mark if DHCP IP allocation is
used for VMware user clusters.
*/
  enabled?: boolean;
}

export function gkeonprem_VMwareClusterNetworkConfigDhcpIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "enabled is a flag to mark if DHCP IP allocation is\nused for VMware user clusters.",
      () => [],
      true,
      false,
    ),
  ];
}
