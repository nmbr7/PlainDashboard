import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getVirtualServiceSpecProviderVirtualNode {
  //
  virtualNodeName?: string;
}

export function appmesh_getVirtualServiceSpecProviderVirtualNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualNodeName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}