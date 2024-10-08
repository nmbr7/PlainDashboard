import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  // Number of HTTP(S) requests for calculating the threshold.
  count?: number;

  // Interval over which the threshold is computed.
  intervalSec?: number;
}

export function compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "Number of HTTP(S) requests for calculating the threshold.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "intervalSec",
      "Interval over which the threshold is computed.",
      () => [],
      true,
      false,
    ),
  ];
}
