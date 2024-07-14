import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectSourceGitSubmodulesConfig {
  // Whether to fetch Git submodules for the AWS CodeBuild build project.
  fetchSubmodules?: boolean;
}

export function codebuild_ProjectSourceGitSubmodulesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "fetchSubmodules",
      "Whether to fetch Git submodules for the AWS CodeBuild build project.",
      [],
      true,
      false,
    ),
  ];
}