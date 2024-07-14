import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs";
import {
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote,
  osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote_GetTypes,
} from "./osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote";

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile {
  /*
Defaults to false. When false, files are
subject to validations based on the file type: Remote: A checksum must be
specified. Cloud Storage: An object generation number must be specified.
*/
  allowInsecure?: boolean;

  /*
A Cloud Storage object. Structure is
documented below.
*/
  gcs?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs;

  // A local path within the VM to use.
  localPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  remote?: osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInsecure",
      "Defaults to false. When false, files are\nsubject to validations based on the file type: Remote: A checksum must be\nspecified. Cloud Storage: An object generation number must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcs",
      "A Cloud Storage object. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "A local path within the VM to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "remote",
      "A generic remote file. Structure is\ndocumented below.",
      osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceExecEnforceFileRemote_GetTypes(),
      false,
      false,
    ),
  ];
}
