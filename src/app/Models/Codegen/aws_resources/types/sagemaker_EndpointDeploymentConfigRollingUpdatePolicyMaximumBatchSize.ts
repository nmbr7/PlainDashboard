import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  // Specifies the endpoint capacity type. Valid values are: `INSTANCE_COUNT`, or `CAPACITY_PERCENT`.
  type?: string;

  // Defines the capacity size, either as a number of instances or a capacity percentage.
  value?: number;
}

export function sagemaker_EndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "value",
      "Defines the capacity size, either as a number of instances or a capacity percentage.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Specifies the endpoint capacity type. Valid values are: `INSTANCE_COUNT`, or `CAPACITY_PERCENT`.",
      [],
      true,
      false,
    ),
  ];
}
