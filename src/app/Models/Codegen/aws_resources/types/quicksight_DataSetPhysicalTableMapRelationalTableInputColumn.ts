import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetPhysicalTableMapRelationalTableInputColumn {
  // Data type of the column.
  type?: string;

  // Name of this column in the underlying data source.
  name?: string;
}

export function quicksight_DataSetPhysicalTableMapRelationalTableInputColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of this column in the underlying data source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Data type of the column.",
      [],
      true,
      false,
    ),
  ];
}
