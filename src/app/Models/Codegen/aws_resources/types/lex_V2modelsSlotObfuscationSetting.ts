import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotObfuscationSetting {
  // Whether Amazon Lex obscures slot values in conversation logs. Valid values are `DefaultObfuscation` and `None`.
  obfuscationSettingType?: string;
}

export function lex_V2modelsSlotObfuscationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "obfuscationSettingType",
      "Whether Amazon Lex obscures slot values in conversation logs. Valid values are `DefaultObfuscation` and `None`.",
      [],
      true,
      false,
    ),
  ];
}
