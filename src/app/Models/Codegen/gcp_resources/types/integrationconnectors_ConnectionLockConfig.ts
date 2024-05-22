import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionLockConfig {
  // Indicates whether or not the connection is locked.
  locked?: boolean;

  // Describes why a connection is locked.
  reason?: string;
}

export function integrationconnectors_ConnectionLockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "locked",
      "Indicates whether or not the connection is locked.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "Describes why a connection is locked.",
      [],
      false,
      false,
    ),
  ];
}
