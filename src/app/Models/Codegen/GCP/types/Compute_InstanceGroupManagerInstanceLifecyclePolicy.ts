import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceGroupManagerInstanceLifecyclePolicy {
  /*
), Specifies whether to apply the group's latest configuration when repairing a VM. Valid options are: `YES`, `NO`. If `YES` and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If `NO` (default), then updates are applied in accordance with the group's update policy type.

- - -
*/
  forceUpdateOnRepair?: string;
}

export function compute_InstanceGroupManagerInstanceLifecyclePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "forceUpdateOnRepair",
      "), Specifies whether to apply the group's latest configuration when repairing a VM. Valid options are: `YES`, `NO`. If `YES` and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If `NO` (default), then updates are applied in accordance with the group's update policy type.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
