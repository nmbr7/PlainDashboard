import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_BareMetalAdminClusterNodeConfig {
  /*
The maximum number of pods a node can run. The size of the CIDR range
assigned to the node will be derived from this parameter.
*/
  maxPodsPerNode?: number;
}

export function gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      "The maximum number of pods a node can run. The size of the CIDR range\nassigned to the node will be derived from this parameter.",
      () => [],
      false,
      false,
    ),
  ];
}
