import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_WorkflowTemplateParameterValidationRegex {
  // Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
  regexes?: Array<string>;
}

export function dataproc_WorkflowTemplateParameterValidationRegex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regexes",
      "Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
