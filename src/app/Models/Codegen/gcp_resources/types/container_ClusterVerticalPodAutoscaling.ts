import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterVerticalPodAutoscaling {
  // Enables vertical pod autoscaling
  enabled?: boolean;
}

export function container_ClusterVerticalPodAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables vertical pod autoscaling",
      [],
      true,
      false,
    ),
  ];
}
