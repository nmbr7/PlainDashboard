import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition_GetTypes,
} from "./essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition";

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions {
  /*
Defines the metadata for a schema property.
Structure is documented below.
*/
  propertyDefinitions?: Array<essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition>;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "propertyDefinitions",
      "Defines the metadata for a schema property.\nStructure is documented below.",
      essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition_GetTypes(),
      true,
      true,
    ),
  ];
}
