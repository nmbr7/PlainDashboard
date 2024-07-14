import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
  // The ARN of the destination delivery stream to write to.
  resourceArn?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The ARN of the destination delivery stream to write to.",
      [],
      true,
      false,
    ),
  ];
}
