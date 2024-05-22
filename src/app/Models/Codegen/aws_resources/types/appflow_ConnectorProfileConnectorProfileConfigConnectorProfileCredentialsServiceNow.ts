import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
  // The username to use to connect to a resource.
  username?: string;

  // The password to use to connect to a resource.
  password?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "The username to use to connect to a resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password to use to connect to a resource.",
      [],
      true,
      false,
    ),
  ];
}
