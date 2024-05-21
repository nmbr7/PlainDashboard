import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  // A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]
  repositoryBase?: string;

  // Specific repository from the base.
  repositoryPath?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryBase",
      'A common public repository base for Apt, e.g. \'"debian/dists/buster"\' Possible values: ["DEBIAN", "UBUNTU"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryPath",
      "Specific repository from the base.",
      [],
      true,
      false,
    ),
  ];
}
