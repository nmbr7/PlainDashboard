import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lambda_AliasRoutingConfig {
  // A map that defines the proportion of events that should be sent to different versions of a lambda function.
  additionalVersionWeights?: Map<string, number>;
}

export function lambda_AliasRoutingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "additionalVersionWeights",
      "A map that defines the proportion of events that should be sent to different versions of a lambda function.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
