import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualServiceSpecProvider,
  appmesh_getVirtualServiceSpecProvider_GetTypes,
} from "./appmesh_getVirtualServiceSpecProvider";

export interface appmesh_getVirtualServiceSpec {
  //
  providers?: Array<appmesh_getVirtualServiceSpecProvider>;
}

export function appmesh_getVirtualServiceSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "providers",
      "",
      () => appmesh_getVirtualServiceSpecProvider_GetTypes(),
      true,
      false,
    ),
  ];
}
