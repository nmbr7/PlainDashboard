import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  storage_InsightsReportConfigFrequencyOptionsStartDate,
  storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes,
} from "./storage_InsightsReportConfigFrequencyOptionsStartDate";
import {
  storage_InsightsReportConfigFrequencyOptionsEndDate,
  storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes,
} from "./storage_InsightsReportConfigFrequencyOptionsEndDate";

export interface storage_InsightsReportConfigFrequencyOptions {
  /*
The frequency in which inventory reports are generated. Values are DAILY or WEEKLY.
Possible values are: `DAILY`, `WEEKLY`.
*/
  frequency?: string;

  /*
The date to start generating inventory reports. For example, {"day": 15, "month": 8, "year": 2022}.
Structure is documented below.
*/
  startDate?: storage_InsightsReportConfigFrequencyOptionsStartDate;

  /*
The date to stop generating inventory reports. For example, {"day": 15, "month": 9, "year": 2022}.
Structure is documented below.
*/
  endDate?: storage_InsightsReportConfigFrequencyOptionsEndDate;
}

export function storage_InsightsReportConfigFrequencyOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "frequency",
      "The frequency in which inventory reports are generated. Values are DAILY or WEEKLY.\nPossible values are: `DAILY`, `WEEKLY`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startDate",
      'The date to start generating inventory reports. For example, {"day": 15, "month": 8, "year": 2022}.\nStructure is documented below.',
      () => storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "endDate",
      'The date to stop generating inventory reports. For example, {"day": 15, "month": 9, "year": 2022}.\nStructure is documented below.',
      () => storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes(),
      true,
      false,
    ),
  ];
}
