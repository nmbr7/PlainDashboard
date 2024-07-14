import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose {
  // The name of the delivery stream.
  deliveryStream?: string;

  // Indicates whether logging is enabled.
  enabled?: boolean;
}

export function verifiedaccess_InstanceLoggingConfigurationAccessLogsKinesisDataFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "The name of the delivery stream.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether logging is enabled.",
      [],
      true,
      false,
    ),
  ];
}
