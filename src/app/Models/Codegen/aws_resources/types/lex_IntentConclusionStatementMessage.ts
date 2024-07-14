import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_IntentConclusionStatementMessage {
  // The text of the message. Must be less than or equal to 1000 characters in length.
  content?: string;

  // The content type of the message string.
  contentType?: string;

  /*
Identifies the message group that the message belongs to. When a group
is assigned to a message, Amazon Lex returns one message from each group in the response. Must be a number between 1 and 5 (inclusive).
*/
  groupNumber?: number;
}

export function lex_IntentConclusionStatementMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "groupNumber",
      "Identifies the message group that the message belongs to. When a group\nis assigned to a message, Amazon Lex returns one message from each group in the response. Must be a number between 1 and 5 (inclusive).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "content",
      "The text of the message. Must be less than or equal to 1000 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentType",
      "The content type of the message string.",
      [],
      true,
      false,
    ),
  ];
}
