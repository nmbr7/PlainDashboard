import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNodePoolPlacementPolicy {
  /*
Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);
`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.
*/
  type?: string;

  // If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  policyName?: string;

  // TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  tpuTopology?: string;
}

export function container_ClusterNodePoolPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);\n`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyName",
      "If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tpuTopology",
      "TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies",
      [],
      false,
      false,
    ),
  ];
}
