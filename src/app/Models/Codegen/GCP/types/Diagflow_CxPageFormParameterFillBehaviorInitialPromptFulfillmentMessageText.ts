import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageText {
  /*
(Output)
Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
*/
  allowPlaybackInterruption?: boolean;

  // A collection of text responses.
  texts?: Array<string>;
}

export function diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowPlaybackInterruption",
      "(Output)\nWhether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "texts",
      "A collection of text responses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
