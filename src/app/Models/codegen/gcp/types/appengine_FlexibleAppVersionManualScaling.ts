import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_FlexibleAppVersionManualScaling {
  /*
Number of instances to assign to the service at the start.
--Note:-- When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use `lifecycle.ignore_changes = ["manual_scaling"[0].instances]` to prevent drift detection.
*/
  instances?: number;
}

export function appengine_FlexibleAppVersionManualScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "instances",
      'Number of instances to assign to the service at the start.\n**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2\nModules API set_num_instances() you must use `lifecycle.ignore_changes = ["manual_scaling"[0].instances]` to prevent drift detection.',
      () => [],
      true,
      false,
    ),
  ];
}
