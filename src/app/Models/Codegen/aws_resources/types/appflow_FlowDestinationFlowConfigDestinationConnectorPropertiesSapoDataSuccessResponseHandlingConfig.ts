import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig {
  // Name of the Amazon S3 bucket.
  bucketName?: string;

  // Amazon S3 bucket prefix.
  bucketPrefix?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the Amazon S3 bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Amazon S3 bucket prefix.",
      [],
      false,
      false,
    ),
  ];
}
