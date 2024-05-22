import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_RouteSpecGrpcRouteActionWeightedTarget,
  appmesh_RouteSpecGrpcRouteActionWeightedTarget_GetTypes,
} from "./appmesh_RouteSpecGrpcRouteActionWeightedTarget";

export interface appmesh_RouteSpecGrpcRouteAction {
  /*
Targets that traffic is routed to when a request matches the route.
You can specify one or more targets and their relative weights with which to distribute traffic.
*/
  weightedTargets?: Array<appmesh_RouteSpecGrpcRouteActionWeightedTarget>;
}

export function appmesh_RouteSpecGrpcRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "weightedTargets",
      "Targets that traffic is routed to when a request matches the route.\nYou can specify one or more targets and their relative weights with which to distribute traffic.",
      appmesh_RouteSpecGrpcRouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
