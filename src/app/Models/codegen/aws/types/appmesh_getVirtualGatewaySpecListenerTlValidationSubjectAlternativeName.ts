import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch,
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch";

export interface appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName {
  //
  matches?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch>;
}

export function appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      () =>
        appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeNameMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
