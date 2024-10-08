import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig,
  discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes,
} from "./discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig";

export interface discoveryengine_ChatEngineChatEngineConfig {
  /*
The configuration to generate the Dialogflow agent that is associated to this Engine.
Structure is documented below.
*/
  agentCreationConfig?: discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig;
}

export function discoveryengine_ChatEngineChatEngineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "agentCreationConfig",
      "The configuration to generate the Dialogflow agent that is associated to this Engine.\nStructure is documented below.",
      () =>
        discoveryengine_ChatEngineChatEngineConfigAgentCreationConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
