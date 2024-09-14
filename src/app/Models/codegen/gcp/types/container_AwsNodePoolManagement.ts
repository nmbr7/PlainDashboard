import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AwsNodePoolManagement {
  // Optional. Whether or not the nodes will be automatically repaired.
  autoRepair?: boolean;
}

export function container_AwsNodePoolManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Optional. Whether or not the nodes will be automatically repaired.",
      () => [],
      false,
      false,
    ),
  ];
}