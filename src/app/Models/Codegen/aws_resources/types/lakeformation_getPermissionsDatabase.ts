import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lakeformation_getPermissionsDatabase {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  /*
Name of the database resource. Unique to the Data Catalog.

The following argument is optional:
*/
  name?: string;
}

export function lakeformation_getPermissionsDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the database resource. Unique to the Data Catalog.\n\nThe following argument is optional:",
      [],
      true,
      false,
    ),
  ];
}
