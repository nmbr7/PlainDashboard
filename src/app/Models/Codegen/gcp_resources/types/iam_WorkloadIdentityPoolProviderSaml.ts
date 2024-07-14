import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      true,
      false,
    ),
  ];
}
