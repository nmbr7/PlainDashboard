import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum {
  /*
A one word, unique name for this repository. This is the
`repo id` in the yum config file and also the `display_name` if
`display_name` is omitted. This id is also used as the unique identifier
when checking for resource conflicts.
*/
  id?: string;

  // The location of the repository directory.
  baseUrl?: string;

  // The display name of the repository.
  displayName?: string;

  // URIs of GPG keys.
  gpgKeys?: Array<string>;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "A one word, unique name for this repository. This is the\n`repo id` in the yum config file and also the `display_name` if\n`display_name` is omitted. This id is also used as the unique identifier\nwhen checking for resource conflicts.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "baseUrl",
      "The location of the repository directory.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name of the repository.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gpgKeys",
      "URIs of GPG keys.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
