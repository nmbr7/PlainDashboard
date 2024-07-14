import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_DatasetAccessDatasetDataset {
  // The ID of the dataset containing this table.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;
}

export function bigquery_DatasetAccessDatasetDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of the dataset containing this table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project containing this table.",
      [],
      true,
      false,
    ),
  ];
}
