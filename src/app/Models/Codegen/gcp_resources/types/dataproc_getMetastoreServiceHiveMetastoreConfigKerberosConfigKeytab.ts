import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
  /*
The relative resource name of a Secret Manager secret version, in the following form:

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".
*/
  cloudSecret?: string;
}

export function dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudSecret",
      'The relative resource name of a Secret Manager secret version, in the following form:\n\n"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".',
      [],
      true,
      false,
    ),
  ];
}
