import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository {
  // One of the publicly available Yum repositories supported by Artifact Registry.
  publicRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository>;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "publicRepositories",
      "One of the publicly available Yum repositories supported by Artifact Registry.",
      artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
