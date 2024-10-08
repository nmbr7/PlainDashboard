import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datasync_EfsLocationEc2Config {
  // List of Amazon Resource Names (ARNs) of the EC2 Security Groups that are associated with the EFS Mount Target.
  securityGroupArns?: Array<string>;

  // Amazon Resource Name (ARN) of the EC2 Subnet that is associated with the EFS Mount Target.
  subnetArn?: string;
}

export function datasync_EfsLocationEc2Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnetArn",
      "Amazon Resource Name (ARN) of the EC2 Subnet that is associated with the EFS Mount Target.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupArns",
      "List of Amazon Resource Names (ARNs) of the EC2 Security Groups that are associated with the EFS Mount Target.",
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
