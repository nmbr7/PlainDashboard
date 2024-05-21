import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository {
  // Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]
  publicRepository?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      'Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]',
      [],
      true,
      false,
    ),
  ];
}
