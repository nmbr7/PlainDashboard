import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface tags_TagValueIamBindingCondition {
  //
  description?: string;

  //
  expression?: string;

  //
  title?: string;
}

export function tags_TagValueIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
    new DynamicUIProps(InputType.String, "description", "", [], false, true),
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
  ];
}
