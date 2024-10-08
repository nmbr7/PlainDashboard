import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_VpnConnectionTunnel2LogOptionsCloudwatchLogOptions {
  // Enable or disable VPN tunnel logging feature. The default is `false`.
  logEnabled?: boolean;

  // The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
  logGroupArn?: string;

  // Set log format. Default format is json. Possible values are: `json` and `text`. The default is `json`.
  logOutputFormat?: string;
}

export function ec2_VpnConnectionTunnel2LogOptionsCloudwatchLogOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupArn",
      "The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logOutputFormat",
      "Set log format. Default format is json. Possible values are: `json` and `text`. The default is `json`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "logEnabled",
      "Enable or disable VPN tunnel logging feature. The default is `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
