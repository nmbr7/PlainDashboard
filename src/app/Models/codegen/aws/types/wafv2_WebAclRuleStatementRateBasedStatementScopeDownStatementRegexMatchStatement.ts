import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch;

  // String representing the regular expression. Minimum of `1` and maximum of `512` characters.
  regexString?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexString",
      "String representing the regular expression. Minimum of `1` and maximum of `512` characters.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
