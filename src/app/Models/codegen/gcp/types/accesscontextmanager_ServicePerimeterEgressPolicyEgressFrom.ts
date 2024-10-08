import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource,
  accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource_GetTypes,
} from "./accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource";

export interface accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom {
  /*
A list of identities that are allowed access through this `EgressPolicy`.
Should be in the format of email address. The email address should
represent individual user or service account only.
*/
  identities?: Array<string>;

  /*
Specifies the type of identities that are allowed access to outside the
perimeter. If left unspecified, then members of `identities` field will
be allowed access.
Possible values are: `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.
*/
  identityType?: string;

  /*
Whether to enforce traffic restrictions based on `sources` field. If the `sources` field is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`.
Possible values are: `SOURCE_RESTRICTION_UNSPECIFIED`, `SOURCE_RESTRICTION_ENABLED`, `SOURCE_RESTRICTION_DISABLED`.
*/
  sourceRestriction?: string;

  /*
Sources that this EgressPolicy authorizes access from.
Structure is documented below.
*/
  sources?: Array<accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource>;
}

export function accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "identities",
      "A list of identities that are allowed access through this `EgressPolicy`.\nShould be in the format of email address. The email address should\nrepresent individual user or service account only.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityType",
      "Specifies the type of identities that are allowed access to outside the\nperimeter. If left unspecified, then members of `identities` field will\nbe allowed access.\nPossible values are: `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceRestriction",
      "Whether to enforce traffic restrictions based on `sources` field. If the `sources` field is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`.\nPossible values are: `SOURCE_RESTRICTION_UNSPECIFIED`, `SOURCE_RESTRICTION_ENABLED`, `SOURCE_RESTRICTION_DISABLED`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sources",
      "Sources that this EgressPolicy authorizes access from.\nStructure is documented below.",
      () =>
        accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource_GetTypes(),
      false,
      false,
    ),
  ];
}
