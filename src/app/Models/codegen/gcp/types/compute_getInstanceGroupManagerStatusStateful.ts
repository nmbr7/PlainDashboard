import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig,
  compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes,
} from "./compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig";

export interface compute_getInstanceGroupManagerStatusStateful {
  // A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.
  hasStatefulConfig?: boolean;

  // Status of per-instance configs on the instance.
  perInstanceConfigs?: Array<compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig>;
}

export function compute_getInstanceGroupManagerStatusStateful_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "hasStatefulConfig",
      "A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "perInstanceConfigs",
      "Status of per-instance configs on the instance.",
      () =>
        compute_getInstanceGroupManagerStatusStatefulPerInstanceConfig_GetTypes(),
      true,
      false,
    ),
  ];
}