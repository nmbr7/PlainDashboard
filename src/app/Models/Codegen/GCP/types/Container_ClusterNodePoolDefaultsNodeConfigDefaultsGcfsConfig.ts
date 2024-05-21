import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  // Whether or not the Google Container Filesystem (GCFS) is enabled
  enabled?: boolean;
}

export function container_ClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not the Google Container Filesystem (GCFS) is enabled",
      [],
      true,
      false,
    ),
  ];
}
