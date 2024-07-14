import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface eks_NodeGroupUpdateConfig {
  // Desired max number of unavailable worker nodes during node group update.
  maxUnavailable?: number;

  // Desired max percentage of unavailable worker nodes during node group update.
  maxUnavailablePercentage?: number;
}

export function eks_NodeGroupUpdateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxUnavailable",
      "Desired max number of unavailable worker nodes during node group update.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxUnavailablePercentage",
      "Desired max percentage of unavailable worker nodes during node group update.",
      [],
      false,
      false,
    ),
  ];
}
