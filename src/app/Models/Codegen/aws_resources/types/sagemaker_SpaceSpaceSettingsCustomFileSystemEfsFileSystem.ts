import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem {
  // The ID of your Amazon EFS file system.
  fileSystemId?: string;
}

export function sagemaker_SpaceSpaceSettingsCustomFileSystemEfsFileSystem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemId",
      "The ID of your Amazon EFS file system.",
      [],
      true,
      false,
    ),
  ];
}
