import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep";
import {
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse,
  lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse";

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch {
  // Configuration block for the next step in the conversation. See `next_step`.
  nextStep?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep;

  // Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.
  response?: lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "response",
      "Configuration block for a list of message groups that Amazon Lex uses to respond to the user input. See `response`.",
      lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nextStep",
      "Configuration block for the next step in the conversation. See `next_step`.",
      lex_V2modelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep_GetTypes(),
      false,
      false,
    ),
  ];
}
