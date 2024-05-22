import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  emr_InstanceFleetInstanceTypeConfig,
  emr_InstanceFleetInstanceTypeConfig_GetTypes,
} from "../types/emr_InstanceFleetInstanceTypeConfig";
import {
  emr_InstanceFleetLaunchSpecifications,
  emr_InstanceFleetLaunchSpecifications_GetTypes,
} from "../types/emr_InstanceFleetLaunchSpecifications";

export interface InstanceFleetArgs {
  // Friendly name given to the instance fleet.
  name?: string;

  // The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
  targetOnDemandCapacity?: number;

  // The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
  targetSpotCapacity?: number;

  // ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
  clusterId?: string;

  // Configuration block for instance fleet
  instanceTypeConfigs?: Array<emr_InstanceFleetInstanceTypeConfig>;

  // Configuration block for launch specification
  launchSpecifications?: emr_InstanceFleetLaunchSpecifications;
}
export class InstanceFleet extends Resource {
  // Configuration block for launch specification
  public launchSpecifications?: emr_InstanceFleetLaunchSpecifications;

  // Friendly name given to the instance fleet.
  public name?: string;

  /*
The number of On-Demand units that have been provisioned for the instance
fleet to fulfill TargetOnDemandCapacity. This provisioned capacity might be less than or greater than TargetOnDemandCapacity.
*/
  public provisionedOnDemandCapacity?: number;

  /*
The number of Spot units that have been provisioned for this instance fleet
to fulfill TargetSpotCapacity. This provisioned capacity might be less than or greater than TargetSpotCapacity.
*/
  public provisionedSpotCapacity?: number;

  // The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
  public targetOnDemandCapacity?: number;

  // The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
  public targetSpotCapacity?: number;

  // ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
  public clusterId?: string;

  // Configuration block for instance fleet
  public instanceTypeConfigs?: Array<emr_InstanceFleetInstanceTypeConfig>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Friendly name given to the instance fleet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "targetOnDemandCapacity",
        "The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "targetSpotCapacity",
        "The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterId",
        "ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instanceTypeConfigs",
        "Configuration block for instance fleet",
        emr_InstanceFleetInstanceTypeConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "launchSpecifications",
        "Configuration block for launch specification",
        emr_InstanceFleetLaunchSpecifications_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
