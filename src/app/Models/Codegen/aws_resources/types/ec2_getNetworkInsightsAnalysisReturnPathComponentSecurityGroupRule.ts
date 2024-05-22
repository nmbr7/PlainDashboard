import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule {
  //
  cidr?: string;

  //
  direction?: string;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange>;

  //
  prefixListId?: string;

  //
  protocol?: string;

  //
  securityGroupId?: string;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
    new DynamicUIProps(InputType.String, "direction", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], true, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
