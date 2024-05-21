import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kms_getKMSCryptoKeyPrimary {
  /*
The CryptoKey's name.
A CryptoKey’s name belonging to the specified Google Cloud Platform KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
*/
  name?: string;

  // The current state of the CryptoKeyVersion.
  state?: string;
}

export function kms_getKMSCryptoKeyPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The CryptoKey's name.\nA CryptoKey’s name belonging to the specified Google Cloud Platform KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The current state of the CryptoKeyVersion.",
      [],
      true,
      false,
    ),
  ];
}
