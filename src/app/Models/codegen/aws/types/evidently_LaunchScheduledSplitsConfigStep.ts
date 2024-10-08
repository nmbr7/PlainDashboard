import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  evidently_LaunchScheduledSplitsConfigStepSegmentOverride,
  evidently_LaunchScheduledSplitsConfigStepSegmentOverride_GetTypes,
} from "./evidently_LaunchScheduledSplitsConfigStepSegmentOverride";

export interface evidently_LaunchScheduledSplitsConfigStep {
  // The traffic allocation percentages among the feature variations during one step of a launch. This is a set of key-value pairs. The keys are variation names. The values represent the percentage of traffic to allocate to that variation during this step. For more information, refer to the [AWS documentation for ScheduledSplitConfig groupWeights](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ScheduledSplitConfig.html).
  groupWeights?: Map<string, number>;

  // One or up to six blocks that specify different traffic splits for one or more audience segments. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age. Detailed below.
  segmentOverrides?: Array<evidently_LaunchScheduledSplitsConfigStepSegmentOverride>;

  // Specifies the date and time that this step of the launch starts.
  startTime?: string;
}

export function evidently_LaunchScheduledSplitsConfigStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "Specifies the date and time that this step of the launch starts.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "groupWeights",
      "The traffic allocation percentages among the feature variations during one step of a launch. This is a set of key-value pairs. The keys are variation names. The values represent the percentage of traffic to allocate to that variation during this step. For more information, refer to the [AWS documentation for ScheduledSplitConfig groupWeights](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ScheduledSplitConfig.html).",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "segmentOverrides",
      "One or up to six blocks that specify different traffic splits for one or more audience segments. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age. Detailed below.",
      () => evidently_LaunchScheduledSplitsConfigStepSegmentOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
