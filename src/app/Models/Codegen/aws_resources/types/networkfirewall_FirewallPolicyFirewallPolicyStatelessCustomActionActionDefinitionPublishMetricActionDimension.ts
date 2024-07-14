import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  // The string value to use in the custom metric dimension.
  value?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The string value to use in the custom metric dimension.",
      [],
      true,
      false,
    ),
  ];
}
