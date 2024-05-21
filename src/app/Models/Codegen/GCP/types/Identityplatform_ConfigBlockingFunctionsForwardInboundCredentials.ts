import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identityplatform_ConfigBlockingFunctionsForwardInboundCredentials {
  // Whether to pass the user's OAuth identity provider's access token.
  accessToken?: boolean;

  // Whether to pass the user's OIDC identity provider's ID token.
  idToken?: boolean;

  // Whether to pass the user's OAuth identity provider's refresh token.
  refreshToken?: boolean;
}

export function identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "accessToken",
      "Whether to pass the user's OAuth identity provider's access token.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "idToken",
      "Whether to pass the user's OIDC identity provider's ID token.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "refreshToken",
      "Whether to pass the user's OAuth identity provider's refresh token.",
      [],
      false,
      false,
    ),
  ];
}
