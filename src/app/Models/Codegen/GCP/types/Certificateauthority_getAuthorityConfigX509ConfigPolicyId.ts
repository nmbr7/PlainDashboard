import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificateauthority_getAuthorityConfigX509ConfigPolicyId {
  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  objectIdPaths?: Array<number>;
}

export function certificateauthority_getAuthorityConfigX509ConfigPolicyId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "objectIdPaths",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
