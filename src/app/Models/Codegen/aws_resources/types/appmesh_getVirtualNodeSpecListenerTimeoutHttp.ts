import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest,
  appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle,
  appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle";

export interface appmesh_getVirtualNodeSpecListenerTimeoutHttp {
  //
  idles?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle>;

  //
  perRequests?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest>;
}

export function appmesh_getVirtualNodeSpecListenerTimeoutHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutHttpIdle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perRequests",
      "",
      appmesh_getVirtualNodeSpecListenerTimeoutHttpPerRequest_GetTypes(),
      true,
      false,
    ),
  ];
}
