import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OrganizationConfigurationArgs {
  // When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s Detective delegated administrator and Detective is enabled in that AWS Region.
  autoEnable?: boolean;

  // ARN of the behavior graph.
  graphArn?: string;
}
export class OrganizationConfiguration extends Resource {
  // When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s Detective delegated administrator and Detective is enabled in that AWS Region.
  public autoEnable?: boolean;

  // ARN of the behavior graph.
  public graphArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "autoEnable",
        "When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s Detective delegated administrator and Detective is enabled in that AWS Region.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "graphArn",
        "ARN of the behavior graph.",
        [],
        true,
        true,
      ),
    ];
  }
}
