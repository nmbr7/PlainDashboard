import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_StackCustomCookbooksSource,
  opsworks_StackCustomCookbooksSource_GetTypes,
} from "../types/opsworks_StackCustomCookbooksSource";

export interface StackArgs {
  // Color to paint next to the stack's resources in the OpsWorks console.
  color?: string;

  // When `use_custom_cookbooks` is set, provide this sub-object as described below.
  customCookbooksSources?: Array<opsworks_StackCustomCookbooksSource>;

  /*
Name of the availability zone where instances will be created by default.
Cannot be set when `vpc_id` is set.
*/
  defaultAvailabilityZone?: string;

  // The name of the stack.
  name?: string;

  // Boolean value controlling whether the custom cookbook settings are enabled.
  useCustomCookbooks?: boolean;

  // If set to `"LATEST"`, OpsWorks will automatically install the latest version.
  agentVersion?: string;

  // If `manage_berkshelf` is enabled, the version of Berkshelf to use.
  berkshelfVersion?: string;

  // The name of the region where the stack will exist.
  region?: string;

  // The ARN of an IAM role that the OpsWorks service will act as.
  serviceRoleArn?: string;

  /*
ID of the VPC that this stack belongs to.
Defaults to the region's default VPC.
*/
  vpcId?: string;

  // Name of the configuration manager to use. Defaults to "Chef".
  configurationManagerName?: string;

  // Version of the configuration manager to use. Defaults to "11.4".
  configurationManagerVersion?: string;

  // Custom JSON attributes to apply to the entire stack.
  customJson?: string;

  /*
ID of the subnet in which instances will be created by default.
Required if `vpc_id` is set to a VPC other than the default VPC, and forbidden if it isn't.
*/
  defaultSubnetId?: string;

  // Boolean value controlling whether Opsworks will run Berkshelf for this stack.
  manageBerkshelf?: boolean;

  /*
A map of tags to assign to the resource.
If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;

  // Boolean value controlling whether the standard OpsWorks security groups apply to created instances.
  useOpsworksSecurityGroups?: boolean;

  // The ARN of an IAM Instance Profile that created instances will have by default.
  defaultInstanceProfileArn?: string;

  // Name of OS that will be installed on instances by default.
  defaultOs?: string;

  // Name of the type of root device instances will have by default.
  defaultRootDeviceType?: string;

  // Name of the SSH keypair that instances will have by default.
  defaultSshKeyName?: string;

  // Keyword representing the naming scheme that will be used for instance hostnames within this stack.
  hostnameTheme?: string;
}
export class Stack extends DS_Resource {
  // Boolean value controlling whether the custom cookbook settings are enabled.
  public useCustomCookbooks?: boolean;

  //
  public arn?: string;

  // When `use_custom_cookbooks` is set, provide this sub-object as described below.
  public customCookbooksSources?: Array<opsworks_StackCustomCookbooksSource>;

  // Name of OS that will be installed on instances by default.
  public defaultOs?: string;

  // Keyword representing the naming scheme that will be used for instance hostnames within this stack.
  public hostnameTheme?: string;

  /*
A map of tags to assign to the resource.
If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // Name of the configuration manager to use. Defaults to "Chef".
  public configurationManagerName?: string;

  // Version of the configuration manager to use. Defaults to "11.4".
  public configurationManagerVersion?: string;

  // Name of the SSH keypair that instances will have by default.
  public defaultSshKeyName?: string;

  // Boolean value controlling whether Opsworks will run Berkshelf for this stack.
  public manageBerkshelf?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // If set to `"LATEST"`, OpsWorks will automatically install the latest version.
  public agentVersion?: string;

  // Color to paint next to the stack's resources in the OpsWorks console.
  public color?: string;

  // Custom JSON attributes to apply to the entire stack.
  public customJson?: string;

  // The name of the stack.
  public name?: string;

  /*
ID of the subnet in which instances will be created by default.
Required if `vpc_id` is set to a VPC other than the default VPC, and forbidden if it isn't.
*/
  public defaultSubnetId?: string;

  // The name of the region where the stack will exist.
  public region?: string;

  // The ARN of an IAM role that the OpsWorks service will act as.
  public serviceRoleArn?: string;

  //
  public stackEndpoint?: string;

  // If `manage_berkshelf` is enabled, the version of Berkshelf to use.
  public berkshelfVersion?: string;

  /*
Name of the availability zone where instances will be created by default.
Cannot be set when `vpc_id` is set.
*/
  public defaultAvailabilityZone?: string;

  // The ARN of an IAM Instance Profile that created instances will have by default.
  public defaultInstanceProfileArn?: string;

  // Name of the type of root device instances will have by default.
  public defaultRootDeviceType?: string;

  // Boolean value controlling whether the standard OpsWorks security groups apply to created instances.
  public useOpsworksSecurityGroups?: boolean;

  /*
ID of the VPC that this stack belongs to.
Defaults to the region's default VPC.
*/
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "region",
        "The name of the region where the stack will exist.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRoleArn",
        "The ARN of an IAM role that the OpsWorks service will act as.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationManagerName",
        'Name of the configuration manager to use. Defaults to "Chef".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultSubnetId",
        "ID of the subnet in which instances will be created by default.\nRequired if `vpc_id` is set to a VPC other than the default VPC, and forbidden if it isn't.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRootDeviceType",
        "Name of the type of root device instances will have by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "agentVersion",
        'If set to `"LATEST"`, OpsWorks will automatically install the latest version.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "ID of the VPC that this stack belongs to.\nDefaults to the region's default VPC.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource.\nIf configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultInstanceProfileArn",
        "The ARN of an IAM Instance Profile that created instances will have by default.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultOs",
        "Name of OS that will be installed on instances by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "color",
        "Color to paint next to the stack's resources in the OpsWorks console.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customCookbooksSources",
        "When `use_custom_cookbooks` is set, provide this sub-object as described below.",
        () => opsworks_StackCustomCookbooksSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultAvailabilityZone",
        "Name of the availability zone where instances will be created by default.\nCannot be set when `vpc_id` is set.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationManagerVersion",
        'Version of the configuration manager to use. Defaults to "11.4".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customJson",
        "Custom JSON attributes to apply to the entire stack.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "manageBerkshelf",
        "Boolean value controlling whether Opsworks will run Berkshelf for this stack.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultSshKeyName",
        "Name of the SSH keypair that instances will have by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostnameTheme",
        "Keyword representing the naming scheme that will be used for instance hostnames within this stack.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the stack.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useCustomCookbooks",
        "Boolean value controlling whether the custom cookbook settings are enabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "berkshelfVersion",
        "If `manage_berkshelf` is enabled, the version of Berkshelf to use.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useOpsworksSecurityGroups",
        "Boolean value controlling whether the standard OpsWorks security groups apply to created instances.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
