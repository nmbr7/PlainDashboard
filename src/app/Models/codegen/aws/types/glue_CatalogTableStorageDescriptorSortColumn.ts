import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_CatalogTableStorageDescriptorSortColumn {
  // Name of the column.
  column?: string;

  // Whether the column is sorted in ascending (`1`) or descending order (`0`).
  sortOrder?: number;
}

export function glue_CatalogTableStorageDescriptorSortColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sortOrder",
      "Whether the column is sorted in ascending (`1`) or descending order (`0`).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "column",
      "Name of the column.",
      () => [],
      true,
      false,
    ),
  ];
}
