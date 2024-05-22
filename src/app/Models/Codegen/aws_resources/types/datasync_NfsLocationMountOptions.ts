import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datasync_NfsLocationMountOptions {
  // The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `AUTOMATIC`, `NFS3`, `NFS4_0` and `NFS4_1`. Default: `AUTOMATIC`
  version?: string;
}

export function datasync_NfsLocationMountOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `AUTOMATIC`, `NFS3`, `NFS4_0` and `NFS4_1`. Default: `AUTOMATIC`",
      [],
      false,
      true,
    ),
  ];
}
