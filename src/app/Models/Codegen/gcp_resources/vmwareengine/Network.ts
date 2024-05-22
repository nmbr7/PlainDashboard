import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vmwareengine_NetworkVpcNetwork,
  vmwareengine_NetworkVpcNetwork_GetTypes,
} from "../types/vmwareengine_NetworkVpcNetwork";

export interface NetworkArgs {
  // User-provided description for this VMware Engine network.
  description?: string;

  // The location where the VMwareEngineNetwork should reside.
  location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  type?: string;
}
export class Network extends Resource {
  // The location where the VMwareEngineNetwork should reside.
  public location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // State of the VMware Engine network.
  public state?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  public type?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  /*
VMware Engine service VPC networks that provide connectivity from a private cloud to customer projects,
the internet, and other Google Cloud services.
Structure is documented below.
*/
  public vpcNetworks?: Array<vmwareengine_NetworkVpcNetwork>;

  // User-provided description for this VMware Engine network.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description for this VMware Engine network.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the VMwareEngineNetwork should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the VMwareEngineNetwork.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "VMware Engine network type.\nPossible values are: `LEGACY`, `STANDARD`.",
        [],
        true,
        true,
      ),
    ];
  }
}
