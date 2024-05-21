import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_DatasetExternalDatasetReference {
  /*
The connection id that is used to access the externalSource.
Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}
*/
  connection?: string;

  // External source that backs this dataset.
  externalSource?: string;
}

export function bigquery_DatasetExternalDatasetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connection",
      "The connection id that is used to access the externalSource.\nFormat: projects/{projectId}/locations/{locationId}/connections/{connectionId}",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalSource",
      "External source that backs this dataset.",
      [],
      true,
      true,
    ),
  ];
}
