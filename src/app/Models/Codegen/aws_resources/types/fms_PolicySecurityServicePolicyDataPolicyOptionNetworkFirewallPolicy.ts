import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy {
  // Defines the deployment model to use for the third-party firewall policy. Valid values are `CENTRALIZED` and `DISTRIBUTED`.
  firewallDeploymentModel?: string;
}

export function fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firewallDeploymentModel",
      "Defines the deployment model to use for the third-party firewall policy. Valid values are `CENTRALIZED` and `DISTRIBUTED`.",
      [],
      false,
      false,
    ),
  ];
}
