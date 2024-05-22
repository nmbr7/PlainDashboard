import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_ServiceTemplateContainerResources {
  /*
Determines whether CPU is only allocated during requests. True by default if the parent `resources` field is not set. However, if
`resources` is set, this field must be explicitly set to true to preserve the default behavior.
*/
  cpuIdle?: boolean;

  // Only memory and CPU are supported. Use key `cpu` for CPU limit and `memory` for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  limits?: Map<string, string>;

  // Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.
  startupCpuBoost?: boolean;
}

export function cloudrunv2_ServiceTemplateContainerResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "cpuIdle",
      "Determines whether CPU is only allocated during requests. True by default if the parent `resources` field is not set. However, if\n`resources` is set, this field must be explicitly set to true to preserve the default behavior.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "limits",
      "Only memory and CPU are supported. Use key `cpu` for CPU limit and `memory` for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "startupCpuBoost",
      "Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.",
      [],
      false,
      false,
    ),
  ];
}
