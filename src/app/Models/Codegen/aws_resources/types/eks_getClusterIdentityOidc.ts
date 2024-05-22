import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_getClusterIdentityOidc {
  // Issuer URL for the OpenID Connect identity provider.
  issuer?: string;
}

export function eks_getClusterIdentityOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "Issuer URL for the OpenID Connect identity provider.",
      [],
      true,
      false,
    ),
  ];
}
