import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecListenerHealthCheck,
  appmesh_getVirtualGatewaySpecListenerHealthCheck_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerHealthCheck";
import {
  appmesh_getVirtualGatewaySpecListenerPortMapping,
  appmesh_getVirtualGatewaySpecListenerPortMapping_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerPortMapping";
import {
  appmesh_getVirtualGatewaySpecListenerTl,
  appmesh_getVirtualGatewaySpecListenerTl_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTl";
import {
  appmesh_getVirtualGatewaySpecListenerConnectionPool,
  appmesh_getVirtualGatewaySpecListenerConnectionPool_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerConnectionPool";

export interface appmesh_getVirtualGatewaySpecListener {
  //
  healthChecks?: Array<appmesh_getVirtualGatewaySpecListenerHealthCheck>;

  //
  portMappings?: Array<appmesh_getVirtualGatewaySpecListenerPortMapping>;

  //
  tls?: Array<appmesh_getVirtualGatewaySpecListenerTl>;

  //
  connectionPools?: Array<appmesh_getVirtualGatewaySpecListenerConnectionPool>;
}

export function appmesh_getVirtualGatewaySpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "healthChecks",
      "",
      () => appmesh_getVirtualGatewaySpecListenerHealthCheck_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "portMappings",
      "",
      () => appmesh_getVirtualGatewaySpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tls",
      "",
      () => appmesh_getVirtualGatewaySpecListenerTl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "connectionPools",
      "",
      () => appmesh_getVirtualGatewaySpecListenerConnectionPool_GetTypes(),
      true,
      false,
    ),
  ];
}
