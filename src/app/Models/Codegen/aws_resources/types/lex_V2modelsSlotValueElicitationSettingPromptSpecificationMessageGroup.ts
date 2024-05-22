import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage";
import {
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation,
  lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup {
  //
  message?: lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage;

  //
  variations?: Array<lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation>;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "message",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "variations",
      "",
      lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
