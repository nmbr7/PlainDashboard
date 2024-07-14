import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudasset_FolderFeedCondition {
  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  /*
String indicating the location of the expression for error reporting, e.g. a file
name and a position in the file.
*/
  location?: string;

  /*
Title for the expression, i.e. a short string describing its purpose.
This can be used e.g. in UIs which allow to enter the expression.
*/
  title?: string;

  /*
Description of the expression. This is a longer text which describes the expression,
e.g. when hovered over it in a UI.
*/
  description?: string;
}

export function cloudasset_FolderFeedCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the expression. This is a longer text which describes the expression,\ne.g. when hovered over it in a UI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "String indicating the location of the expression for error reporting, e.g. a file\nname and a position in the file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Title for the expression, i.e. a short string describing its purpose.\nThis can be used e.g. in UIs which allow to enter the expression.",
      [],
      false,
      false,
    ),
  ];
}
