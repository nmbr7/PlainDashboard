import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix {
  // Specifies the partition date source for the partitioned prefix. Valid values: `EventTime`, `DeliveryTime`.
  partitionDateSource?: string;
}

export function s3_BucketLoggingV2TargetObjectKeyFormatPartitionedPrefix_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "partitionDateSource",
      "Specifies the partition date source for the partitioned prefix. Valid values: `EventTime`, `DeliveryTime`.",
      [],
      true,
      false,
    ),
  ];
}
