import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identityplatform_ConfigSignInPhoneNumber {
  // Whether phone number auth is enabled for the project or not.
  enabled?: boolean;

  // A map of <test phone number, fake code> that can be used for phone auth testing.
  testPhoneNumbers?: Map<string, string>;
}

export function identityplatform_ConfigSignInPhoneNumber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether phone number auth is enabled for the project or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "testPhoneNumbers",
      "A map of <test phone number, fake code> that can be used for phone auth testing.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
