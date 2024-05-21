import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository {
  /*
Address of the remote repository.
Default value is `PYPI`.
Possible values are: `PYPI`.
*/
  publicRepository?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      "Address of the remote repository.\nDefault value is `PYPI`.\nPossible values are: `PYPI`.",
      [],
      false,
      true,
    ),
  ];
}
