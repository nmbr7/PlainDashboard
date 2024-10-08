import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getMachineTypesMachineTypeDeprecated {
  // The URL of the suggested replacement for a deprecated machine type.
  replacement?: string;

  // The deprecation state of this resource. This can be `ACTIVE`, `DEPRECATED`, `OBSOLETE`, or `DELETED`.
  state?: string;
}

export function compute_getMachineTypesMachineTypeDeprecated_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "replacement",
      "The URL of the suggested replacement for a deprecated machine type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The deprecation state of this resource. This can be `ACTIVE`, `DEPRECATED`, `OBSOLETE`, or `DELETED`.",
      () => [],
      true,
      false,
    ),
  ];
}
