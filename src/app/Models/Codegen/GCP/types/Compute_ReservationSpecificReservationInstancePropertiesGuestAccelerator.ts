import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator {
  /*
The number of the guest accelerator cards exposed to
this instance.
*/
  acceleratorCount?: number;

  /*
The full or partial URL of the accelerator type to
attach to this instance. For example:
`projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100`
If you are creating an instance template, specify only the accelerator name.
*/
  acceleratorType?: string;
}

export function compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "acceleratorCount",
      "The number of the guest accelerator cards exposed to\nthis instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "The full or partial URL of the accelerator type to\nattach to this instance. For example:\n`projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100`\nIf you are creating an instance template, specify only the accelerator name.",
      [],
      true,
      true,
    ),
  ];
}
