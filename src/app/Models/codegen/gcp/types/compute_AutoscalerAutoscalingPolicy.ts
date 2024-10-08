import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_AutoscalerAutoscalingPolicyCpuUtilization,
  compute_AutoscalerAutoscalingPolicyCpuUtilization_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyCpuUtilization";
import {
  compute_AutoscalerAutoscalingPolicyScaleInControl,
  compute_AutoscalerAutoscalingPolicyScaleInControl_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyScaleInControl";
import {
  compute_AutoscalerAutoscalingPolicyLoadBalancingUtilization,
  compute_AutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyLoadBalancingUtilization";
import {
  compute_AutoscalerAutoscalingPolicyMetric,
  compute_AutoscalerAutoscalingPolicyMetric_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyMetric";
import {
  compute_AutoscalerAutoscalingPolicyScaleDownControl,
  compute_AutoscalerAutoscalingPolicyScaleDownControl_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyScaleDownControl";
import {
  compute_AutoscalerAutoscalingPolicyScalingSchedule,
  compute_AutoscalerAutoscalingPolicyScalingSchedule_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyScalingSchedule";

export interface compute_AutoscalerAutoscalingPolicy {
  /*
The number of seconds that the autoscaler should wait before it
starts collecting information from a new instance. This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.
Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.
*/
  cooldownPeriod?: number;

  /*
Defines the CPU utilization policy that allows the autoscaler to
scale based on the average CPU utilization of a managed instance
group.
Structure is documented below.
*/
  cpuUtilization?: compute_AutoscalerAutoscalingPolicyCpuUtilization;

  /*
The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
*/
  maxReplicas?: number;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  scaleInControl?: compute_AutoscalerAutoscalingPolicyScaleInControl;

  /*
Configuration parameters of autoscaling based on a load balancer.
Structure is documented below.
*/
  loadBalancingUtilization?: compute_AutoscalerAutoscalingPolicyLoadBalancingUtilization;

  /*
Configuration parameters of autoscaling based on a custom metric.
Structure is documented below.
*/
  metrics?: Array<compute_AutoscalerAutoscalingPolicyMetric>;

  /*
The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
*/
  minReplicas?: number;

  // Defines operating mode for this policy.
  mode?: string;

  /*
Defines scale down controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  scaleDownControl?: compute_AutoscalerAutoscalingPolicyScaleDownControl;

  /*
Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.
Structure is documented below.
*/
  scalingSchedules?: Array<compute_AutoscalerAutoscalingPolicyScalingSchedule>;
}

export function compute_AutoscalerAutoscalingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "loadBalancingUtilization",
      "Configuration parameters of autoscaling based on a load balancer.\nStructure is documented below.",
      () =>
        compute_AutoscalerAutoscalingPolicyLoadBalancingUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minReplicas",
      "The minimum number of replicas that the autoscaler can scale down\nto. This cannot be less than 0. If not provided, autoscaler will\nchoose a default value depending on maximum number of instances\nallowed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Defines operating mode for this policy.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scalingSchedules",
      "Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler and they can overlap.\nStructure is documented below.",
      () => compute_AutoscalerAutoscalingPolicyScalingSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cooldownPeriod",
      "The number of seconds that the autoscaler should wait before it\nstarts collecting information from a new instance. This prevents\nthe autoscaler from collecting information when the instance is\ninitializing, during which the collected usage would not be\nreliable. The default time autoscaler waits is 60 seconds.\nVirtual machine initialization times might vary because of\nnumerous factors. We recommend that you test how long an\ninstance may take to initialize. To do this, create an instance\nand time the startup process.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxReplicas",
      "The maximum number of instances that the autoscaler can scale up\nto. This is required when creating or updating an autoscaler. The\nmaximum number of replicas should not be lower than minimal number\nof replicas.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleInControl",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      () => compute_AutoscalerAutoscalingPolicyScaleInControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metrics",
      "Configuration parameters of autoscaling based on a custom metric.\nStructure is documented below.",
      () => compute_AutoscalerAutoscalingPolicyMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleDownControl",
      "Defines scale down controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      () => compute_AutoscalerAutoscalingPolicyScaleDownControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cpuUtilization",
      "Defines the CPU utilization policy that allows the autoscaler to\nscale based on the average CPU utilization of a managed instance\ngroup.\nStructure is documented below.",
      () => compute_AutoscalerAutoscalingPolicyCpuUtilization_GetTypes(),
      false,
      false,
    ),
  ];
}
