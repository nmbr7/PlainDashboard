import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PublicKeyArgs {
  // An optional comment about the public key.
  comment?: string;

  // The encoded public key that you want to add to CloudFront to use with features like field-level encryption.
  encodedKey?: string;

  // The name for the public key. By default generated by this provider. Note: Do not set if using the key's id in another resource (e.g. KeyGroup) since it will result in a dependency error from AWS. Instead, it is recommended to use Pulumi autonaming by leaving this property unset (default behavior) or set the `namePrefix` property to allow the provider to autoname the resource.
  name?: string;

  /*
The name for the public key. Conflicts with `name`.

--NOTE:-- When setting `encoded_key` value, there needs a newline at the end of string. Otherwise, multiple runs of pulumi will want to recreate the `aws.cloudfront.PublicKey` resource.
*/
  namePrefix?: string;
}
export class PublicKey extends DS_Resource {
  // An optional comment about the public key.
  public comment?: string;

  // The encoded public key that you want to add to CloudFront to use with features like field-level encryption.
  public encodedKey?: string;

  // The current version of the public key. For example: `E2QWRUHAPOMQZL`.
  public etag?: string;

  // The name for the public key. By default generated by this provider. Note: Do not set if using the key's id in another resource (e.g. KeyGroup) since it will result in a dependency error from AWS. Instead, it is recommended to use Pulumi autonaming by leaving this property unset (default behavior) or set the `namePrefix` property to allow the provider to autoname the resource.
  public name?: string;

  /*
The name for the public key. Conflicts with `name`.

--NOTE:-- When setting `encoded_key` value, there needs a newline at the end of string. Otherwise, multiple runs of pulumi will want to recreate the `aws.cloudfront.PublicKey` resource.
*/
  public namePrefix?: string;

  // Internal value used by CloudFront to allow future updates to the public key configuration.
  public callerReference?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "An optional comment about the public key.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encodedKey",
        "The encoded public key that you want to add to CloudFront to use with features like field-level encryption.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the public key. By default generated by this provider. Note: Do not set if using the key's id in another resource (e.g. KeyGroup) since it will result in a dependency error from AWS. Instead, it is recommended to use Pulumi autonaming by leaving this property unset (default behavior) or set the `namePrefix` property to allow the provider to autoname the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "The name for the public key. Conflicts with `name`.\n\n**NOTE:** When setting `encoded_key` value, there needs a newline at the end of string. Otherwise, multiple runs of pulumi will want to recreate the `aws.cloudfront.PublicKey` resource.",
        () => [],
        false,
        true,
      ),
    ];
  }
}