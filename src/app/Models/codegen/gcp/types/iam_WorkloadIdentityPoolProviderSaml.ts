import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_WorkloadIdentityPoolProviderSaml {
  // SAML Identity provider configuration metadata xml doc.
  idpMetadataXml?: string;
}

export function iam_WorkloadIdentityPoolProviderSaml_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "idpMetadataXml",
      "SAML Identity provider configuration metadata xml doc.",
      () => [],
      true,
      false,
    ),
  ];
}