import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kms_CryptoKeyPrimary {
  // The resource name for the CryptoKey.
  name?: string;

  /*
(Output)
The current state of the CryptoKeyVersion.
*/
  state?: string;
}

export function kms_CryptoKeyPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The resource name for the CryptoKey.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nThe current state of the CryptoKeyVersion.",
      [],
      false,
      false,
    ),
  ];
}
