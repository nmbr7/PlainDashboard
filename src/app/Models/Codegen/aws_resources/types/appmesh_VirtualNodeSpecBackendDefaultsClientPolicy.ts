import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicy {
  // Transport Layer Security (TLS) client policy.
  tls?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tls",
      "Transport Layer Security (TLS) client policy.",
      appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls_GetTypes(),
      false,
      false,
    ),
  ];
}
