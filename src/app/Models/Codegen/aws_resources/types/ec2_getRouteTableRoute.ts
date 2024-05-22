import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getRouteTableRoute {
  // ID of the Carrier Gateway.
  carrierGatewayId?: string;

  // The ID of a managed prefix list destination of the route.
  destinationPrefixListId?: string;

  // EC2 instance ID.
  instanceId?: string;

  // VPC Peering ID.
  vpcPeeringConnectionId?: string;

  // CIDR block of the route.
  cidrBlock?: string;

  // ID of the Egress Only Internet Gateway.
  egressOnlyGatewayId?: string;

  // IPv6 CIDR block of the route.
  ipv6CidrBlock?: string;

  // NAT Gateway ID.
  natGatewayId?: string;

  // ID of the elastic network interface (eni) to use.
  networkInterfaceId?: string;

  // ARN of the core network.
  coreNetworkArn?: string;

  // ID of an Internet Gateway or Virtual Private Gateway which is connected to the Route Table (not exported if not passed as a parameter).
  gatewayId?: string;

  // Local Gateway ID.
  localGatewayId?: string;

  // EC2 Transit Gateway ID.
  transitGatewayId?: string;

  // VPC Endpoint ID.
  vpcEndpointId?: string;
}

export function ec2_getRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationPrefixListId",
      "The ID of a managed prefix list destination of the route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "natGatewayId",
      "NAT Gateway ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "ID of the elastic network interface (eni) to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "EC2 Transit Gateway ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "carrierGatewayId",
      "ID of the Carrier Gateway.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "EC2 instance ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "CIDR block of the route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6CidrBlock",
      "IPv6 CIDR block of the route.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egressOnlyGatewayId",
      "ID of the Egress Only Internet Gateway.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gatewayId",
      "ID of an Internet Gateway or Virtual Private Gateway which is connected to the Route Table (not exported if not passed as a parameter).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localGatewayId",
      "Local Gateway ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcEndpointId",
      "VPC Endpoint ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcPeeringConnectionId",
      "VPC Peering ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "coreNetworkArn",
      "ARN of the core network.",
      [],
      true,
      false,
    ),
  ];
}
