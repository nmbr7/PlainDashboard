import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_GroupWarmPoolInstanceReusePolicy {
  // Whether instances in the Auto Scaling group can be returned to the warm pool on scale in.
  reuseOnScaleIn?: boolean;
}

export function autoscaling_GroupWarmPoolInstanceReusePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "reuseOnScaleIn",
      "Whether instances in the Auto Scaling group can be returned to the warm pool on scale in.",
      [],
      false,
      false,
    ),
  ];
}
