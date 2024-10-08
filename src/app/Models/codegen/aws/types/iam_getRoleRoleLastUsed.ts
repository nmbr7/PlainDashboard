import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_getRoleRoleLastUsed {
  // The date and time, in RFC 3339 format, that the role was last used.
  lastUsedDate?: string;

  // The name of the AWS Region in which the role was last used.
  region?: string;
}

export function iam_getRoleRoleLastUsed_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastUsedDate",
      "The date and time, in RFC 3339 format, that the role was last used.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The name of the AWS Region in which the role was last used.",
      () => [],
      true,
      false,
    ),
  ];
}
