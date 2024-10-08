import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
  // The Amazon Resource Name (ARN) of the delivery stream.
  firehoseArn?: string;
}

export function connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firehoseArn",
      "The Amazon Resource Name (ARN) of the delivery stream.",
      () => [],
      true,
      false,
    ),
  ];
}
