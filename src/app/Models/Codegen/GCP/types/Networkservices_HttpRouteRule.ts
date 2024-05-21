import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_HttpRouteRuleAction,
  networkservices_HttpRouteRuleAction_GetTypes,
} from "./networkservices_HttpRouteRuleAction";
import {
  networkservices_HttpRouteRuleMatch,
  networkservices_HttpRouteRuleMatch_GetTypes,
} from "./networkservices_HttpRouteRuleMatch";

export interface networkservices_HttpRouteRule {
  /*
The detailed rule defining how to route matched traffic.
Structure is documented below.
*/
  action?: networkservices_HttpRouteRuleAction;

  /*
A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied.
If no matches field is specified, this rule will unconditionally match traffic.
If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list.
Structure is documented below.
*/
  matches?: Array<networkservices_HttpRouteRuleMatch>;
}

export function networkservices_HttpRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "The detailed rule defining how to route matched traffic.\nStructure is documented below.",
      networkservices_HttpRouteRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied.\nIf no matches field is specified, this rule will unconditionally match traffic.\nIf a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list.\nStructure is documented below.",
      networkservices_HttpRouteRuleMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
