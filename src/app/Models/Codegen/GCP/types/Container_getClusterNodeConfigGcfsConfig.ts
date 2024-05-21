import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodeConfigGcfsConfig {
  // Whether or not GCFS is enabled
  enabled?: boolean;
}

export function container_getClusterNodeConfigGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not GCFS is enabled",
      [],
      true,
      false,
    ),
  ];
}
