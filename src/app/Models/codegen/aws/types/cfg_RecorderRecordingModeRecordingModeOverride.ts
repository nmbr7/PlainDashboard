import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cfg_RecorderRecordingModeRecordingModeOverride {
  // A description you provide of the override.
  description?: string;

  // The recording frequency for the resources in the override block. `CONTINUOUS` or `DAILY`.
  recordingFrequency?: string;

  // A list that specifies the types of AWS resources for which the override applies to.  See [restrictions in the AWS Docs](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingModeOverride.html)
  resourceTypes?: Array<string>;
}

export function cfg_RecorderRecordingModeRecordingModeOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resourceTypes",
      "A list that specifies the types of AWS resources for which the override applies to.  See [restrictions in the AWS Docs](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingModeOverride.html)",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description you provide of the override.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordingFrequency",
      "The recording frequency for the resources in the override block. `CONTINUOUS` or `DAILY`.",
      () => [],
      true,
      false,
    ),
  ];
}
