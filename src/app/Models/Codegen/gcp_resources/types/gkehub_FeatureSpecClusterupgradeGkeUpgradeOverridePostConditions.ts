import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions {
  // Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.
  soaking?: string;
}

export function gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "soaking",
      'Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.',
      [],
      true,
      false,
    ),
  ];
}