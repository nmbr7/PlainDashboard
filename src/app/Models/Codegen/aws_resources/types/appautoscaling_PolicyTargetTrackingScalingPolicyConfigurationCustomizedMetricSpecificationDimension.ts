import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension {
  // Value of the dimension.
  value?: string;

  // Name of the policy. Must be between 1 and 255 characters in length.
  name?: string;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the policy. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the dimension.",
      [],
      true,
      false,
    ),
  ];
}
