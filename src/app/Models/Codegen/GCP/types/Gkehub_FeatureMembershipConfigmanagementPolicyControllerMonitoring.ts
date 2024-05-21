import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring {
  // Specifies the list of backends Policy Controller will export to. Must be one of `CLOUD_MONITORING` or `PROMETHEUS`. Defaults to [`CLOUD_MONITORING`, `PROMETHEUS`]. Specifying an empty value `[]` disables metrics export.
  backends?: Array<string>;
}

export function gkehub_FeatureMembershipConfigmanagementPolicyControllerMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "backends",
      "Specifies the list of backends Policy Controller will export to. Must be one of `CLOUD_MONITORING` or `PROMETHEUS`. Defaults to [`CLOUD_MONITORING`, `PROMETHEUS`]. Specifying an empty value `[]` disables metrics export.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
