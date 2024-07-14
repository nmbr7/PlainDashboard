import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusion,
  compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfigExclusion";

export interface compute_SecurityPolicyRulePreconfiguredWafConfig {
  // An exclusion to apply during preconfigured WAF evaluation. Structure is documented below.
  exclusions?: Array<compute_SecurityPolicyRulePreconfiguredWafConfigExclusion>;
}

export function compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exclusions",
      "An exclusion to apply during preconfigured WAF evaluation. Structure is documented below.",
      compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes(),
      false,
      false,
    ),
  ];
}
