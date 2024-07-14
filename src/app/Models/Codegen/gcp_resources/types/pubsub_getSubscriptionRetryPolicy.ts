import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pubsub_getSubscriptionRetryPolicy {
  /*
The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  maximumBackoff?: string;

  /*
The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  minimumBackoff?: string;
}

export function pubsub_getSubscriptionRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maximumBackoff",
      "The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minimumBackoff",
      "The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
  ];
}
