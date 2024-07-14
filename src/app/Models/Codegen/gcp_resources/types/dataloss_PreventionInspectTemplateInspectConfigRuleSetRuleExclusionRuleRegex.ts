import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex {
  // The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  groupIndexes?: Array<number>;

  /*
Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
*/
  pattern?: string;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groupIndexes",
      "The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pattern",
      "Pattern defining the regular expression.\nIts syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.",
      [],
      true,
      false,
    ),
  ];
}
