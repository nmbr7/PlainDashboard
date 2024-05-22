import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_NodeGroupScalingConfig {
  // Desired number of worker nodes.
  desiredSize?: number;

  // Maximum number of worker nodes.
  maxSize?: number;

  // Minimum number of worker nodes.
  minSize?: number;
}

export function eks_NodeGroupScalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "desiredSize",
      "Desired number of worker nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSize",
      "Maximum number of worker nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minSize",
      "Minimum number of worker nodes.",
      [],
      true,
      false,
    ),
  ];
}
