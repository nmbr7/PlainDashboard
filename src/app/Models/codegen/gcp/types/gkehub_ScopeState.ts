import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_ScopeState {
  /*
(Output)
Code describes the state of a Scope resource.
*/
  code?: string;
}

export function gkehub_ScopeState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nCode describes the state of a Scope resource.",
      () => [],
      false,
      false,
    ),
  ];
}
