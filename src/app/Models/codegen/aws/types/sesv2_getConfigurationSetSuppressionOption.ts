import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_getConfigurationSetSuppressionOption {
  // A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
  suppressedReasons?: Array<string>;
}

export function sesv2_getConfigurationSetSuppressionOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "suppressedReasons",
      "A list that contains the reasons that email addresses are automatically added to the suppression list for your account.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
