import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_MembershipAuthority {
  //
  issuer?: string;
}

export function gkehub_MembershipAuthority_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "issuer", "", [], true, true)];
}
