import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfunctions_FunctionSecretVolumeVersion,
  cloudfunctions_FunctionSecretVolumeVersion_GetTypes,
} from "./cloudfunctions_FunctionSecretVolumeVersion";

export interface cloudfunctions_FunctionSecretVolume {
  // Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  projectId?: string;

  // ID of the secret in secret manager (not the full resource name).
  secret?: string;

  // List of secret versions to mount for this secret. If empty, the "latest" version of the secret will be made available in a file named after the secret under the mount point. Structure is documented below.
  versions?: Array<cloudfunctions_FunctionSecretVolumeVersion>;

  // The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".
  mountPath?: string;
}

export function cloudfunctions_FunctionSecretVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "versions",
      'List of secret versions to mount for this secret. If empty, the "latest" version of the secret will be made available in a file named after the secret under the mount point. Structure is documented below.',
      cloudfunctions_FunctionSecretVolumeVersion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountPath",
      'The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secret",
      "ID of the secret in secret manager (not the full resource name).",
      [],
      true,
      false,
    ),
  ];
}
