import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource {
  // The schema name in the source.
  name?: string;

  // The Doc AI processor type name.
  processorType?: string;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "processorType",
      "The Doc AI processor type name.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The schema name in the source.",
      () => [],
      false,
      true,
    ),
  ];
}
