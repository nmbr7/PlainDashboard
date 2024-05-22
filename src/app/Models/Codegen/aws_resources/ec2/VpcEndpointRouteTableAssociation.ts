import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcEndpointRouteTableAssociationArgs {
  // Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.
  vpcEndpointId?: string;

  // Identifier of the EC2 Route Table to be associated with the VPC Endpoint.
  routeTableId?: string;
}
export class VpcEndpointRouteTableAssociation extends Resource {
  // Identifier of the EC2 Route Table to be associated with the VPC Endpoint.
  public routeTableId?: string;

  // Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "Identifier of the VPC Endpoint with which the EC2 Route Table will be associated.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "Identifier of the EC2 Route Table to be associated with the VPC Endpoint.",
        [],
        true,
        true,
      ),
    ];
  }
}
