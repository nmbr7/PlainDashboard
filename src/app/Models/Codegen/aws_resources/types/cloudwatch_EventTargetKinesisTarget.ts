import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetKinesisTarget {
  // The JSON path to be extracted from the event and used as the partition key.
  partitionKeyPath?: string;
}

export function cloudwatch_EventTargetKinesisTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "partitionKeyPath",
      "The JSON path to be extracted from the event and used as the partition key.",
      [],
      false,
      false,
    ),
  ];
}
