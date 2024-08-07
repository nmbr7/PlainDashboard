import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getDatabaseInstanceRestoreBackupContext {
  // The ID of the backup run to restore from.
  backupRunId?: number;

  // The ID of the instance that the backup was taken from.
  instanceId?: string;

  // The ID of the project in which the resource belongs.
  project?: string;
}

export function sql_getDatabaseInstanceRestoreBackupContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "backupRunId",
      "The ID of the backup run to restore from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "The ID of the instance that the backup was taken from.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project in which the resource belongs.",
      [],
      true,
      false,
    ),
  ];
}
