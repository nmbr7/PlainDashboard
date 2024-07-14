import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EmailChannelArgs {
  // The application ID.
  applicationId?: string;

  // The ARN of the Amazon SES configuration set that you want to apply to messages that you send through the channel.
  configurationSet?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  enabled?: boolean;

  // The email address used to send emails from. You can use email only (`user@example.com`) or friendly address (`User <user@example.com>`). This field comply with [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt).
  fromAddress?: string;

  // The ARN of an identity verified with SES.
  identity?: string;

  // The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.
  roleArn?: string;
}
export class EmailChannel extends Resource {
  // Messages per second that can be sent.
  public messagesPerSecond?: number;

  // The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.
  public roleArn?: string;

  // The application ID.
  public applicationId?: string;

  // The ARN of the Amazon SES configuration set that you want to apply to messages that you send through the channel.
  public configurationSet?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  public enabled?: boolean;

  // The email address used to send emails from. You can use email only (`user@example.com`) or friendly address (`User <user@example.com>`). This field comply with [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt).
  public fromAddress?: string;

  // The ARN of an identity verified with SES.
  public identity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the channel is enabled or disabled. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fromAddress",
        "The email address used to send emails from. You can use email only (`user@example.com`) or friendly address (`User <user@example.com>`). This field comply with [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identity",
        "The ARN of an identity verified with SES.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The application ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationSet",
        "The ARN of the Amazon SES configuration set that you want to apply to messages that you send through the channel.",
        [],
        false,
        false,
      ),
    ];
  }
}
