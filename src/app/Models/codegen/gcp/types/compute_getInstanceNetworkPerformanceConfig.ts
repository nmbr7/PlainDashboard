import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceNetworkPerformanceConfig {
  // The egress bandwidth tier for the instance.
  totalEgressBandwidthTier?: string;
}

export function compute_getInstanceNetworkPerformanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalEgressBandwidthTier",
      "The egress bandwidth tier for the instance.",
      () => [],
      true,
      false,
    ),
  ];
}
