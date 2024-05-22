import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identitystore_UserExternalId,
  identitystore_UserExternalId_GetTypes,
} from "../types/identitystore_UserExternalId";
import {
  identitystore_UserEmails,
  identitystore_UserEmails_GetTypes,
} from "../types/identitystore_UserEmails";
import {
  identitystore_UserName,
  identitystore_UserName_GetTypes,
} from "../types/identitystore_UserName";
import {
  identitystore_UserPhoneNumbers,
  identitystore_UserPhoneNumbers_GetTypes,
} from "../types/identitystore_UserPhoneNumbers";
import {
  identitystore_UserAddresses,
  identitystore_UserAddresses_GetTypes,
} from "../types/identitystore_UserAddresses";

export interface UserArgs {
  // Details about the user's email. At most 1 email is allowed. Detailed below.
  emails?: identitystore_UserEmails;

  // Details about the user's full name. Detailed below.
  name?: identitystore_UserName;

  // An alternate name for the user.
  nickname?: string;

  // The preferred language of the user.
  preferredLanguage?: string;

  /*
A unique string used to identify the user. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. The limit is 128 characters.

The following arguments are optional:
*/
  userName?: string;

  // The name that is typically displayed when the user is referenced.
  displayName?: string;

  // The globally unique identifier for the identity store that this user is in.
  identityStoreId?: string;

  // The user's geographical region or location.
  locale?: string;

  // Details about the user's phone number. At most 1 phone number is allowed. Detailed below.
  phoneNumbers?: identitystore_UserPhoneNumbers;

  // The user's time zone.
  timezone?: string;

  // The user's title.
  title?: string;

  // Details about the user's address. At most 1 address is allowed. Detailed below.
  addresses?: identitystore_UserAddresses;

  // An URL that may be associated with the user.
  profileUrl?: string;

  // The user type.
  userType?: string;
}
export class User extends Resource {
  // Details about the user's email. At most 1 email is allowed. Detailed below.
  public emails?: identitystore_UserEmails;

  // Details about the user's phone number. At most 1 phone number is allowed. Detailed below.
  public phoneNumbers?: identitystore_UserPhoneNumbers;

  // An URL that may be associated with the user.
  public profileUrl?: string;

  // The user's time zone.
  public timezone?: string;

  // Details about the user's address. At most 1 address is allowed. Detailed below.
  public addresses?: identitystore_UserAddresses;

  // The user's geographical region or location.
  public locale?: string;

  // Details about the user's full name. Detailed below.
  public name?: identitystore_UserName;

  // An alternate name for the user.
  public nickname?: string;

  /*
A unique string used to identify the user. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. The limit is 128 characters.

The following arguments are optional:
*/
  public userName?: string;

  // The user type.
  public userType?: string;

  // The globally unique identifier for the identity store that this user is in.
  public identityStoreId?: string;

  // The preferred language of the user.
  public preferredLanguage?: string;

  // The name that is typically displayed when the user is referenced.
  public displayName?: string;

  // A list of identifiers issued to this resource by an external identity provider.
  public externalIds?: Array<identitystore_UserExternalId>;

  // The user's title.
  public title?: string;

  // The identifier for this user in the identity store.
  public userId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The name that is typically displayed when the user is referenced.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "locale",
        "The user's geographical region or location.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "phoneNumbers",
        "Details about the user's phone number. At most 1 phone number is allowed. Detailed below.",
        identitystore_UserPhoneNumbers_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "profileUrl",
        "An URL that may be associated with the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredLanguage",
        "The preferred language of the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "name",
        "Details about the user's full name. Detailed below.",
        identitystore_UserName_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "addresses",
        "Details about the user's address. At most 1 address is allowed. Detailed below.",
        identitystore_UserAddresses_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "emails",
        "Details about the user's email. At most 1 email is allowed. Detailed below.",
        identitystore_UserEmails_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userType",
        "The user type.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityStoreId",
        "The globally unique identifier for the identity store that this user is in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "A unique string used to identify the user. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. The limit is 128 characters.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timezone",
        "The user's time zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "title",
        "The user's title.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nickname",
        "An alternate name for the user.",
        [],
        false,
        false,
      ),
    ];
  }
}
