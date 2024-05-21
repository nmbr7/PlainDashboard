import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceFromMachineImageServiceAccount {
  // A list of service scopes.
  scopes?: Array<string>;

  // The service account e-mail address.
  email?: string;
}

export function compute_InstanceFromMachineImageServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "A list of service scopes.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "The service account e-mail address.",
      [],
      false,
      false,
    ),
  ];
}
