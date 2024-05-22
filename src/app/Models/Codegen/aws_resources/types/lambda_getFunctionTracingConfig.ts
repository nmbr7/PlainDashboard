import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lambda_getFunctionTracingConfig {
  //
  mode?: string;
}

export function lambda_getFunctionTracingConfig_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "mode", "", [], true, false)];
}
