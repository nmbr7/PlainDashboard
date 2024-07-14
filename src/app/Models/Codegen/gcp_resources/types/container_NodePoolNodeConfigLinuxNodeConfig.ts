import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_NodePoolNodeConfigLinuxNodeConfig {
  // cgroupMode specifies the cgroup mode to be used on the node.
  cgroupMode?: string;

  // The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  sysctls?: Map<string, string>;
}

export function container_NodePoolNodeConfigLinuxNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "sysctls",
      "The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cgroupMode",
      "cgroupMode specifies the cgroup mode to be used on the node.",
      [],
      false,
      false,
    ),
  ];
}
