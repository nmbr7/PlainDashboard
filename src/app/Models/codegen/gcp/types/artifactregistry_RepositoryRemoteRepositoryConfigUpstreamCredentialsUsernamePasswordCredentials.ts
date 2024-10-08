import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
  /*
The Secret Manager key version that holds the password to access the
remote repository. Must be in the format of
`projects/{project}/secrets/{secret}/versions/{version}`.
*/
  passwordSecretVersion?: string;

  // The username to access the remote repository.
  username?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "passwordSecretVersion",
      "The Secret Manager key version that holds the password to access the\nremote repository. Must be in the format of\n`projects/{project}/secrets/{secret}/versions/{version}`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The username to access the remote repository.",
      () => [],
      false,
      true,
    ),
  ];
}
