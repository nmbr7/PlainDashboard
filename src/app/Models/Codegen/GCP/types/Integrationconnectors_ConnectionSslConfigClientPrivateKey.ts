import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionSslConfigClientPrivateKey {
  // Secret version of Secret Value for Config variable.
  secretVersion?: string;
}

export function integrationconnectors_ConnectionSslConfigClientPrivateKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretVersion",
      "Secret version of Secret Value for Config variable.",
      [],
      true,
      false,
    ),
  ];
}
