import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn,
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn";

export interface datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable {
  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  oracleColumns?: Array<datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn>;

  // Table name.
  table?: string;
}

export function datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oracleColumns",
      "Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "table",
      "Table name.",
      [],
      true,
      false,
    ),
  ];
}
