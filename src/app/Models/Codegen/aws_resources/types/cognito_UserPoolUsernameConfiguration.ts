import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolUsernameConfiguration {
  // Whether username case sensitivity will be applied for all users in the user pool through Cognito APIs.
  caseSensitive?: boolean;
}

export function cognito_UserPoolUsernameConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "caseSensitive",
      "Whether username case sensitivity will be applied for all users in the user pool through Cognito APIs.",
      [],
      true,
      true,
    ),
  ];
}
