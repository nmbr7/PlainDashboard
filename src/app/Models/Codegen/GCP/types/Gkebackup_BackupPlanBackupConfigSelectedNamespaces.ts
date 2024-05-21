import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkebackup_BackupPlanBackupConfigSelectedNamespaces {
  // A list of Kubernetes Namespaces.
  namespaces?: Array<string>;
}

export function gkebackup_BackupPlanBackupConfigSelectedNamespaces_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namespaces",
      "A list of Kubernetes Namespaces.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
