import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement {
  // Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.
  fieldToMatch?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch;

  // Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.
  sensitivityLevel?: string;

  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.
  textTransformations?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Part of a web request that you want AWS WAF to inspect. See `field_to_match` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sensitivityLevel",
      "Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. At least one transformation is required. See `text_transformation` below for details.",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
