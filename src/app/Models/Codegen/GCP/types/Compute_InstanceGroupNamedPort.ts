import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceGroupNamedPort {
  // The name which the port will be mapped to.
  name?: string;

  // The port number to map the name to.
  port?: number;
}

export function compute_InstanceGroupNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name which the port will be mapped to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number to map the name to.",
      [],
      true,
      false,
    ),
  ];
}
