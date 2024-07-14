import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identitystore_UserPhoneNumbers {
  // When `true`, this is the primary phone number associated with the user.
  primary?: boolean;

  // The type of phone number.
  type?: string;

  // The user's phone number.
  value?: string;
}

export function identitystore_UserPhoneNumbers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "primary",
      "When `true`, this is the primary phone number associated with the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of phone number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The user's phone number.",
      [],
      false,
      false,
    ),
  ];
}
