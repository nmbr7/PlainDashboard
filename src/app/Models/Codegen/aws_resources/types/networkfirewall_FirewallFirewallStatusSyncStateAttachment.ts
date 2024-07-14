import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_FirewallFirewallStatusSyncStateAttachment {
  // The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.
  endpointId?: string;

  // The unique identifier for the subnet.
  subnetId?: string;
}

export function networkfirewall_FirewallFirewallStatusSyncStateAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointId",
      "The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The unique identifier for the subnet.",
      [],
      false,
      false,
    ),
  ];
}
