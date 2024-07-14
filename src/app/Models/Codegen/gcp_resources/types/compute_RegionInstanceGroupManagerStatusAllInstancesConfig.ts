import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RegionInstanceGroupManagerStatusAllInstancesConfig {
  // A bit indicating whether this configuration has been applied to all managed instances in the group.
  effective?: boolean;
}

export function compute_RegionInstanceGroupManagerStatusAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "effective",
      "A bit indicating whether this configuration has been applied to all managed instances in the group.",
      [],
      false,
      false,
    ),
  ];
}
