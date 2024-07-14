import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LocalGatewayRouteArgs {
  // Identifier of EC2 Local Gateway Route Table.
  localGatewayRouteTableId?: string;

  // Identifier of EC2 Local Gateway Virtual Interface Group.
  localGatewayVirtualInterfaceGroupId?: string;

  // IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
  destinationCidrBlock?: string;
}
export class LocalGatewayRoute extends Resource {
  // IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
  public destinationCidrBlock?: string;

  // Identifier of EC2 Local Gateway Route Table.
  public localGatewayRouteTableId?: string;

  // Identifier of EC2 Local Gateway Virtual Interface Group.
  public localGatewayVirtualInterfaceGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "localGatewayRouteTableId",
        "Identifier of EC2 Local Gateway Route Table.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "localGatewayVirtualInterfaceGroupId",
        "Identifier of EC2 Local Gateway Virtual Interface Group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationCidrBlock",
        "IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.",
        [],
        true,
        true,
      ),
    ];
  }
}
