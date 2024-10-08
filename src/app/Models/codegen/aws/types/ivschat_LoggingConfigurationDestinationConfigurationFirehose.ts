import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ivschat_LoggingConfigurationDestinationConfigurationFirehose {
  // Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
  deliveryStreamName?: string;
}

export function ivschat_LoggingConfigurationDestinationConfigurationFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStreamName",
      "Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.",
      () => [],
      true,
      false,
    ),
  ];
}
