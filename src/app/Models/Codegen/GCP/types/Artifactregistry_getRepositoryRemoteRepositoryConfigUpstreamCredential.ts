import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential,
  artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential {
  // Use username and password to access the remote repository.
  usernamePasswordCredentials?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential>;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "usernamePasswordCredentials",
      "Use username and password to access the remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential_GetTypes(),
      true,
      false,
    ),
  ];
}
