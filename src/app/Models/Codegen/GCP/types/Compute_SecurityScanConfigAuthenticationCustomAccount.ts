import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SecurityScanConfigAuthenticationCustomAccount {
  // The login form URL of the website.
  loginUrl?: string;

  /*
The password of the custom account. The credential is stored encrypted
in GCP.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // The user name of the custom account.
  username?: string;
}

export function compute_SecurityScanConfigAuthenticationCustomAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "loginUrl",
      "The login form URL of the website.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password of the custom account. The credential is stored encrypted\nin GCP.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user name of the custom account.",
      [],
      true,
      false,
    ),
  ];
}
