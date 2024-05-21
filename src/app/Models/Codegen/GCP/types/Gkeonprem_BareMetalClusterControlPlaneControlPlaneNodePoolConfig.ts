import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig,
  gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig";

export interface gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig {
  /*
The generic configuration for a node pool running the control plane.
Structure is documented below.
*/
  nodePoolConfig?: gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nodePoolConfig",
      "The generic configuration for a node pool running the control plane.\nStructure is documented below.",
      gkeonprem_BareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
