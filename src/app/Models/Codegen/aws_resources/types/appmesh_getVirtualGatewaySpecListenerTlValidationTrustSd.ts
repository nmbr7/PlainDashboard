import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd {
  //
  secretName?: string;
}

export function appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "secretName", "", [], true, false),
  ];
}
