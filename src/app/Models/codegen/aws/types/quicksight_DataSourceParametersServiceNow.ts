import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DataSourceParametersServiceNow {
  // The base URL of the Jira instance's site to which to connect.
  siteBaseUrl?: string;
}

export function quicksight_DataSourceParametersServiceNow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "siteBaseUrl",
      "The base URL of the Jira instance's site to which to connect.",
      () => [],
      true,
      false,
    ),
  ];
}
