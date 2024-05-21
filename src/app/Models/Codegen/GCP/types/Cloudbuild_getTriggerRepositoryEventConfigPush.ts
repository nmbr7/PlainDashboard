import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_getTriggerRepositoryEventConfigPush {
  /*
Regex of tags to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  tag?: string;

  /*
Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  branch?: string;

  // If true, only trigger a build if the revision regex does NOT match the git_ref regex.
  invertRegex?: boolean;
}

export function cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Regex of tags to match.\n\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branch",
      "Regex of branches to match.\n\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "If true, only trigger a build if the revision regex does NOT match the git_ref regex.",
      [],
      true,
      false,
    ),
  ];
}
