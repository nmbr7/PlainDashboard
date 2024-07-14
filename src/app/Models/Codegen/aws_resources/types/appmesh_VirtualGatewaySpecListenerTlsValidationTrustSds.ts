import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds {
  // Name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
  secretName?: string;
}

export function appmesh_VirtualGatewaySpecListenerTlsValidationTrustSds_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretName",
      "Name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
      [],
      true,
      false,
    ),
  ];
}
