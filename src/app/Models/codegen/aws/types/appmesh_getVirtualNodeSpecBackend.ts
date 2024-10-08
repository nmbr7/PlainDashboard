import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecBackendVirtualService,
  appmesh_getVirtualNodeSpecBackendVirtualService_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualService";

export interface appmesh_getVirtualNodeSpecBackend {
  //
  virtualServices?: Array<appmesh_getVirtualNodeSpecBackendVirtualService>;
}

export function appmesh_getVirtualNodeSpecBackend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "virtualServices",
      "",
      () => appmesh_getVirtualNodeSpecBackendVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
