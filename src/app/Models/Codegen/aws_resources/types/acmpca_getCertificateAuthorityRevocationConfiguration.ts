import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration,
  acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes,
} from "./acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration";
import {
  acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration,
  acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes,
} from "./acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration";

export interface acmpca_getCertificateAuthorityRevocationConfiguration {
  //
  crlConfigurations?: Array<acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration>;

  //
  ocspConfigurations?: Array<acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration>;
}

export function acmpca_getCertificateAuthorityRevocationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "crlConfigurations",
      "",
      acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ocspConfigurations",
      "",
      acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
