import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_BitbucketServerConfigConnectedRepository {
  // Identifier for the project storing the repository.
  projectKey?: string;

  // Identifier for the repository.
  repoSlug?: string;
}

export function cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectKey",
      "Identifier for the project storing the repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repoSlug",
      "Identifier for the repository.",
      [],
      true,
      false,
    ),
  ];
}
