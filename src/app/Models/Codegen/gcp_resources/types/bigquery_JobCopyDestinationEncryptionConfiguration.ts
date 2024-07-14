import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_JobCopyDestinationEncryptionConfiguration {
  /*
Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key.
*/
  kmsKeyName?: string;

  /*
(Output)
Describes the Cloud KMS encryption key version used to protect destination BigQuery table.
*/
  kmsKeyVersion?: string;
}

export function bigquery_JobCopyDestinationEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.\nThe BigQuery Service Account associated with your project requires access to this encryption key.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyVersion",
      "(Output)\nDescribes the Cloud KMS encryption key version used to protect destination BigQuery table.",
      [],
      false,
      false,
    ),
  ];
}
