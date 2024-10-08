import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceReservationAffinitySpecificReservation,
  compute_InstanceReservationAffinitySpecificReservation_GetTypes,
} from "./compute_InstanceReservationAffinitySpecificReservation";

export interface compute_InstanceReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  specificReservation?: compute_InstanceReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  type?: string;
}

export function compute_InstanceReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "specificReservation",
      "Specifies the label selector for the reservation to use..\nStructure is documented below.",
      () => compute_InstanceReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of reservation from which this instance can consume resources.",
      () => [],
      true,
      true,
    ),
  ];
}
