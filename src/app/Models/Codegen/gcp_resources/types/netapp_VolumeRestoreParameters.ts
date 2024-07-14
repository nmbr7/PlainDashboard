import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeRestoreParameters {
  /*
Full name of the snapshot to use for creating this volume.
`source_snapshot` and `source_backup` cannot be used simultaneously.
Format: `projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}`.
*/
  sourceSnapshot?: string;

  /*
Full name of the snapshot to use for creating this volume.
`source_snapshot` and `source_backup` cannot be used simultaneously.
Format: `projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}`.
*/
  sourceBackup?: string;
}

export function netapp_VolumeRestoreParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceSnapshot",
      "Full name of the snapshot to use for creating this volume.\n`source_snapshot` and `source_backup` cannot be used simultaneously.\nFormat: `projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceBackup",
      "Full name of the snapshot to use for creating this volume.\n`source_snapshot` and `source_backup` cannot be used simultaneously.\nFormat: `projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}`.",
      [],
      false,
      true,
    ),
  ];
}
