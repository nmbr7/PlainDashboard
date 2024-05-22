import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_ConnectionCloudSqlCredential,
  bigquery_ConnectionCloudSqlCredential_GetTypes,
} from "./bigquery_ConnectionCloudSqlCredential";

export interface bigquery_ConnectionCloudSql {
  /*
(Output)
When the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.
*/
  serviceAccountId?: string;

  /*
Type of the Cloud SQL database.
Possible values are: `DATABASE_TYPE_UNSPECIFIED`, `POSTGRES`, `MYSQL`.
*/
  type?: string;

  /*
Cloud SQL properties.
Structure is documented below.
*/
  credential?: bigquery_ConnectionCloudSqlCredential;

  // Database name.
  database?: string;

  // Cloud SQL instance ID in the form project:location:instance.
  instanceId?: string;
}

export function bigquery_ConnectionCloudSql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of the Cloud SQL database.\nPossible values are: `DATABASE_TYPE_UNSPECIFIED`, `POSTGRES`, `MYSQL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credential",
      "Cloud SQL properties.\nStructure is documented below.",
      bigquery_ConnectionCloudSqlCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "Database name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "Cloud SQL instance ID in the form project:location:instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountId",
      "(Output)\nWhen the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.",
      [],
      false,
      false,
    ),
  ];
}
