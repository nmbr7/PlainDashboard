import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workspaces_getBundleUserStorage {
  // Size of the user storage.
  capacity?: string;
}

export function workspaces_getBundleUserStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacity",
      "Size of the user storage.",
      [],
      true,
      false,
    ),
  ];
}
