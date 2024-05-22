import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CatalogTableStorageDescriptorSerDeInfo {
  // Name of the SerDe.
  name?: string;

  // Map of initialization parameters for the SerDe, in key-value form.
  parameters?: Map<string, string>;

  // Usually the class that implements the SerDe. An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe`.
  serializationLibrary?: string;
}

export function glue_CatalogTableStorageDescriptorSerDeInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the SerDe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "Map of initialization parameters for the SerDe, in key-value form.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serializationLibrary",
      "Usually the class that implements the SerDe. An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe`.",
      [],
      false,
      false,
    ),
  ];
}
