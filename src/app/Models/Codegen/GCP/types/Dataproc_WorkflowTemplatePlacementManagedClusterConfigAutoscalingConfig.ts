import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig {
  // The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/` Note that the policy must be in the same project and Dataproc region.
  policy?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policy",
      "The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/` Note that the policy must be in the same project and Dataproc region.",
      [],
      false,
      true,
    ),
  ];
}
