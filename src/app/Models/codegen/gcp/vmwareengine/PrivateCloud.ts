import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vmwareengine_PrivateCloudManagementCluster,
  vmwareengine_PrivateCloudManagementCluster_GetTypes,
} from "../types/vmwareengine_PrivateCloudManagementCluster";
import {
  vmwareengine_PrivateCloudNetworkConfig,
  vmwareengine_PrivateCloudNetworkConfig_GetTypes,
} from "../types/vmwareengine_PrivateCloudNetworkConfig";
import {
  vmwareengine_PrivateCloudVcenter,
  vmwareengine_PrivateCloudVcenter_GetTypes,
} from "../types/vmwareengine_PrivateCloudVcenter";
import {
  vmwareengine_PrivateCloudHcx,
  vmwareengine_PrivateCloudHcx_GetTypes,
} from "../types/vmwareengine_PrivateCloudHcx";
import {
  vmwareengine_PrivateCloudNsx,
  vmwareengine_PrivateCloudNsx_GetTypes,
} from "../types/vmwareengine_PrivateCloudNsx";

export interface PrivateCloudArgs {
  // User-provided description for this private cloud.
  description?: string;

  // The location where the PrivateCloud should reside.
  location?: string;

  /*
The management cluster for this private cloud. This used for creating and managing the default cluster.
Structure is documented below.
*/
  managementCluster?: vmwareengine_PrivateCloudManagementCluster;

  // The ID of the PrivateCloud.
  name?: string;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  networkConfig?: vmwareengine_PrivateCloudNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Initial type of the private cloud.
Possible values are: `STANDARD`, `TIME_LIMITED`.
*/
  type?: string;
}
export class PrivateCloud extends DS_Resource {
  /*
Details about a vCenter Server management appliance.
Structure is documented below.
*/
  public vcenters?: Array<vmwareengine_PrivateCloudVcenter>;

  /*
Details about a HCX Cloud Manager appliance.
Structure is documented below.
*/
  public hcxes?: Array<vmwareengine_PrivateCloudHcx>;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  public networkConfig?: vmwareengine_PrivateCloudNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  /*
Details about a NSX Manager appliance.
Structure is documented below.
*/
  public nsxes?: Array<vmwareengine_PrivateCloudNsx>;

  /*
State of the appliance.
Possible values are: `ACTIVE`, `CREATING`.
*/
  public state?: string;

  /*
Initial type of the private cloud.
Possible values are: `STANDARD`, `TIME_LIMITED`.
*/
  public type?: string;

  // User-provided description for this private cloud.
  public description?: string;

  // The location where the PrivateCloud should reside.
  public location?: string;

  /*
The management cluster for this private cloud. This used for creating and managing the default cluster.
Structure is documented below.
*/
  public managementCluster?: vmwareengine_PrivateCloudManagementCluster;

  // The ID of the PrivateCloud.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Network configuration in the consumer project with which the peering has to be done.\nStructure is documented below.",
        () => vmwareengine_PrivateCloudNetworkConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Initial type of the private cloud.\nPossible values are: `STANDARD`, `TIME_LIMITED`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description for this private cloud.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the PrivateCloud should reside.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "managementCluster",
        "The management cluster for this private cloud. This used for creating and managing the default cluster.\nStructure is documented below.",
        () => vmwareengine_PrivateCloudManagementCluster_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the PrivateCloud.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
