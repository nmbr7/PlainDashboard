import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_UserPoolLambdaConfigCustomSmsSender {
  // The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom SMS Lambda function. The only supported value is `V1_0`.
  lambdaVersion?: string;

  // The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send SMS notifications to users.
  lambdaArn?: string;
}

export function cognito_UserPoolLambdaConfigCustomSmsSender_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lambdaVersion",
      'The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom SMS Lambda function. The only supported value is `V1_0`.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaArn",
      "The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send SMS notifications to users.",
      [],
      true,
      false,
    ),
  ];
}
