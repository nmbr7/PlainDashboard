import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_SiteLocation {
  // Address of the location.
  address?: string;

  // Latitude of the location.
  latitude?: string;

  // Longitude of the location.
  longitude?: string;
}

export function networkmanager_SiteLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "longitude",
      "Longitude of the location.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "Address of the location.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latitude",
      "Latitude of the location.",
      () => [],
      false,
      false,
    ),
  ];
}
