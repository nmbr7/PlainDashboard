import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lakeformation_ResourceLfTagsDatabase,
  lakeformation_ResourceLfTagsDatabase_GetTypes,
} from "../types/lakeformation_ResourceLfTagsDatabase";
import {
  lakeformation_ResourceLfTagsLfTag,
  lakeformation_ResourceLfTagsLfTag_GetTypes,
} from "../types/lakeformation_ResourceLfTagsLfTag";
import {
  lakeformation_ResourceLfTagsTable,
  lakeformation_ResourceLfTagsTable_GetTypes,
} from "../types/lakeformation_ResourceLfTagsTable";
import {
  lakeformation_ResourceLfTagsTableWithColumns,
  lakeformation_ResourceLfTagsTableWithColumns_GetTypes,
} from "../types/lakeformation_ResourceLfTagsTableWithColumns";

export interface ResourceLfTagsArgs {
  // Configuration block for a table resource. See below.
  table?: lakeformation_ResourceLfTagsTable;

  /*
Configuration block for a table with columns resource. See below.

The following arguments are optional:
*/
  tableWithColumns?: lakeformation_ResourceLfTagsTableWithColumns;

  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  catalogId?: string;

  // Configuration block for a database resource. See below.
  database?: lakeformation_ResourceLfTagsDatabase;

  /*
Set of LF-tags to attach to the resource. See below.

Exactly one of the following is required:
*/
  lfTags?: Array<lakeformation_ResourceLfTagsLfTag>;
}
export class ResourceLfTags extends Resource {
  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  public catalogId?: string;

  // Configuration block for a database resource. See below.
  public database?: lakeformation_ResourceLfTagsDatabase;

  /*
Set of LF-tags to attach to the resource. See below.

Exactly one of the following is required:
*/
  public lfTags?: Array<lakeformation_ResourceLfTagsLfTag>;

  // Configuration block for a table resource. See below.
  public table?: lakeformation_ResourceLfTagsTable;

  /*
Configuration block for a table with columns resource. See below.

The following arguments are optional:
*/
  public tableWithColumns?: lakeformation_ResourceLfTagsTableWithColumns;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "lfTags",
        "Set of LF-tags to attach to the resource. See below.\n\nExactly one of the following is required:",
        lakeformation_ResourceLfTagsLfTag_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "table",
        "Configuration block for a table resource. See below.",
        lakeformation_ResourceLfTagsTable_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tableWithColumns",
        "Configuration block for a table with columns resource. See below.\n\nThe following arguments are optional:",
        lakeformation_ResourceLfTagsTableWithColumns_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "database",
        "Configuration block for a database resource. See below.",
        lakeformation_ResourceLfTagsDatabase_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
