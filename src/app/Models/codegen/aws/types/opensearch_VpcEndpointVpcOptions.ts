import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_VpcEndpointVpcOptions {
  //
  vpcId?: string;

  //
  availabilityZones?: Array<string>;

  // The list of security group IDs associated with the VPC endpoints for the domain. If you do not provide a security group ID, OpenSearch Service uses the default security group for the VPC.
  securityGroupIds?: Array<string>;

  // A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide only one.
  subnetIds?: Array<string>;
}

export function opensearch_VpcEndpointVpcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "vpcId", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "The list of security group IDs associated with the VPC endpoints for the domain. If you do not provide a security group ID, OpenSearch Service uses the default security group for the VPC.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide only one.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
