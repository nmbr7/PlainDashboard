import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface beyondcorp_getAppConnectorPrincipalInfoServiceAccount {
  // Email address of the service account.
  email?: string;
}

export function beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email address of the service account.",
      [],
      true,
      false,
    ),
  ];
}
