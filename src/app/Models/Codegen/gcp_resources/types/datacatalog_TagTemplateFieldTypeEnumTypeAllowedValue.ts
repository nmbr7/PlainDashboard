import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue {
  // The display name for this template.
  displayName?: string;
}

export function datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name for this template.",
      [],
      true,
      false,
    ),
  ];
}
