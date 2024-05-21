import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getInstanceGroupManagerStatusAllInstancesConfig {
  // A bit indicating whether this configuration has been applied to all managed instances in the group.
  effective?: boolean;
}

export function compute_getInstanceGroupManagerStatusAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "effective",
      "A bit indicating whether this configuration has been applied to all managed instances in the group.",
      [],
      true,
      false,
    ),
  ];
}
