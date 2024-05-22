import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll";

export interface wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "all",
      "An empty configuration block that is used for inspecting all headers.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedPaths",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
