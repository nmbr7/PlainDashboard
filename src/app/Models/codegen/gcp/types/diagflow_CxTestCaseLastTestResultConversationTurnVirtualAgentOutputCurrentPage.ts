import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage {
  /*
(Output)
The human-readable name of the page, unique within the flow.
*/
  displayName?: string;

  /*
The unique identifier of the page.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  name?: string;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnVirtualAgentOutputCurrentPage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "(Output)\nThe human-readable name of the page, unique within the flow.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The unique identifier of the page.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.",
      () => [],
      false,
      false,
    ),
  ];
}
