import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_VMwareClusterAuthorizationAdminUser {
  // The name of the user, e.g. `my-gcp-id@gmail.com`.
  username?: string;
}

export function gkeonprem_VMwareClusterAuthorizationAdminUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "The name of the user, e.g. `my-gcp-id@gmail.com`.",
      [],
      true,
      false,
    ),
  ];
}
