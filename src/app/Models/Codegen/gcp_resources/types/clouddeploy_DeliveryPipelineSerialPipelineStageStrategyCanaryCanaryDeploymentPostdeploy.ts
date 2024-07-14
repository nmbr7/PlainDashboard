import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy {
  // Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  actions?: Array<string>;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
