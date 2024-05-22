import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption {
  //
  streamExceptionPolicy?: string;

  //
  ruleOrder?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamExceptionPolicy",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "ruleOrder", "", [], true, false),
  ];
}
