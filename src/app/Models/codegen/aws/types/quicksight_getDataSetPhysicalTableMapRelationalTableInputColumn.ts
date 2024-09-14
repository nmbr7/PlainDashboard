import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn {
  //
  name?: string;

  //
  type?: string;
}

export function quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
  ];
}