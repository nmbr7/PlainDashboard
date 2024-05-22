import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
  // The minimum number of vCPUs. To specify no minimum limit, specify `0`.
  min?: number;

  // The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
  max?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "min",
      "The minimum number of vCPUs. To specify no minimum limit, specify `0`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "max",
      "The maximum number of vCPUs. To specify no maximum limit, omit this parameter.",
      [],
      false,
      false,
    ),
  ];
}
