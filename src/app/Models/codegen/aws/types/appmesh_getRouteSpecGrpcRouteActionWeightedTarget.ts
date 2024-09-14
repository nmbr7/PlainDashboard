import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getRouteSpecGrpcRouteActionWeightedTarget {
  //
  port?: number;

  //
  virtualNode?: string;

  //
  weight?: number;
}

export function appmesh_getRouteSpecGrpcRouteActionWeightedTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "virtualNode",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "weight", "", () => [], true, false),
  ];
}