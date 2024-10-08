import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface signer_getSigningProfileSignatureValidityPeriod {
  //
  type?: string;

  //
  value?: number;
}

export function signer_getSigningProfileSignatureValidityPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "value", "", () => [], true, false),
  ];
}
