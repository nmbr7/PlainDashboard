import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_getPatchBaselineApprovalRulePatchFilter {
  // Key for the filter.
  key?: string;

  // Value for the filter.
  values?: Array<string>;
}

export function ssm_getPatchBaselineApprovalRulePatchFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the filter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Value for the filter.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
