import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule {
  // The Availability Zones in which to enable fast snapshot restore.
  availabilityZones?: Array<string>;

  // Specifies the number of oldest AMIs to deprecate. Must be an integer between `1` and `1000`. Conflicts with `interval` and `interval_unit`.
  count?: number;

  // How often this lifecycle policy should be evaluated. `1`, `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values. Conflicts with `cron_expression`. If set, `interval_unit` and `times` must also be set.
  interval?: number;

  // The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value. Conflicts with `cron_expression`. Must be set if `interval` is set.
  intervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "The Availability Zones in which to enable fast snapshot restore.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "Specifies the number of oldest AMIs to deprecate. Must be an integer between `1` and `1000`. Conflicts with `interval` and `interval_unit`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "How often this lifecycle policy should be evaluated. `1`, `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values. Conflicts with `cron_expression`. If set, `interval_unit` and `times` must also be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "intervalUnit",
      "The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value. Conflicts with `cron_expression`. Must be set if `interval` is set.",
      [],
      false,
      false,
    ),
  ];
}
