import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ForwardingRuleServiceDirectoryRegistrations {
  // Service Directory namespace to register the forwarding rule under.
  namespace?: string;

  // Service Directory service to register the forwarding rule under.
  service?: string;
}

export function compute_ForwardingRuleServiceDirectoryRegistrations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Service Directory namespace to register the forwarding rule under.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Service Directory service to register the forwarding rule under.",
      [],
      false,
      true,
    ),
  ];
}
