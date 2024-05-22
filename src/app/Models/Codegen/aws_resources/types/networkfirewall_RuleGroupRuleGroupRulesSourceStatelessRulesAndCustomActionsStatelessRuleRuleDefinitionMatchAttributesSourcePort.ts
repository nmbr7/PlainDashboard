import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  // The lower limit of the port range. This must be less than or equal to the `to_port`.
  fromPort?: number;

  // The upper limit of the port range. This must be greater than or equal to the `from_port`.
  toPort?: number;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "The lower limit of the port range. This must be less than or equal to the `to_port`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "The upper limit of the port range. This must be greater than or equal to the `from_port`.",
      [],
      false,
      false,
    ),
  ];
}
