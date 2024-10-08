import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleFirehose {
  // The payload that contains a JSON array of records will be sent to Kinesis Firehose via a batch call.
  batchMode?: boolean;

  // The delivery stream name.
  deliveryStreamName?: string;

  // The IAM role ARN that grants access to the Amazon Kinesis Firehose stream.
  roleArn?: string;

  // A character separator that is used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  separator?: string;
}

export function iot_TopicRuleFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "batchMode",
      "The payload that contains a JSON array of records will be sent to Kinesis Firehose via a batch call.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deliveryStreamName",
      "The delivery stream name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM role ARN that grants access to the Amazon Kinesis Firehose stream.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "separator",
      "A character separator that is used to separate records written to the Firehose stream. Valid values are: '\\n' (newline), '\\t' (tab), '\\r\\n' (Windows newline), ',' (comma).",
      () => [],
      false,
      false,
    ),
  ];
}
