import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci {
  // Period in seconds between consecutive syncs. Default: 15
  syncWaitSecs?: string;

  /*
(Optional, Deprecated)
Version of ACM installed

> --Warning:-- The `configmanagement.config_sync.oci.version` field is deprecated and will be removed in a future major release. Please use `configmanagement.version` field to specify the version of ACM installed instead.
*/
  version?: string;

  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  gcpServiceAccountEmail?: string;

  // The absolute path of the directory that contains the local resources. Default: the root directory of the image
  policyDir?: string;

  // Type of secret configured for access to the Git repo
  secretType?: string;

  // The OCI image repository URL for the package to sync from
  syncRepo?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "syncWaitSecs",
      "Period in seconds between consecutive syncs. Default: 15",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "(Optional, Deprecated)\nVersion of ACM installed\n\n> **Warning:** The `configmanagement.config_sync.oci.version` field is deprecated and will be removed in a future major release. Please use `configmanagement.version` field to specify the version of ACM installed instead.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcpServiceAccountEmail",
      "The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyDir",
      "The absolute path of the directory that contains the local resources. Default: the root directory of the image",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretType",
      "Type of secret configured for access to the Git repo",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncRepo",
      "The OCI image repository URL for the package to sync from",
      () => [],
      false,
      false,
    ),
  ];
}
