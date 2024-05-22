import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance,
  ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance_GetTypes,
} from "./ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance";

export interface ec2_SpotFleetRequestSpotMaintenanceStrategies {
  // Nested argument containing the capacity rebalance for your fleet request. Defined below.
  capacityRebalance?: ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
}

export function ec2_SpotFleetRequestSpotMaintenanceStrategies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "capacityRebalance",
      "Nested argument containing the capacity rebalance for your fleet request. Defined below.",
      ec2_SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance_GetTypes(),
      false,
      false,
    ),
  ];
}
