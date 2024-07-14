import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getGatewayRouteSpecGrpcRouteMatch {
  //
  port?: number;

  //
  serviceName?: string;
}

export function appmesh_getGatewayRouteSpecGrpcRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "serviceName", "", [], true, false),
  ];
}
