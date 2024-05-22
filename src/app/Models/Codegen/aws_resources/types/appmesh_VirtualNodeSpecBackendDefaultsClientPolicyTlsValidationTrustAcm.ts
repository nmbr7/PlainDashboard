import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  // One or more ACM ARNs.
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificateAuthorityArns",
      "One or more ACM ARNs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
