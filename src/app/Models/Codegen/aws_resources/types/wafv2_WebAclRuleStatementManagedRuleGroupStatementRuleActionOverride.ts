import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride {
  // Override action to use, in place of the configured action of the rule in the rule group. See `action` for details.
  actionToUse?: wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse;

  // Name of the rule to override. See the [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html) for a list of names in the appropriate rule group in use.
  name?: string;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the rule to override. See the [documentation](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html) for a list of names in the appropriate rule group in use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "actionToUse",
      "Override action to use, in place of the configured action of the rule in the rule group. See `action` for details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverrideActionToUse_GetTypes(),
      true,
      false,
    ),
  ];
}
