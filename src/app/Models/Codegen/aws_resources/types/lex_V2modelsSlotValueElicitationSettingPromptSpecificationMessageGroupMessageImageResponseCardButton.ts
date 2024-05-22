import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton {
  //
  value?: string;

  //
  text?: string;
}

export function lex_V2modelsSlotValueElicitationSettingPromptSpecificationMessageGroupMessageImageResponseCardButton_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
    new DynamicUIProps(InputType.String, "text", "", [], true, false),
  ];
}
