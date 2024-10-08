import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_MachineImageIamBindingCondition {
  // A title for the expression, i.e. a short string describing its purpose.
  title?: string;

  // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;
}

export function compute_MachineImageIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "title",
      "A title for the expression, i.e. a short string describing its purpose.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      () => [],
      true,
      true,
    ),
  ];
}
