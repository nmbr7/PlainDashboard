import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface monitoring_AlertPolicyConditionConditionAbsentTrigger {
  /*
The absolute number of time series
that must fail the predicate for the
condition to be triggered.
*/
  count?: number;

  /*
The percentage of time series that
must fail the predicate for the
condition to be triggered.
*/
  percent?: number;
}

export function monitoring_AlertPolicyConditionConditionAbsentTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The absolute number of time series\nthat must fail the predicate for the\ncondition to be triggered.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "The percentage of time series that\nmust fail the predicate for the\ncondition to be triggered.",
      [],
      false,
      false,
    ),
  ];
}
