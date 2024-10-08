import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig {
  // A bit indicating if all of the group's per-instance configs (listed in the output of a listPerInstanceConfigs API call) have status EFFECTIVE or there are no per-instance-configs.
  allEffective?: boolean;
}

export function compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allEffective",
      "A bit indicating if all of the group's per-instance configs (listed in the output of a listPerInstanceConfigs API call) have status EFFECTIVE or there are no per-instance-configs.",
      () => [],
      true,
      false,
    ),
  ];
}
