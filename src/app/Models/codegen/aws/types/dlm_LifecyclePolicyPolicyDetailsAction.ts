import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy,
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy";

export interface dlm_LifecyclePolicyPolicyDetailsAction {
  // The rule for copying shared snapshots across Regions. See the `cross_region_copy` configuration block.
  crossRegionCopies?: Array<dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy>;

  //
  name?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "crossRegionCopies",
      "The rule for copying shared snapshots across Regions. See the `cross_region_copy` configuration block.",
      () => dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
  ];
}
