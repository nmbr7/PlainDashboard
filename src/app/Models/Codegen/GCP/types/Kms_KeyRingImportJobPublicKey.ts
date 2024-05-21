import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kms_KeyRingImportJobPublicKey {
  /*
(Output)
The public key, encoded in PEM format. For more information, see the RFC 7468 sections
for General Considerations and Textual Encoding of Subject Public Key Info.
*/
  pem?: string;
}

export function kms_KeyRingImportJobPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pem",
      "(Output)\nThe public key, encoded in PEM format. For more information, see the RFC 7468 sections\nfor General Considerations and Textual Encoding of Subject Public Key Info.",
      [],
      false,
      false,
    ),
  ];
}
