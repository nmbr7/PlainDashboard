import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codecatalyst_DevEnvironmentRepository {
  /*
The name of the branch in a source repository.

persistent storage (` persistent_storage`) supports the following:
*/
  branchName?: string;

  // The name of the source repository.
  repositoryName?: string;
}

export function codecatalyst_DevEnvironmentRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "The name of the branch in a source repository.\n\npersistent storage (` persistent_storage`) supports the following:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of the source repository.",
      [],
      true,
      false,
    ),
  ];
}
