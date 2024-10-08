import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lambda_getFunctionEnvironment {
  //
  variables?: Map<string, string>;
}

export function lambda_getFunctionEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "variables",
      "",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
