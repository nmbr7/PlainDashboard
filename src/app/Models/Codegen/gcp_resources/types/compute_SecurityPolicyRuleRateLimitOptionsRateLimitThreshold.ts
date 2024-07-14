import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  // Interval over which the threshold is computed.
  intervalSec?: number;

  // Number of HTTP(S) requests for calculating the threshold.
  count?: number;
}

export function compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "intervalSec",
      "Interval over which the threshold is computed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "Number of HTTP(S) requests for calculating the threshold.",
      [],
      true,
      false,
    ),
  ];
}
