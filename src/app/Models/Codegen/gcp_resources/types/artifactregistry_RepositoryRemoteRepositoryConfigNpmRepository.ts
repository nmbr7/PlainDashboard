import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository {
  /*
Address of the remote repository.
Default value is `NPMJS`.
Possible values are: `NPMJS`.
*/
  publicRepository?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      "Address of the remote repository.\nDefault value is `NPMJS`.\nPossible values are: `NPMJS`.",
      [],
      false,
      true,
    ),
  ];
}
