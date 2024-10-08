import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_TriggerGithubPush {
  // Regex of branches to match.  Specify only one of branch or tag.
  branch?: string;

  // When true, only trigger a build if the revision regex does NOT match the gitRef regex.
  invertRegex?: boolean;

  // Regex of tags to match.  Specify only one of branch or tag.
  tag?: string;
}

export function cloudbuild_TriggerGithubPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branch",
      "Regex of branches to match.  Specify only one of branch or tag.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "When true, only trigger a build if the revision regex does NOT match the gitRef regex.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Regex of tags to match.  Specify only one of branch or tag.",
      () => [],
      false,
      false,
    ),
  ];
}
