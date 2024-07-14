import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition,
  iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition_GetTypes,
} from "./iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition";

export interface iam_AccessBoundaryPolicyRuleAccessBoundaryRule {
  // The full resource name of a Google Cloud resource entity.
  availableResource?: string;

  /*
The availability condition further constrains the access allowed by the access boundary rule.
Structure is documented below.
*/
  availabilityCondition?: iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition;

  // A list of permissions that may be allowed for use on the specified resource.
  availablePermissions?: Array<string>;
}

export function iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availableResource",
      "The full resource name of a Google Cloud resource entity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "availabilityCondition",
      "The availability condition further constrains the access allowed by the access boundary rule.\nStructure is documented below.",
      iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availablePermissions",
      "A list of permissions that may be allowed for use on the specified resource.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
