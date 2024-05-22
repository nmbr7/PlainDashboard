import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkInsightsPathArgs {
  /*
Protocol to use for analysis. Valid options are `tcp` or `udp`.

The following arguments are optional:
*/
  protocol?: string;

  // ID or ARN of the resource which is the source of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.
  source?: string;

  // IP address of the source resource.
  sourceIp?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ID or ARN of the resource which is the destination of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.
  destination?: string;

  // IP address of the destination resource.
  destinationIp?: string;

  // Destination port to analyze access to.
  destinationPort?: number;
}
export class NetworkInsightsPath extends Resource {
  // ID or ARN of the resource which is the source of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.
  public source?: string;

  // ARN of the source.
  public sourceArn?: string;

  // IP address of the source resource.
  public sourceIp?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Network Insights Path.
  public arn?: string;

  // ID or ARN of the resource which is the destination of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.
  public destination?: string;

  // ARN of the destination.
  public destinationArn?: string;

  // IP address of the destination resource.
  public destinationIp?: string;

  // Destination port to analyze access to.
  public destinationPort?: number;

  /*
Protocol to use for analysis. Valid options are `tcp` or `udp`.

The following arguments are optional:
*/
  public protocol?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol to use for analysis. Valid options are `tcp` or `udp`.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "source",
        "ID or ARN of the resource which is the source of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceIp",
        "IP address of the source resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destination",
        "ID or ARN of the resource which is the destination of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationIp",
        "IP address of the destination resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "destinationPort",
        "Destination port to analyze access to.",
        [],
        false,
        true,
      ),
    ];
  }
}
