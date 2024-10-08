import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption,
  container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes,
} from "./container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption";

export interface container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement {
  // Specifies the Auto Upgrade knobs for the node pool.
  upgradeOptions?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption>;

  // Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  autoRepair?: boolean;

  // Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  autoUpgrade?: boolean;
}

export function container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "upgradeOptions",
      "Specifies the Auto Upgrade knobs for the node pool.",
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoUpgrade",
      "Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.",
      () => [],
      true,
      false,
    ),
  ];
}
