import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_InfrastructureConfigurationInstanceMetadataOptions,
  imagebuilder_InfrastructureConfigurationInstanceMetadataOptions_GetTypes,
} from "../types/imagebuilder_InfrastructureConfigurationInstanceMetadataOptions";
import {
  imagebuilder_InfrastructureConfigurationLogging,
  imagebuilder_InfrastructureConfigurationLogging_GetTypes,
} from "../types/imagebuilder_InfrastructureConfigurationLogging";

export interface InfrastructureConfigurationArgs {
  // Name of IAM Instance Profile.
  instanceProfileName?: string;

  // Set of EC2 Instance Types.
  instanceTypes?: Array<string>;

  // Name of EC2 Key Pair.
  keyPair?: string;

  // Configuration block with instance metadata options for the HTTP requests that pipeline builds use to launch EC2 build and test instances. Detailed below.
  instanceMetadataOptions?: imagebuilder_InfrastructureConfigurationInstanceMetadataOptions;

  // Configuration block with logging settings. Detailed below.
  logging?: imagebuilder_InfrastructureConfigurationLogging;

  /*
Name for the configuration.

The following arguments are optional:
*/
  name?: string;

  // Key-value map of resource tags to assign to infrastructure created by the configuration.
  resourceTags?: Map<string, string>;

  // Set of EC2 Security Group identifiers.
  securityGroupIds?: Array<string>;

  // Amazon Resource Name (ARN) of SNS Topic.
  snsTopicArn?: string;

  // EC2 Subnet identifier. Also requires `security_group_ids` argument.
  subnetId?: string;

  // Key-value map of resource tags to assign to the configuration. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description for the configuration.
  description?: string;

  // Enable if the instance should be terminated when the pipeline fails. Defaults to `false`.
  terminateInstanceOnFailure?: boolean;
}
export class InfrastructureConfiguration extends Resource {
  // Configuration block with logging settings. Detailed below.
  public logging?: imagebuilder_InfrastructureConfigurationLogging;

  // Key-value map of resource tags to assign to infrastructure created by the configuration.
  public resourceTags?: Map<string, string>;

  // EC2 Subnet identifier. Also requires `security_group_ids` argument.
  public subnetId?: string;

  // Amazon Resource Name (ARN) of the configuration.
  public arn?: string;

  // Date when the configuration was updated.
  public dateUpdated?: string;

  // Name of IAM Instance Profile.
  public instanceProfileName?: string;

  // Set of EC2 Instance Types.
  public instanceTypes?: Array<string>;

  // Name of EC2 Key Pair.
  public keyPair?: string;

  /*
Name for the configuration.

The following arguments are optional:
*/
  public name?: string;

  // Set of EC2 Security Group identifiers.
  public securityGroupIds?: Array<string>;

  // Amazon Resource Name (ARN) of SNS Topic.
  public snsTopicArn?: string;

  // Configuration block with instance metadata options for the HTTP requests that pipeline builds use to launch EC2 build and test instances. Detailed below.
  public instanceMetadataOptions?: imagebuilder_InfrastructureConfigurationInstanceMetadataOptions;

  // Key-value map of resource tags to assign to the configuration. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Enable if the instance should be terminated when the pipeline fails. Defaults to `false`.
  public terminateInstanceOnFailure?: boolean;

  // Date when the configuration was created.
  public dateCreated?: string;

  // Description for the configuration.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyPair",
        "Name of EC2 Key Pair.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceMetadataOptions",
        "Configuration block with instance metadata options for the HTTP requests that pipeline builds use to launch EC2 build and test instances. Detailed below.",
        imagebuilder_InfrastructureConfigurationInstanceMetadataOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceTags",
        "Key-value map of resource tags to assign to infrastructure created by the configuration.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "Set of EC2 Security Group identifiers.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snsTopicArn",
        "Amazon Resource Name (ARN) of SNS Topic.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceProfileName",
        "Name of IAM Instance Profile.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instanceTypes",
        "Set of EC2 Instance Types.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logging",
        "Configuration block with logging settings. Detailed below.",
        imagebuilder_InfrastructureConfigurationLogging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the configuration.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "EC2 Subnet identifier. Also requires `security_group_ids` argument.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags to assign to the configuration. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "terminateInstanceOnFailure",
        "Enable if the instance should be terminated when the pipeline fails. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
