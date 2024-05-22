import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccessGrantsInstanceArgs {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  accountId?: string;

  // The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.
  identityCenterArn?: string;
}
export class AccessGrantsInstance extends Resource {
  // Amazon Resource Name (ARN) of the S3 Access Grants instance.
  public accessGrantsInstanceArn?: string;

  // Unique ID of the S3 Access Grants instance.
  public accessGrantsInstanceId?: string;

  //
  public accountId?: string;

  // The ARN of the AWS IAM Identity Center instance application; a subresource of the original Identity Center instance.
  public identityCenterApplicationArn?: string;

  // The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.
  public identityCenterArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "accountId", "", [], false, false),
      new DynamicUIProps(
        InputType.String,
        "identityCenterArn",
        "The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.",
        [],
        false,
        false,
      ),
    ];
  }
}
