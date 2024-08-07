import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped {
  // The resource name of the KMS CryptoKey to use for unwrapping.
  cryptoKeyName?: string;

  /*
The wrapped data crypto key.
A base64-encoded string.
*/
  wrappedKey?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cryptoKeyName",
      "The resource name of the KMS CryptoKey to use for unwrapping.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "wrappedKey",
      "The wrapped data crypto key.\nA base64-encoded string.",
      [],
      true,
      false,
    ),
  ];
}
