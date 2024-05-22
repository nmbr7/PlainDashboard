import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty {
  //
  uniqueKey?: boolean;
}

export function quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Bool, "uniqueKey", "", [], true, false)];
}
