import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_IntentFollowUpPromptRejectionStatementMessage,
  lex_IntentFollowUpPromptRejectionStatementMessage_GetTypes,
} from "./lex_IntentFollowUpPromptRejectionStatementMessage";

export interface lex_IntentFollowUpPromptRejectionStatement {
  /*
A set of messages, each of which provides a message string and its type.
You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
Attributes are documented under message. Must contain between 1 and 15 messages.
*/
  messages?: Array<lex_IntentFollowUpPromptRejectionStatementMessage>;

  /*
The response card. Amazon Lex will substitute session attributes and
slot values into the response card. For more information, see
[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.
*/
  responseCard?: string;
}

export function lex_IntentFollowUpPromptRejectionStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "messages",
      "A set of messages, each of which provides a message string and its type.\nYou can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).\nAttributes are documented under message. Must contain between 1 and 15 messages.",
      lex_IntentFollowUpPromptRejectionStatementMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseCard",
      "The response card. Amazon Lex will substitute session attributes and\nslot values into the response card. For more information, see\n[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.",
      [],
      false,
      false,
    ),
  ];
}
