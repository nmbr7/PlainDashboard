import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface organizations_IAMBindingCondition {
  //
  description?: string;

  //
  expression?: string;

  //
  title?: string;
}

export function organizations_IAMBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "description", "", [], false, true),
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
  ];
}
