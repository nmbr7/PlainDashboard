import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface projects_OrganizationPolicyListPolicyAllow {
  // The policy can define specific values that are allowed or denied.
  values?: Array<string>;

  // The policy allows or denies all values.
  all?: boolean;
}

export function projects_OrganizationPolicyListPolicyAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The policy can define specific values that are allowed or denied.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "all",
      "The policy allows or denies all values.",
      [],
      false,
      false,
    ),
  ];
}
