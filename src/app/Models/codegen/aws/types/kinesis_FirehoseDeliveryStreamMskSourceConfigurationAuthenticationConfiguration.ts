import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration {
  // The type of connectivity used to access the Amazon MSK cluster. Valid values: `PUBLIC`, `PRIVATE`.
  connectivity?: string;

  // The ARN of the role used to access the Amazon MSK cluster.
  roleArn?: string;
}

export function kinesis_FirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectivity",
      "The type of connectivity used to access the Amazon MSK cluster. Valid values: `PUBLIC`, `PRIVATE`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role used to access the Amazon MSK cluster.",
      () => [],
      true,
      true,
    ),
  ];
}
