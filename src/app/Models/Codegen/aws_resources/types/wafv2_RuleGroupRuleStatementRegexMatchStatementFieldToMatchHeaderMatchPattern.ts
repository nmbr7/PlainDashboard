import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll;

  // An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.
  excludedHeaders?: Array<string>;

  // An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.
  includedHeaders?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludedHeaders",
      "An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedHeaders",
      "An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll_GetTypes(),
      false,
      false,
    ),
  ];
}
