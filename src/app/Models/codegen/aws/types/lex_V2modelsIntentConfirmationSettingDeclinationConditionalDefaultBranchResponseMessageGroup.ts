import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation";

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup {
  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage;

  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation>;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "message",
      "Configuration block for the primary message that Amazon Lex should send to the user. See `message`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "variations",
      "Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.",
      () =>
        lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
