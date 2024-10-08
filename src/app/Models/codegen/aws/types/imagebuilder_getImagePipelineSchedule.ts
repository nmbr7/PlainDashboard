import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getImagePipelineSchedule {
  // Condition when the pipeline should trigger a new image build.
  pipelineExecutionStartCondition?: string;

  // Cron expression of how often the pipeline start condition is evaluated.
  scheduleExpression?: string;
}

export function imagebuilder_getImagePipelineSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pipelineExecutionStartCondition",
      "Condition when the pipeline should trigger a new image build.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "Cron expression of how often the pipeline start condition is evaluated.",
      () => [],
      true,
      false,
    ),
  ];
}
