import { getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption } from "./getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption";

export interface getClusterClusterAutoscalingAutoProvisioningDefaultManagement {
  // Specifies the Auto Upgrade knobs for the node pool.
  UpgradeOptions?: Array<getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption>;

  // Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  AutoRepair?: boolean;

  // Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  AutoUpgrade?: boolean;
}
