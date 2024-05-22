import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule {
  //
  ruleNumber?: number;

  //
  cidr?: string;

  //
  egress?: boolean;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ruleAction", "", [], true, false),
    new DynamicUIProps(InputType.Number, "ruleNumber", "", [], true, false),
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "egress", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
