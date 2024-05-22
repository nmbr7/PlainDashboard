import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension,
  networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes,
} from "./networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension";

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  //
  dimensions?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension>;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "",
      networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
