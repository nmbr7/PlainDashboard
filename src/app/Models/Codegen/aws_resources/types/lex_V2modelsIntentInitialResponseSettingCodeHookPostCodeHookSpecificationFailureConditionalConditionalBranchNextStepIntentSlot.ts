import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue,
  lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue";

export interface lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot {
  // Which attempt to configure. Valid values are `Initial`, `Retry1`, `Retry2`, `Retry3`, `Retry4`, `Retry5`.
  mapBlockKey?: string;

  // When the shape value is `List`, `values` contains a list of slot values. When the value is `Scalar`, `value` contains a single value.
  shape?: string;

  // Configuration block for the current value of the slot. See `value`.
  value?: lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue;
}

export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mapBlockKey",
      "Which attempt to configure. Valid values are `Initial`, `Retry1`, `Retry2`, `Retry3`, `Retry4`, `Retry5`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "shape",
      "When the shape value is `List`, `values` contains a list of slot values. When the value is `Scalar`, `value` contains a single value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "value",
      "Configuration block for the current value of the slot. See `value`.",
      lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchNextStepIntentSlotValue_GetTypes(),
      false,
      false,
    ),
  ];
}
