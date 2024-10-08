import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup";

export interface lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse {
  //
  allowInterrupt?: boolean;

  //
  frequencyInSeconds?: number;

  //
  messageGroups?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup>;

  //
  timeoutInSeconds?: number;
}

export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "",
      () =>
        lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutInSeconds",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "frequencyInSeconds",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
