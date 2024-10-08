import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface backupdisasterrecovery_ManagementServerManagementUri {
  /*
(Output)
The management console api endpoint.
*/
  api?: string;

  /*
(Output)
The management console webUi.
*/
  webUi?: string;
}

export function backupdisasterrecovery_ManagementServerManagementUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "api",
      "(Output)\nThe management console api endpoint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webUi",
      "(Output)\nThe management console webUi.",
      () => [],
      false,
      false,
    ),
  ];
}
