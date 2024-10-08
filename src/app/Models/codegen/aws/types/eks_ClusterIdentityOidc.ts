import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_ClusterIdentityOidc {
  // Issuer URL for the OpenID Connect identity provider.
  issuer?: string;
}

export function eks_ClusterIdentityOidc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "Issuer URL for the OpenID Connect identity provider.",
      () => [],
      false,
      false,
    ),
  ];
}
