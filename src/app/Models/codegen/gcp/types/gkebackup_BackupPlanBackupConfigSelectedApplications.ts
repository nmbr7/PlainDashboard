import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName,
  gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName_GetTypes,
} from "./gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName";

export interface gkebackup_BackupPlanBackupConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  namespacedNames?: Array<gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName>;
}

export function gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namespacedNames",
      "A list of namespaced Kubernetes resources.\nStructure is documented below.",
      () =>
        gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName_GetTypes(),
      true,
      false,
    ),
  ];
}
