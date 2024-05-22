import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy";

export interface appmesh_getVirtualGatewaySpecBackendDefault {
  //
  clientPolicies?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy>;
}

export function appmesh_getVirtualGatewaySpecBackendDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientPolicies",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
