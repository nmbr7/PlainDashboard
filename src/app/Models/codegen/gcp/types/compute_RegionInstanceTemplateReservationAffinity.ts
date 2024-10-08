import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_RegionInstanceTemplateReservationAffinitySpecificReservation,
  compute_RegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./compute_RegionInstanceTemplateReservationAffinitySpecificReservation";

export interface compute_RegionInstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  specificReservation?: compute_RegionInstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  type?: string;
}

export function compute_RegionInstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of reservation from which this instance can consume resources.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "specificReservation",
      "Specifies the label selector for the reservation to use..\nStructure is documented below.",
      () =>
        compute_RegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
  ];
}
