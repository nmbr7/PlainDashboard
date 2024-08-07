import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_FleetTargetCapacitySpecification {
  /*
The unit for the target capacity.
If you specify `target_capacity_unit_type`, `instance_requirements` must be specified.
*/
  targetCapacityUnitType?: string;

  // The number of units to request, filled using `default_target_capacity_type`.
  totalTargetCapacity?: number;

  // Default target capacity type. Valid values: `on-demand`, `spot`.
  defaultTargetCapacityType?: string;

  // The number of On-Demand units to request.
  onDemandTargetCapacity?: number;

  // The number of Spot units to request.
  spotTargetCapacity?: number;
}

export function ec2_FleetTargetCapacitySpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "spotTargetCapacity",
      "The number of Spot units to request.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetCapacityUnitType",
      "The unit for the target capacity.\nIf you specify `target_capacity_unit_type`, `instance_requirements` must be specified.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "totalTargetCapacity",
      "The number of units to request, filled using `default_target_capacity_type`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultTargetCapacityType",
      "Default target capacity type. Valid values: `on-demand`, `spot`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandTargetCapacity",
      "The number of On-Demand units to request.",
      [],
      false,
      true,
    ),
  ];
}
