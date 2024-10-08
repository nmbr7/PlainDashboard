import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ses_ReceiptRuleLambdaAction {
  // The ARN of the Lambda function to invoke
  functionArn?: string;

  // `Event` or `RequestResponse`
  invocationType?: string;

  // The position of the action in the receipt rule
  position?: number;

  // The ARN of an SNS topic to notify
  topicArn?: string;
}

export function ses_ReceiptRuleLambdaAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "invocationType",
      "`Event` or `RequestResponse`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "position",
      "The position of the action in the receipt rule",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The ARN of an SNS topic to notify",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "functionArn",
      "The ARN of the Lambda function to invoke",
      () => [],
      true,
      false,
    ),
  ];
}
