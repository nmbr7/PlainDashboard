import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig,
  healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig_GetTypes,
} from "./healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig";

export interface healthcare_FhirStoreStreamConfigBigqueryDestination {
  /*
The configuration for the exported BigQuery schema.
Structure is documented below.
*/
  schemaConfig?: healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig;

  // BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  datasetUri?: string;
}

export function healthcare_FhirStoreStreamConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "schemaConfig",
      "The configuration for the exported BigQuery schema.\nStructure is documented below.",
      healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datasetUri",
      "BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId",
      [],
      true,
      false,
    ),
  ];
}
