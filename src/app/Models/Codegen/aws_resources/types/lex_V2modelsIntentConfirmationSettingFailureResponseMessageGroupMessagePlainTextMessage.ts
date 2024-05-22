import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage {
  // Message to send to the user.
  value?: string;
}

export function lex_V2modelsIntentConfirmationSettingFailureResponseMessageGroupMessagePlainTextMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Message to send to the user.",
      [],
      true,
      false,
    ),
  ];
}
