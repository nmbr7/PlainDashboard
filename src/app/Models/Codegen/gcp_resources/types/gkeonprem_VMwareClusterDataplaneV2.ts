import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_VMwareClusterDataplaneV2 {
  // Enable advanced networking which requires dataplane_v2_enabled to be set true.
  advancedNetworking?: boolean;

  // Enables Dataplane V2.
  dataplaneV2Enabled?: boolean;

  // Enable Dataplane V2 for clusters with Windows nodes.
  windowsDataplaneV2Enabled?: boolean;
}

export function gkeonprem_VMwareClusterDataplaneV2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dataplaneV2Enabled",
      "Enables Dataplane V2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "windowsDataplaneV2Enabled",
      "Enable Dataplane V2 for clusters with Windows nodes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "advancedNetworking",
      "Enable advanced networking which requires dataplane_v2_enabled to be set true.",
      [],
      false,
      false,
    ),
  ];
}
