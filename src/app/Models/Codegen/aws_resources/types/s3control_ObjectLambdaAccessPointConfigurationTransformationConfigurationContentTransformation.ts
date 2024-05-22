import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda,
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda_GetTypes,
} from "./s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda";

export interface s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation {
  // Configuration for an AWS Lambda function. See AWS Lambda below for more details.
  awsLambda?: s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda;
}

export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "awsLambda",
      "Configuration for an AWS Lambda function. See AWS Lambda below for more details.",
      s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda_GetTypes(),
      true,
      false,
    ),
  ];
}
