import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
  // The ID of the Capacity Reservation in which to run the instance.
  capacityReservationId?: string;

  // The ARN of the Capacity Reservation resource group in which to run the instance.
  capacityReservationResourceGroupArn?: string;
}

export function ec2_LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacityReservationId",
      "The ID of the Capacity Reservation in which to run the instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityReservationResourceGroupArn",
      "The ARN of the Capacity Reservation resource group in which to run the instance.",
      () => [],
      false,
      false,
    ),
  ];
}
