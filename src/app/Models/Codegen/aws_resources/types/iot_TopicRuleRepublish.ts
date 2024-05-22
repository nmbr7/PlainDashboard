import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleRepublish {
  // The name of the MQTT topic the message should be republished to.
  topic?: string;

  /*
The Quality of Service (QoS) level to use when republishing messages. Valid values are 0 or 1. The default value is 0.

The `s3` object takes the following arguments:
*/
  qos?: number;

  // The ARN of the IAM role that grants access.
  roleArn?: string;
}

export function iot_TopicRuleRepublish_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The name of the MQTT topic the message should be republished to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "qos",
      "The Quality of Service (QoS) level to use when republishing messages. Valid values are 0 or 1. The default value is 0.\n\nThe `s3` object takes the following arguments:",
      [],
      false,
      false,
    ),
  ];
}
