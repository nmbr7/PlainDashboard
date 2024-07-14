import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectVpcConfig {
  // Subnet IDs within which to run builds.
  subnets?: Array<string>;

  // ID of the VPC within which to run builds.
  vpcId?: string;

  // Security group IDs to assign to running builds.
  securityGroupIds?: Array<string>;
}

export function codebuild_ProjectVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "Subnet IDs within which to run builds.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "ID of the VPC within which to run builds.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Security group IDs to assign to running builds.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
