import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_AutoscalingPolicyIamMemberCondition {
  //
  title?: string;

  //
  description?: string;

  //
  expression?: string;
}

export function dataproc_AutoscalingPolicyIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expression",
      "",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "title", "", () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      "description",
      "",
      () => [],
      false,
      true,
    ),
  ];
}