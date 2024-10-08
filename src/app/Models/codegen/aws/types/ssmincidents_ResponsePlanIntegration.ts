import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmincidents_ResponsePlanIntegrationPagerduty,
  ssmincidents_ResponsePlanIntegrationPagerduty_GetTypes,
} from "./ssmincidents_ResponsePlanIntegrationPagerduty";

export interface ssmincidents_ResponsePlanIntegration {
  // Details about the PagerDuty configuration for a response plan. The following values are supported:
  pagerduties?: Array<ssmincidents_ResponsePlanIntegrationPagerduty>;
}

export function ssmincidents_ResponsePlanIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pagerduties",
      "Details about the PagerDuty configuration for a response plan. The following values are supported:",
      () => ssmincidents_ResponsePlanIntegrationPagerduty_GetTypes(),
      false,
      false,
    ),
  ];
}
