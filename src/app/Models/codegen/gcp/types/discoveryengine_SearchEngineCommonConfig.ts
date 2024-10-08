import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface discoveryengine_SearchEngineCommonConfig {
  // The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd
  companyName?: string;
}

export function discoveryengine_SearchEngineCommonConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "companyName",
      "The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd",
      () => [],
      false,
      true,
    ),
  ];
}
