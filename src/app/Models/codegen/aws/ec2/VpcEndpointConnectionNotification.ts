import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcEndpointConnectionNotificationArgs {
  // The ARN of the SNS topic for the notifications.
  connectionNotificationArn?: string;

  // The ID of the VPC Endpoint to receive notifications for.
  vpcEndpointId?: string;

  // The ID of the VPC Endpoint Service to receive notifications for.
  vpcEndpointServiceId?: string;

  /*
One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.

> --NOTE:-- One of `vpc_endpoint_service_id` or `vpc_endpoint_id` must be specified.
*/
  connectionEvents?: Array<string>;
}
export class VpcEndpointConnectionNotification extends DS_Resource {
  /*
One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.

> --NOTE:-- One of `vpc_endpoint_service_id` or `vpc_endpoint_id` must be specified.
*/
  public connectionEvents?: Array<string>;

  // The ARN of the SNS topic for the notifications.
  public connectionNotificationArn?: string;

  // The type of notification.
  public notificationType?: string;

  // The state of the notification.
  public state?: string;

  // The ID of the VPC Endpoint to receive notifications for.
  public vpcEndpointId?: string;

  // The ID of the VPC Endpoint Service to receive notifications for.
  public vpcEndpointServiceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "connectionNotificationArn",
        "The ARN of the SNS topic for the notifications.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "The ID of the VPC Endpoint to receive notifications for.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointServiceId",
        "The ID of the VPC Endpoint Service to receive notifications for.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "connectionEvents",
        "One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.\n\n> **NOTE:** One of `vpc_endpoint_service_id` or `vpc_endpoint_id` must be specified.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
