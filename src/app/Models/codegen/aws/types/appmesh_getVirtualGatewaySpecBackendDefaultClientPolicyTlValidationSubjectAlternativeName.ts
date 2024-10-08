import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName {
  //
  matches?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
