import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetPhysicalTableMapCustomSqlColumn {
  // Name of this column in the underlying data source.
  name?: string;

  // Data type of the column.
  type?: string;
}

export function quicksight_DataSetPhysicalTableMapCustomSqlColumn_GetTypes(): DynamicUIProps[] {
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
