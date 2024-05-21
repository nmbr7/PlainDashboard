import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames {
  // Subject Alternative Name
  subjectAlternativeName?: string;
}

export function apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subjectAlternativeName",
      "Subject Alternative Name",
      [],
      false,
      true,
    ),
  ];
}
