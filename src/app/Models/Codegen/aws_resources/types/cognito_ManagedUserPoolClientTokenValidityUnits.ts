import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_ManagedUserPoolClientTokenValidityUnits {
  // Time unit for the value in `access_token_validity` and defaults to `hours`.
  accessToken?: string;

  // Time unit for the value in `id_token_validity`, and it defaults to `hours`.
  idToken?: string;

  // Time unit for the value in `refresh_token_validity` and defaults to `days`.
  refreshToken?: string;
}

export function cognito_ManagedUserPoolClientTokenValidityUnits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessToken",
      "Time unit for the value in `access_token_validity` and defaults to `hours`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "idToken",
      "Time unit for the value in `id_token_validity`, and it defaults to `hours`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "refreshToken",
      "Time unit for the value in `refresh_token_validity` and defaults to `days`.",
      [],
      false,
      false,
    ),
  ];
}
