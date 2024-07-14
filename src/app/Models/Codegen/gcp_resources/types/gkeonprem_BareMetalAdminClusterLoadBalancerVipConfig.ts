import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.
  controlPlaneVip?: string;
}

export function gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "controlPlaneVip",
      "The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.",
      [],
      true,
      false,
    ),
  ];
}
