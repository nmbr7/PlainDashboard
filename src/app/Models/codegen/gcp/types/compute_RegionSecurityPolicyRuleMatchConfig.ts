import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionSecurityPolicyRuleMatchConfig {
  // CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  srcIpRanges?: Array<string>;
}

export function compute_RegionSecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "srcIpRanges",
      "CIDR IP address range. Maximum number of srcIpRanges allowed is 10.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
