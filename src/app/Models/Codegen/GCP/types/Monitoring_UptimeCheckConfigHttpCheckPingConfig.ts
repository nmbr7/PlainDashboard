import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface monitoring_UptimeCheckConfigHttpCheckPingConfig {
  // Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.
  pingsCount?: number;
}

export function monitoring_UptimeCheckConfigHttpCheckPingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "pingsCount",
      "Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.",
      [],
      true,
      false,
    ),
  ];
}
