import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GatewayAssociationProposalArgs {
  // VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.
  allowedPrefixes?: Array<string>;

  // The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.
  associatedGatewayId?: string;

  // Direct Connect Gateway identifier.
  dxGatewayId?: string;

  // AWS Account identifier of the Direct Connect Gateway's owner.
  dxGatewayOwnerAccountId?: string;
}
export class GatewayAssociationProposal extends Resource {
  // The type of the associated gateway, `transitGateway` or `virtualPrivateGateway`.
  public associatedGatewayType?: string;

  // Direct Connect Gateway identifier.
  public dxGatewayId?: string;

  // AWS Account identifier of the Direct Connect Gateway's owner.
  public dxGatewayOwnerAccountId?: string;

  // VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.
  public allowedPrefixes?: Array<string>;

  // The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.
  public associatedGatewayId?: string;

  // The ID of the AWS account that owns the VGW or transit gateway with which to associate the Direct Connect gateway.
  public associatedGatewayOwnerAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dxGatewayId",
        "Direct Connect Gateway identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dxGatewayOwnerAccountId",
        "AWS Account identifier of the Direct Connect Gateway's owner.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "allowedPrefixes",
        "VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "associatedGatewayId",
        "The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.",
        [],
        true,
        true,
      ),
    ];
  }
}
