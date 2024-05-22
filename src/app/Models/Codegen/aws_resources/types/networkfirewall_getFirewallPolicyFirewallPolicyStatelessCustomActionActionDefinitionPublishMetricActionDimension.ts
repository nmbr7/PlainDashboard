import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  //
  value?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "value", "", [], true, false)];
}
