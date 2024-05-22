import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity {
  // Number of characters after the finding to consider.
  windowAfter?: number;

  // Number of characters before the finding to consider.
  windowBefore?: number;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "windowAfter",
      "Number of characters after the finding to consider.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "windowBefore",
      "Number of characters before the finding to consider.",
      [],
      false,
      false,
    ),
  ];
}
