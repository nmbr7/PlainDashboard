import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentDialogCodeHook {
  // Enables the dialog code hook so that it processes user requests.
  enabled?: boolean;
}

export function lex_V2modelsIntentDialogCodeHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables the dialog code hook so that it processes user requests.",
      [],
      true,
      false,
    ),
  ];
}
