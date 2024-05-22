import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleActionChallengeCustomRequestHandling,
  wafv2_WebAclRuleActionChallengeCustomRequestHandling_GetTypes,
} from "./wafv2_WebAclRuleActionChallengeCustomRequestHandling";

export interface wafv2_WebAclRuleActionChallenge {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleActionChallengeCustomRequestHandling;
}

export function wafv2_WebAclRuleActionChallenge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customRequestHandling",
      "Defines custom handling for the web request. See `custom_request_handling` below for details.",
      wafv2_WebAclRuleActionChallengeCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
