import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iam_getWorkloadIdentityPoolProviderSaml {
  // SAML Identity provider configuration metadata xml doc.
  idpMetadataXml?: string;
}

export function iam_getWorkloadIdentityPoolProviderSaml_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "idpMetadataXml",
      "SAML Identity provider configuration metadata xml doc.",
      [],
      true,
      false,
    ),
  ];
}
