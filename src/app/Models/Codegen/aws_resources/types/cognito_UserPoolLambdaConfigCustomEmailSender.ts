import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolLambdaConfigCustomEmailSender {
  // The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send email notifications to users.
  lambdaArn?: string;

  // The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom email Lambda function. The only supported value is `V1_0`.
  lambdaVersion?: string;
}

export function cognito_UserPoolLambdaConfigCustomEmailSender_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lambdaArn",
      "The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send email notifications to users.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaVersion",
      'The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom email Lambda function. The only supported value is `V1_0`.',
      [],
      true,
      false,
    ),
  ];
}
