import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy {
  // Number of blue nodes to drain in a batch.
  batchNodeCount?: number;

  // Percentage of the blue pool nodes to drain in a batch.
  batchPercentage?: number;

  // Soak time after each batch gets drained.
  batchSoakDuration?: string;
}

export function container_getClusterNodePoolUpgradeSettingBlueGreenSettingStandardRolloutPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "batchPercentage",
      "Percentage of the blue pool nodes to drain in a batch.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "batchSoakDuration",
      "Soak time after each batch gets drained.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "batchNodeCount",
      "Number of blue nodes to drain in a batch.",
      () => [],
      true,
      false,
    ),
  ];
}
