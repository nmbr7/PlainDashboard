import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_getTableReplica {
  //
  kmsKeyArn?: string;

  //
  regionName?: string;
}

export function dynamodb_getTableReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "kmsKeyArn", "", [], true, false),
    new DynamicUIProps(InputType.String, "regionName", "", [], true, false),
  ];
}
