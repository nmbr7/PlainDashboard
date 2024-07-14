import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  // Certificate trust chain for a certificate stored on the file system of the mesh endpoint that the proxy is running on. Must be between 1 and 255 characters in length.
  certificateChain?: string;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateChain",
      "Certificate trust chain for a certificate stored on the file system of the mesh endpoint that the proxy is running on. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
