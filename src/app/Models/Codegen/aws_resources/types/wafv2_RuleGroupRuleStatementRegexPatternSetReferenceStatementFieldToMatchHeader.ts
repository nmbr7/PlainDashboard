import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern";

export interface wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader {
  // The filter to use to identify the subset of headers to inspect in a web request. The `match_pattern` block supports only one of the following arguments:
  matchPattern?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern;

  // The parts of the headers to inspect with the rule inspection criteria. If you specify `All`, AWS WAF inspects both keys and values. Valid values include the following: `ALL`, `Key`, `Value`.
  matchScope?: string;

  // Oversize handling tells AWS WAF what to do with a web request when the request component that the rule inspects is over the limits. Valid values include the following: `CONTINUE`, `MATCH`, `NO_MATCH`. See the AWS [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-oversize-handling.html) for more information.
  oversizeHandling?: string;
}

export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "matchPattern",
      "The filter to use to identify the subset of headers to inspect in a web request. The `match_pattern` block supports only one of the following arguments:",
      wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderMatchPattern_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchScope",
      "The parts of the headers to inspect with the rule inspection criteria. If you specify `All`, AWS WAF inspects both keys and values. Valid values include the following: `ALL`, `Key`, `Value`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oversizeHandling",
      "Oversize handling tells AWS WAF what to do with a web request when the request component that the rule inspects is over the limits. Valid values include the following: `CONTINUE`, `MATCH`, `NO_MATCH`. See the AWS [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-oversize-handling.html) for more information.",
      [],
      true,
      false,
    ),
  ];
}
