import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicy,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicy_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicy";

export interface appmesh_getVirtualNodeSpecBackendDefault {
  //
  clientPolicies?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicy>;
}

export function appmesh_getVirtualNodeSpecBackendDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientPolicies",
      "",
      () => appmesh_getVirtualNodeSpecBackendDefaultClientPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
