import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureMembershipConfigmanagementHierarchyController {
  // Whether hierarchical resource quota is enabled in this cluster.
  enableHierarchicalResourceQuota?: boolean;

  // Whether pod tree labels are enabled in this cluster.
  enablePodTreeLabels?: boolean;

  // Whether Hierarchy Controller is enabled in this cluster.
  enabled?: boolean;
}

export function gkehub_FeatureMembershipConfigmanagementHierarchyController_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableHierarchicalResourceQuota",
      "Whether hierarchical resource quota is enabled in this cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePodTreeLabels",
      "Whether pod tree labels are enabled in this cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Hierarchy Controller is enabled in this cluster.",
      () => [],
      false,
      false,
    ),
  ];
}
