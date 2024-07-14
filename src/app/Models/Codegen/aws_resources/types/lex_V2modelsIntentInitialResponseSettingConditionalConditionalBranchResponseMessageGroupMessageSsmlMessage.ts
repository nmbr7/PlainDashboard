import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  // SSML text that defines the prompt.
  value?: string;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "SSML text that defines the prompt.",
      [],
      true,
      false,
    ),
  ];
}
