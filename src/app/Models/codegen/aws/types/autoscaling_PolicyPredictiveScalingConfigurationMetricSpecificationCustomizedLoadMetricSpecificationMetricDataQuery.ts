import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat";

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery {
  // Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true
  returnData?: boolean;

  // Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both.
  expression?: string;

  // Short name for the metric used in predictive scaling policy.
  id?: string;

  // Human-readable label for this metric or expression.
  label?: string;

  // Structure that defines CloudWatch metric to be used in predictive scaling policy. You must specify either `expression` or `metric_stat`, but not both.
  metricStat?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "returnData",
      "Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Short name for the metric used in predictive scaling policy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "label",
      "Human-readable label for this metric or expression.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metricStat",
      "Structure that defines CloudWatch metric to be used in predictive scaling policy. You must specify either `expression` or `metric_stat`, but not both.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat_GetTypes(),
      false,
      false,
    ),
  ];
}
