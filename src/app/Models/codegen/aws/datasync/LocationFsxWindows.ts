import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LocationFsxWindowsArgs {
  // Subdirectory to perform actions as source or destination.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The user who has the permissions to access files and folders in the FSx for Windows file system.
  user?: string;

  // The name of the Windows domain that the FSx for Windows server belongs to.
  domain?: string;

  // The Amazon Resource Name (ARN) for the FSx for Windows file system.
  fsxFilesystemArn?: string;

  // The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
  password?: string;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows file system.
  securityGroupArns?: Array<string>;
}
export class LocationFsxWindows extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The URL of the FSx for Windows location that was described.
  public uri?: string;

  // The name of the Windows domain that the FSx for Windows server belongs to.
  public domain?: string;

  // The Amazon Resource Name (ARN) for the FSx for Windows file system.
  public fsxFilesystemArn?: string;

  // The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
  public password?: string;

  // Subdirectory to perform actions as source or destination.
  public subdirectory?: string;

  // The user who has the permissions to access files and folders in the FSx for Windows file system.
  public user?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The time that the FSx for Windows location was created.
  public creationTime?: string;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows file system.
  public securityGroupArns?: Array<string>;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The name of the Windows domain that the FSx for Windows server belongs to.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fsxFilesystemArn",
        "The Amazon Resource Name (ARN) for the FSx for Windows file system.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password of the user who has the permissions to access files and folders in the FSx for Windows file system.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows file system.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user who has the permissions to access files and folders in the FSx for Windows file system.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
