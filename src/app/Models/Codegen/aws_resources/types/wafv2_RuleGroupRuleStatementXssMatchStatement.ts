import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation,
  wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementXssMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementXssMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
