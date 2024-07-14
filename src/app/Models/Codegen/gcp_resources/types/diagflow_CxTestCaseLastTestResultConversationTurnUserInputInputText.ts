import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText {
  // The natural language text to be processed. Text length must not exceed 256 characters.
  text?: string;
}

export function diagflow_CxTestCaseLastTestResultConversationTurnUserInputInputText_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "text",
      "The natural language text to be processed. Text length must not exceed 256 characters.",
      [],
      true,
      false,
    ),
  ];
}
