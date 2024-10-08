import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appconfig_EnvironmentMonitor,
  appconfig_EnvironmentMonitor_GetTypes,
} from "../types/appconfig_EnvironmentMonitor";

export interface EnvironmentArgs {
  // Set of Amazon CloudWatch alarms to monitor during the deployment process. Maximum of 5. See Monitor below for more details.
  monitors?: Array<appconfig_EnvironmentMonitor>;

  // Name for the environment. Must be between 1 and 64 characters in length.
  name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // AppConfig application ID. Must be between 4 and 7 characters in length.
  applicationId?: string;

  // Description of the environment. Can be at most 1024 characters.
  description?: string;
}
export class Environment extends DS_Resource {
  // AppConfig application ID. Must be between 4 and 7 characters in length.
  public applicationId?: string;

  // AppConfig environment ID.
  public environmentId?: string;

  // Name for the environment. Must be between 1 and 64 characters in length.
  public name?: string;

  /*
State of the environment. Possible values are `READY_FOR_DEPLOYMENT`, `DEPLOYING`, `ROLLING_BACK`
or `ROLLED_BACK`.
*/
  public state?: string;

  // ARN of the AppConfig Environment.
  public arn?: string;

  // Description of the environment. Can be at most 1024 characters.
  public description?: string;

  // Set of Amazon CloudWatch alarms to monitor during the deployment process. Maximum of 5. See Monitor below for more details.
  public monitors?: Array<appconfig_EnvironmentMonitor>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "monitors",
        "Set of Amazon CloudWatch alarms to monitor during the deployment process. Maximum of 5. See Monitor below for more details.",
        () => appconfig_EnvironmentMonitor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the environment. Must be between 1 and 64 characters in length.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "AppConfig application ID. Must be between 4 and 7 characters in length.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the environment. Can be at most 1024 characters.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
