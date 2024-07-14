import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_getGroupWarmPoolInstanceReusePolicy {
  // Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in.
  reuseOnScaleIn?: boolean;
}

export function autoscaling_getGroupWarmPoolInstanceReusePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "reuseOnScaleIn",
      "Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in.",
      [],
      true,
      false,
    ),
  ];
}
