import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ses_ReceiptRuleStopAction {
  // The scope to apply. The only acceptable value is `RuleSet`.
  scope?: string;

  // The ARN of an SNS topic to notify
  topicArn?: string;

  // The position of the action in the receipt rule
  position?: number;
}

export function ses_ReceiptRuleStopAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scope",
      "The scope to apply. The only acceptable value is `RuleSet`.",
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
      InputType.Number,
      "position",
      "The position of the action in the receipt rule",
      () => [],
      true,
      false,
    ),
  ];
}
