import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcEndpointConnectionAccepterArgs {
  // AWS VPC Endpoint ID.
  vpcEndpointId?: string;

  // AWS VPC Endpoint Service ID.
  vpcEndpointServiceId?: string;
}
export class VpcEndpointConnectionAccepter extends DS_Resource {
  // AWS VPC Endpoint ID.
  public vpcEndpointId?: string;

  // AWS VPC Endpoint Service ID.
  public vpcEndpointServiceId?: string;

  // State of the VPC Endpoint.
  public vpcEndpointState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "AWS VPC Endpoint ID.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointServiceId",
        "AWS VPC Endpoint Service ID.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
