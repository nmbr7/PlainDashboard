import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  // Criteria for determining a SAN's match.
  match?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a SAN's match.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
