import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getRegionInstanceTemplateAdvancedMachineFeature {
  // Whether to enable nested virtualization or not.
  enableNestedVirtualization?: boolean;

  // The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  threadsPerCore?: number;

  // The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
  visibleCoreCount?: number;
}

export function compute_getRegionInstanceTemplateAdvancedMachineFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableNestedVirtualization",
      "Whether to enable nested virtualization or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threadsPerCore",
      "The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "visibleCoreCount",
      "The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\\'s nominal CPU count and the underlying platform\\'s SMT width.",
      [],
      true,
      false,
    ),
  ];
}
