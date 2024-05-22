import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate";
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation";

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls {
  // Listener's TLS certificate.
  certificate?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;

  // Whether the policy is enforced. Default is `true`.
  enforce?: boolean;

  // One or more ports that the policy is enforced for.
  ports?: Array<number>;

  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificate",
      "Listener's TLS certificate.",
      appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforce",
      "Whether the policy is enforced. Default is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "One or more ports that the policy is enforced for.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validation",
      "Listener's Transport Layer Security (TLS) validation context.",
      appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation_GetTypes(),
      true,
      false,
    ),
  ];
}
