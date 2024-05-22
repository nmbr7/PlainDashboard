import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecListenerPortMapping {
  // Port used for the port mapping.
  port?: number;

  // Protocol used for the port mapping. Valid values are `http`, `http2`, `tcp` and `grpc`.
  protocol?: string;
}

export function appmesh_VirtualNodeSpecListenerPortMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port used for the port mapping.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol used for the port mapping. Valid values are `http`, `http2`, `tcp` and `grpc`.",
      [],
      true,
      false,
    ),
  ];
}
