import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail,
  cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail_GetTypes,
} from "./cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail";

export interface cloudidentity_getGroupMembershipsMembershipRole {
  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  name?: string;

  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
*/
  expiryDetails?: Array<cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail>;
}

export function cloudidentity_getGroupMembershipsMembershipRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "expiryDetails",
      "The MembershipRole expiry details, only supported for MEMBER role.\nOther roles cannot be accompanied with MEMBER role having expiry.",
      cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail_GetTypes(),
      true,
      false,
    ),
  ];
}
