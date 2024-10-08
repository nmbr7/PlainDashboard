import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_JobExecutionProperty {
  // The maximum number of concurrent runs allowed for a job. The default is 1.
  maxConcurrentRuns?: number;
}

export function glue_JobExecutionProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentRuns",
      "The maximum number of concurrent runs allowed for a job. The default is 1.",
      () => [],
      false,
      false,
    ),
  ];
}
