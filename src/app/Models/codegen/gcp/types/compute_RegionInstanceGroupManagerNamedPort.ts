import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionInstanceGroupManagerNamedPort {
  // The name of the port.
  name?: string;

  /*
The port number.
- - -
*/
  port?: number;
}

export function compute_RegionInstanceGroupManagerNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the port.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number.\n- - -",
      () => [],
      true,
      false,
    ),
  ];
}
