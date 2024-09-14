import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart {
  //
  hourOfDay?: number;

  //
  minuteOfHour?: number;
}

export function ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minuteOfHour",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "",
      () => [],
      true,
      false,
    ),
  ];
}