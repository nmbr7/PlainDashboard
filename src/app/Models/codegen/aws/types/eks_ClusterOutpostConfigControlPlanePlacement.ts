import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_ClusterOutpostConfigControlPlanePlacement {
  // The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation.
  groupName?: string;
}

export function eks_ClusterOutpostConfigControlPlanePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "groupName",
      "The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation.",
      () => [],
      true,
      true,
    ),
  ];
}
