import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorCapacityAutoscalingScaleInPolicy {
  // Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
  cpuUtilizationPercentage?: number;
}

export function mskconnect_ConnectorCapacityAutoscalingScaleInPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpuUtilizationPercentage",
      "Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.",
      [],
      false,
      false,
    ),
  ];
}
