import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSourceVpcConnectionProperties {
  // The Amazon Resource Name (ARN) for the VPC connection.
  vpcConnectionArn?: string;
}

export function quicksight_DataSourceVpcConnectionProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcConnectionArn",
      "The Amazon Resource Name (ARN) for the VPC connection.",
      [],
      true,
      false,
    ),
  ];
}
