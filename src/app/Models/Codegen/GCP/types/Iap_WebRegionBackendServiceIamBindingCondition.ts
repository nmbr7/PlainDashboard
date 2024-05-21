import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iap_WebRegionBackendServiceIamBindingCondition {
  // A title for the expression, i.e. a short string describing its purpose.
  title?: string;

  //
  description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;
}

export function iap_WebRegionBackendServiceIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "title",
      "A title for the expression, i.e. a short string describing its purpose.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "description", "", [], false, true),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      [],
      true,
      true,
    ),
  ];
}
