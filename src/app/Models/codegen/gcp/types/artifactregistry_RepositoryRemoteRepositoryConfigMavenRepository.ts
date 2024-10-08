import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository {
  /*
Address of the remote repository.
Default value is `MAVEN_CENTRAL`.
Possible values are: `MAVEN_CENTRAL`.
*/
  publicRepository?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      "Address of the remote repository.\nDefault value is `MAVEN_CENTRAL`.\nPossible values are: `MAVEN_CENTRAL`.",
      () => [],
      false,
      true,
    ),
  ];
}
