import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
  // The ARN of the input Kinesis data stream to read.
  resourceArn?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The ARN of the input Kinesis data stream to read.",
      [],
      true,
      false,
    ),
  ];
}
