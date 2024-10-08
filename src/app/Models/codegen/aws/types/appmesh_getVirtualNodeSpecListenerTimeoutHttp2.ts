import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest,
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest";
import {
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle,
  appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle";

export interface appmesh_getVirtualNodeSpecListenerTimeoutHttp2 {
  //
  idles?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle>;

  //
  perRequests?: Array<appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest>;
}

export function appmesh_getVirtualNodeSpecListenerTimeoutHttp2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idles",
      "",
      () => appmesh_getVirtualNodeSpecListenerTimeoutHttp2Idle_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perRequests",
      "",
      () => appmesh_getVirtualNodeSpecListenerTimeoutHttp2PerRequest_GetTypes(),
      true,
      false,
    ),
  ];
}
