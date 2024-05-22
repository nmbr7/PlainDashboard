import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainClusterConfigZoneAwarenessConfig {
  // Number of Availability Zones for the domain to use with `zone_awareness_enabled`. Defaults to `2`. Valid values: `2` or `3`.
  availabilityZoneCount?: number;
}

export function opensearch_DomainClusterConfigZoneAwarenessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "availabilityZoneCount",
      "Number of Availability Zones for the domain to use with `zone_awareness_enabled`. Defaults to `2`. Valid values: `2` or `3`.",
      [],
      false,
      false,
    ),
  ];
}
