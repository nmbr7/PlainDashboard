import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn,
  quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn";

export interface quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation {
  // Calculated columns to create. See columns.
  columns?: Array<quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn>;
}

export function quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "Calculated columns to create. See columns.",
      quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(),
      true,
      false,
    ),
  ];
}
