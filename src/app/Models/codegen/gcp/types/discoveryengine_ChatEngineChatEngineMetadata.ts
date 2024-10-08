import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface discoveryengine_ChatEngineChatEngineMetadata {
  /*
(Output)
The resource name of a Dialogflow agent, that this Chat Engine refers to.
*/
  dialogflowAgent?: string;
}

export function discoveryengine_ChatEngineChatEngineMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dialogflowAgent",
      "(Output)\nThe resource name of a Dialogflow agent, that this Chat Engine refers to.",
      () => [],
      false,
      false,
    ),
  ];
}
