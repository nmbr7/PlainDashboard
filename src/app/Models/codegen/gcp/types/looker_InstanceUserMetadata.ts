import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface looker_InstanceUserMetadata {
  // Number of additional Developer Users to allocate to the Looker Instance.
  additionalDeveloperUserCount?: number;

  // Number of additional Standard Users to allocate to the Looker Instance.
  additionalStandardUserCount?: number;

  // Number of additional Viewer Users to allocate to the Looker Instance.
  additionalViewerUserCount?: number;
}

export function looker_InstanceUserMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "additionalStandardUserCount",
      "Number of additional Standard Users to allocate to the Looker Instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "additionalViewerUserCount",
      "Number of additional Viewer Users to allocate to the Looker Instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "additionalDeveloperUserCount",
      "Number of additional Developer Users to allocate to the Looker Instance.",
      () => [],
      false,
      false,
    ),
  ];
}
