import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceTemplateReservationAffinitySpecificReservation,
  compute_InstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./compute_InstanceTemplateReservationAffinitySpecificReservation";

export interface compute_InstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  specificReservation?: compute_InstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  type?: string;
}

export function compute_InstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "specificReservation",
      "Specifies the label selector for the reservation to use..\nStructure is documented below.",
      compute_InstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
  ];
}
