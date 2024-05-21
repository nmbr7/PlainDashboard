import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_PolicyListPolicyAllow {
  // The policy allows or denies all values.
  all?: boolean;

  // The policy can define specific values that are allowed or denied.
  values?: Array<string>;
}

export function organizations_PolicyListPolicyAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "all",
      "The policy allows or denies all values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The policy can define specific values that are allowed or denied.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
