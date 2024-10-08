import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iot_TopicRuleErrorActionLambda {
  // The ARN of the Lambda function.
  functionArn?: string;
}

export function iot_TopicRuleErrorActionLambda_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "functionArn",
      "The ARN of the Lambda function.",
      () => [],
      true,
      false,
    ),
  ];
}
