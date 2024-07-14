import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcDhcpOptionsAssociationArgs {
  // The ID of the DHCP Options Set to associate to the VPC.
  dhcpOptionsId?: string;

  // The ID of the VPC to which we would like to associate a DHCP Options Set.
  vpcId?: string;
}
export class VpcDhcpOptionsAssociation extends Resource {
  // The ID of the DHCP Options Set to associate to the VPC.
  public dhcpOptionsId?: string;

  // The ID of the VPC to which we would like to associate a DHCP Options Set.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dhcpOptionsId",
        "The ID of the DHCP Options Set to associate to the VPC.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC to which we would like to associate a DHCP Options Set.",
        [],
        true,
        true,
      ),
    ];
  }
}
