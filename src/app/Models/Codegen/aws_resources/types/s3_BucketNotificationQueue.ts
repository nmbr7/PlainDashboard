import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketNotificationQueue {
  // Specifies [event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications.
  events?: Array<string>;

  // Object key name prefix.
  filterPrefix?: string;

  // Object key name suffix.
  filterSuffix?: string;

  // Unique identifier for each of the notification configurations.
  id?: string;

  // SQS queue ARN.
  queueArn?: string;
}

export function s3_BucketNotificationQueue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "events",
      "Specifies [event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterPrefix",
      "Object key name prefix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterSuffix",
      "Object key name suffix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for each of the notification configurations.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueArn",
      "SQS queue ARN.",
      [],
      true,
      false,
    ),
  ];
}
