import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface keyspaces_TablePointInTimeRecovery {
  // Valid values: `ENABLED`, `DISABLED`. The default value is `DISABLED`.
  status?: string;
}

export function keyspaces_TablePointInTimeRecovery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Valid values: `ENABLED`, `DISABLED`. The default value is `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
