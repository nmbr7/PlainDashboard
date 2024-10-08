import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_FsxOpenZfsFileSystemProtocolNfs,
  datasync_FsxOpenZfsFileSystemProtocolNfs_GetTypes,
} from "./datasync_FsxOpenZfsFileSystemProtocolNfs";

export interface datasync_FsxOpenZfsFileSystemProtocol {
  // Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system. See below.
  nfs?: datasync_FsxOpenZfsFileSystemProtocolNfs;
}

export function datasync_FsxOpenZfsFileSystemProtocol_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nfs",
      "Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system. See below.",
      () => datasync_FsxOpenZfsFileSystemProtocolNfs_GetTypes(),
      true,
      true,
    ),
  ];
}
