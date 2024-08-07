import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsClusterAuthorizationAdminGroup {
  // The name of the group, e.g. `my-group@domain.com`.
  group?: string;
}

export function container_AwsClusterAuthorizationAdminGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "group",
      "The name of the group, e.g. `my-group@domain.com`.",
      [],
      true,
      false,
    ),
  ];
}
