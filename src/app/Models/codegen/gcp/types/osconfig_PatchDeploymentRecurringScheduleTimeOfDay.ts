import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_PatchDeploymentRecurringScheduleTimeOfDay {
  // Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  seconds?: number;

  /*
Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.
*/
  hours?: number;

  // Minutes of hour of day. Must be from 0 to 59.
  minutes?: number;

  // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  nanos?: number;
}

export function osconfig_PatchDeploymentRecurringScheduleTimeOfDay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "seconds",
      "Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hours",
      'Hours of day in 24 hour format. Should be from 0 to 23.\nAn API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Minutes of hour of day. Must be from 0 to 59.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nanos",
      "Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.",
      () => [],
      false,
      true,
    ),
  ];
}