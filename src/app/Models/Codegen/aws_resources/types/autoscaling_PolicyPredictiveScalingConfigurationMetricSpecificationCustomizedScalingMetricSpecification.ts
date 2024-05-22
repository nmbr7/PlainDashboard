import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery";

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification {
  // List of up to 10 structures that defines custom scaling metric in predictive scaling policy
  metricDataQueries?: Array<autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery>;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metricDataQueries",
      "List of up to 10 structures that defines custom scaling metric in predictive scaling policy",
      autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery_GetTypes(),
      true,
      false,
    ),
  ];
}
