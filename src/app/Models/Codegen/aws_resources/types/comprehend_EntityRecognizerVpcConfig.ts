import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface comprehend_EntityRecognizerVpcConfig {
  // List of VPC subnets.
  subnets?: Array<string>;

  // List of security group IDs.
  securityGroupIds?: Array<string>;
}

export function comprehend_EntityRecognizerVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "List of VPC subnets.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "List of security group IDs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
