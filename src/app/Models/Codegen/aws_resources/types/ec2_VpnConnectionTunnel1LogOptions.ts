import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions,
  ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions_GetTypes,
} from "./ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions";

export interface ec2_VpnConnectionTunnel1LogOptions {
  // Options for sending VPN tunnel logs to CloudWatch. See CloudWatch Log Options below for more details.
  cloudwatchLogOptions?: ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
}

export function ec2_VpnConnectionTunnel1LogOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogOptions",
      "Options for sending VPN tunnel logs to CloudWatch. See CloudWatch Log Options below for more details.",
      ec2_VpnConnectionTunnel1LogOptionsCloudwatchLogOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
