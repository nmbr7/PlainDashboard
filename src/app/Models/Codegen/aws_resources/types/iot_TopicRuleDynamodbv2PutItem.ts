import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleDynamodbv2PutItem {
  // The name of the DynamoDB table.
  tableName?: string;
}

export function iot_TopicRuleDynamodbv2PutItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the DynamoDB table.",
      [],
      true,
      false,
    ),
  ];
}
