import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface beyondcorp_AppConnectorPrincipalInfoServiceAccount {
  /*
Email address of the service account.

- - -
*/
  email?: string;
}

export function beyondcorp_AppConnectorPrincipalInfoServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email address of the service account.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
