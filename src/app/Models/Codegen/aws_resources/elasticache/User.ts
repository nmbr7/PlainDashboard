import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticache_UserAuthenticationMode,
  elasticache_UserAuthenticationMode_GetTypes,
} from "../types/elasticache_UserAuthenticationMode";

export interface UserArgs {
  // Passwords used for this user. You can create up to two passwords for each user.
  passwords?: Array<string>;

  // A list of tags to be added to this resource. A tag is a key-value pair.
  tags?: Map<string, string>;

  // The ID of the user.
  userId?: string;

  /*
The username of the user.

The following arguments are optional:
*/
  userName?: string;

  // Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.
  accessString?: string;

  // Denotes the user's authentication properties. Detailed below.
  authenticationMode?: elasticache_UserAuthenticationMode;

  // The current supported value is `REDIS`.
  engine?: string;

  // Indicates a password is not required for this user.
  noPasswordRequired?: boolean;
}
export class User extends Resource {
  // A list of tags to be added to this resource. A tag is a key-value pair.
  public tags?: Map<string, string>;

  // The ID of the user.
  public userId?: string;

  // The ARN of the created ElastiCache User.
  public arn?: string;

  // Denotes the user's authentication properties. Detailed below.
  public authenticationMode?: elasticache_UserAuthenticationMode;

  // The current supported value is `REDIS`.
  public engine?: string;

  // Indicates a password is not required for this user.
  public noPasswordRequired?: boolean;

  // Passwords used for this user. You can create up to two passwords for each user.
  public passwords?: Array<string>;

  // Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.
  public accessString?: string;

  //
  public tagsAll?: Map<string, string>;

  /*
The username of the user.

The following arguments are optional:
*/
  public userName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "passwords",
        "Passwords used for this user. You can create up to two passwords for each user.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A list of tags to be added to this resource. A tag is a key-value pair.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userId",
        "The ID of the user.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The username of the user.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessString",
        "Access permissions string used for this user. See [Specifying Permissions Using an Access String](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html#Access-string) for more details.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authenticationMode",
        "Denotes the user's authentication properties. Detailed below.",
        elasticache_UserAuthenticationMode_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The current supported value is `REDIS`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noPasswordRequired",
        "Indicates a password is not required for this user.",
        [],
        false,
        false,
      ),
    ];
  }
}
