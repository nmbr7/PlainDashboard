import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getGatewayRouteSpecGrpcRouteAction,
  appmesh_getGatewayRouteSpecGrpcRouteAction_GetTypes,
} from "./appmesh_getGatewayRouteSpecGrpcRouteAction";
import {
  appmesh_getGatewayRouteSpecGrpcRouteMatch,
  appmesh_getGatewayRouteSpecGrpcRouteMatch_GetTypes,
} from "./appmesh_getGatewayRouteSpecGrpcRouteMatch";

export interface appmesh_getGatewayRouteSpecGrpcRoute {
  //
  actions?: Array<appmesh_getGatewayRouteSpecGrpcRouteAction>;

  //
  matches?: Array<appmesh_getGatewayRouteSpecGrpcRouteMatch>;
}

export function appmesh_getGatewayRouteSpecGrpcRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "",
      appmesh_getGatewayRouteSpecGrpcRouteAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getGatewayRouteSpecGrpcRouteMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
