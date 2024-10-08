import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_LocationFsxOntapFileSystemProtocolSmb,
  datasync_LocationFsxOntapFileSystemProtocolSmb_GetTypes,
} from "./datasync_LocationFsxOntapFileSystemProtocolSmb";
import {
  datasync_LocationFsxOntapFileSystemProtocolNfs,
  datasync_LocationFsxOntapFileSystemProtocolNfs_GetTypes,
} from "./datasync_LocationFsxOntapFileSystemProtocolNfs";

export interface datasync_LocationFsxOntapFileSystemProtocol {
  // Network File System (NFS) protocol that DataSync uses to access your FSx ONTAP file system. See NFS below.
  nfs?: datasync_LocationFsxOntapFileSystemProtocolNfs;

  // Server Message Block (SMB) protocol that DataSync uses to access your FSx ONTAP file system. See [SMB] (#smb) below.
  smb?: datasync_LocationFsxOntapFileSystemProtocolSmb;
}

export function datasync_LocationFsxOntapFileSystemProtocol_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nfs",
      "Network File System (NFS) protocol that DataSync uses to access your FSx ONTAP file system. See NFS below.",
      () => datasync_LocationFsxOntapFileSystemProtocolNfs_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "smb",
      "Server Message Block (SMB) protocol that DataSync uses to access your FSx ONTAP file system. See [SMB] (#smb) below.",
      () => datasync_LocationFsxOntapFileSystemProtocolSmb_GetTypes(),
      false,
      true,
    ),
  ];
}
