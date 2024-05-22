import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_AccessGrantGrantee,
  s3control_AccessGrantGrantee_GetTypes,
} from "../types/s3control_AccessGrantGrantee";
import {
  s3control_AccessGrantAccessGrantsLocationConfiguration,
  s3control_AccessGrantAccessGrantsLocationConfiguration_GetTypes,
} from "../types/s3control_AccessGrantAccessGrantsLocationConfiguration";

export interface AccessGrantArgs {
  // See Location Configuration below for more details.
  accessGrantsLocationConfiguration?: s3control_AccessGrantAccessGrantsLocationConfiguration;

  // The ID of the S3 Access Grants location to with the access grant is giving access.
  accessGrantsLocationId?: string;

  //
  accountId?: string;

  // See Grantee below for more details.
  grantee?: s3control_AccessGrantGrantee;

  // The access grant's level of access. Valid values: `READ`, `WRITE`, `READWRITE`.
  permission?: string;

  // If you are creating an access grant that grants access to only one object, set this to `Object`. Valid values: `Object`.
  s3PrefixType?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AccessGrant extends Resource {
  // See Location Configuration below for more details.
  public accessGrantsLocationConfiguration?: s3control_AccessGrantAccessGrantsLocationConfiguration;

  //
  public accountId?: string;

  // If you are creating an access grant that grants access to only one object, set this to `Object`. Valid values: `Object`.
  public s3PrefixType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the S3 Access Grant.
  public accessGrantArn?: string;

  // Unique ID of the S3 Access Grant.
  public accessGrantId?: string;

  // See Grantee below for more details.
  public grantee?: s3control_AccessGrantGrantee;

  // The access grant's level of access. Valid values: `READ`, `WRITE`, `READWRITE`.
  public permission?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ID of the S3 Access Grants location to with the access grant is giving access.
  public accessGrantsLocationId?: string;

  // The access grant's scope.
  public grantScope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "accountId", "", [], false, false),
      new DynamicUIProps(
        InputType.Object,
        "grantee",
        "See Grantee below for more details.",
        s3control_AccessGrantGrantee_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "permission",
        "The access grant's level of access. Valid values: `READ`, `WRITE`, `READWRITE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3PrefixType",
        "If you are creating an access grant that grants access to only one object, set this to `Object`. Valid values: `Object`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessGrantsLocationConfiguration",
        "See Location Configuration below for more details.",
        s3control_AccessGrantAccessGrantsLocationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessGrantsLocationId",
        "The ID of the S3 Access Grants location to with the access grant is giving access.",
        [],
        true,
        false,
      ),
    ];
  }
}
