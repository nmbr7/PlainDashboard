import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface HsmArgs {
  // The IDs of AZ in which HSM module will be located. Conflicts with `subnet_id`.
  availabilityZone?: string;

  // The ID of Cloud HSM v2 cluster to which HSM will be added.
  clusterId?: string;

  // The IP address of HSM module. Must be within the CIDR of selected subnet.
  ipAddress?: string;

  // The ID of subnet in which HSM module will be located. Conflicts with `availability_zone`.
  subnetId?: string;
}
export class Hsm extends DS_Resource {
  // The IP address of HSM module. Must be within the CIDR of selected subnet.
  public ipAddress?: string;

  // The ID of subnet in which HSM module will be located. Conflicts with `availability_zone`.
  public subnetId?: string;

  // The IDs of AZ in which HSM module will be located. Conflicts with `subnet_id`.
  public availabilityZone?: string;

  // The ID of Cloud HSM v2 cluster to which HSM will be added.
  public clusterId?: string;

  // The id of the ENI interface allocated for HSM module.
  public hsmEniId?: string;

  // The id of the HSM module.
  public hsmId?: string;

  // The state of the HSM module.
  public hsmState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The IDs of AZ in which HSM module will be located. Conflicts with `subnet_id`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterId",
        "The ID of Cloud HSM v2 cluster to which HSM will be added.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "The IP address of HSM module. Must be within the CIDR of selected subnet.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of subnet in which HSM module will be located. Conflicts with `availability_zone`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
