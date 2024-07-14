import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern";

export interface wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies {
  // The filter to use to identify the subset of cookies to inspect in a web request. You must specify exactly one setting: either `all`, `included_cookies` or `excluded_cookies`. More details: [CookieMatchPattern](https://docs.aws.amazon.com/waf/latest/APIReference/API_CookieMatchPattern.html)
  matchPatterns?: Array<wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern>;

  // The parts of the cookies to inspect with the rule inspection criteria. If you specify All, AWS WAF inspects both keys and values. Valid values: `ALL`, `KEY`, `VALUE`
  matchScope?: string;

  // What AWS WAF should do if the cookies of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF. Valid values: `CONTINUE`, `MATCH`, `NO_MATCH`.
  oversizeHandling?: string;
}

export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matchPatterns",
      "The filter to use to identify the subset of cookies to inspect in a web request. You must specify exactly one setting: either `all`, `included_cookies` or `excluded_cookies`. More details: [CookieMatchPattern](https://docs.aws.amazon.com/waf/latest/APIReference/API_CookieMatchPattern.html)",
      wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchScope",
      "The parts of the cookies to inspect with the rule inspection criteria. If you specify All, AWS WAF inspects both keys and values. Valid values: `ALL`, `KEY`, `VALUE`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oversizeHandling",
      "What AWS WAF should do if the cookies of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF. Valid values: `CONTINUE`, `MATCH`, `NO_MATCH`.",
      [],
      true,
      false,
    ),
  ];
}
