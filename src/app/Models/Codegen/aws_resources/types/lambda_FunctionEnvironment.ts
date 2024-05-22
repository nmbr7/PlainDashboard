import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lambda_FunctionEnvironment {
  // Map of environment variables that are accessible from the function code during execution. If provided at least one key must be present.
  variables?: Map<string, string>;
}

export function lambda_FunctionEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "variables",
      "Map of environment variables that are accessible from the function code during execution. If provided at least one key must be present.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
