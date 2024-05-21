import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential {
  // Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/-/secrets/-/versions/-`.
  userTokenSecretVersion?: string;

  /*
(Output)
Output only. The username associated to this token.
*/
  username?: string;
}

export function cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userTokenSecretVersion",
      "Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/*/secrets/*/versions/*`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "(Output)\nOutput only. The username associated to this token.",
      [],
      false,
      false,
    ),
  ];
}
