import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterServiceExternalIpsConfig {
  // Controls whether external ips specified by a service will be allowed. It is enabled by default.
  enabled?: boolean;
}

export function container_ClusterServiceExternalIpsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Controls whether external ips specified by a service will be allowed. It is enabled by default.",
      [],
      true,
      false,
    ),
  ];
}
