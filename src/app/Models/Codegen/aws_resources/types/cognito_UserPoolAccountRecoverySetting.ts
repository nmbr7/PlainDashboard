import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cognito_UserPoolAccountRecoverySettingRecoveryMechanism,
  cognito_UserPoolAccountRecoverySettingRecoveryMechanism_GetTypes,
} from "./cognito_UserPoolAccountRecoverySettingRecoveryMechanism";

export interface cognito_UserPoolAccountRecoverySetting {
  // List of Account Recovery Options of the following structure:
  recoveryMechanisms?: Array<cognito_UserPoolAccountRecoverySettingRecoveryMechanism>;
}

export function cognito_UserPoolAccountRecoverySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "recoveryMechanisms",
      "List of Account Recovery Options of the following structure:",
      cognito_UserPoolAccountRecoverySettingRecoveryMechanism_GetTypes(),
      false,
      false,
    ),
  ];
}
