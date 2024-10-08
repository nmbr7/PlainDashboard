import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal {
  // An identifier for the Lake Formation principal.
  dataLakePrincipalIdentifier?: string;
}

export function glue_CatalogDatabaseCreateTableDefaultPermissionPrincipal_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataLakePrincipalIdentifier",
      "An identifier for the Lake Formation principal.",
      () => [],
      false,
      false,
    ),
  ];
}
