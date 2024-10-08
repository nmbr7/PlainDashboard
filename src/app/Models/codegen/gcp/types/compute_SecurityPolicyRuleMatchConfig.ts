import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityPolicyRuleMatchConfig {
  /*
Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation
to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of `-` matches all IPs
(can be used to override the default behavior).
*/
  srcIpRanges?: Array<string>;
}

export function compute_SecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "srcIpRanges",
      "Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation\nto match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of `*` matches all IPs\n(can be used to override the default behavior).",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
