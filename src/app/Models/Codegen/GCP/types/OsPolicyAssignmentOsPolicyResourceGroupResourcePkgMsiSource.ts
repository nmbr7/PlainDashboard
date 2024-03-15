import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceGcs } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceGcs";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceRemote } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceRemote";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource {
  /*
Defaults to false. When false, files are
subject to validations based on the file type: Remote: A checksum must be
specified. Cloud Storage: An object generation number must be specified.
*/
  AllowInsecure?: boolean;

  /*
A Cloud Storage object. Structure is
documented below.
*/
  Gcs?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceGcs;

  // A local path within the VM to use.
  LocalPath?: string;

  /*
A generic remote file. Structure is
documented below.
*/
  Remote?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceRemote;
}
