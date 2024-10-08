import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identityplatform_ConfigClientPermissions {
  // When true, end users cannot delete their account on the associated project through any of our API methods
  disabledUserDeletion?: boolean;

  // When true, end users cannot sign up for a new account on the associated project through any of our API methods
  disabledUserSignup?: boolean;
}

export function identityplatform_ConfigClientPermissions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disabledUserSignup",
      "When true, end users cannot sign up for a new account on the associated project through any of our API methods",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabledUserDeletion",
      "When true, end users cannot delete their account on the associated project through any of our API methods",
      () => [],
      false,
      false,
    ),
  ];
}
