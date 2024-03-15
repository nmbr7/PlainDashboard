import { ServicePerimeterEgressPolicyEgressFromSource } from "./ServicePerimeterEgressPolicyEgressFromSource";

export interface ServicePerimeterEgressPolicyEgressFrom {
  /*
A list of identities that are allowed access through this `EgressPolicy`.
Should be in the format of email address. The email address should
represent individual user or service account only.
*/
  Identities?: Array<string>;

  /*
Specifies the type of identities that are allowed access to outside the
perimeter. If left unspecified, then members of `identities` field will
be allowed access.
Possible values are: `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.
*/
  IdentityType?: string;

  /*
Whether to enforce traffic restrictions based on `sources` field. If the `sources` field is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`.
Possible values are: `SOURCE_RESTRICTION_UNSPECIFIED`, `SOURCE_RESTRICTION_ENABLED`, `SOURCE_RESTRICTION_DISABLED`.
*/
  SourceRestriction?: string;

  /*
Sources that this EgressPolicy authorizes access from.
Structure is documented below.
*/
  Sources?: Array<ServicePerimeterEgressPolicyEgressFromSource>;
}
