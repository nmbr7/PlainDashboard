import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_getServiceTemplateSpecVolumeCsi {
  /*
Unique name representing the type of file system to be created. Cloud Run supports the following values:
  - gcsfuse.run.googleapis.com: Mount a Google Cloud Storage bucket using GCSFuse. This driver requires the
    run.googleapis.com/execution-environment annotation to be set to "gen2" and
    run.googleapis.com/launch-stage set to "BETA" or "ALPHA".
*/
  driver?: string;

  // If true, all mounts created from this volume will be read-only.
  readOnly?: boolean;

  /*
Driver-specific attributes. The following options are supported for available drivers:
  - gcsfuse.run.googleapis.com
    - bucketName: The name of the Cloud Storage Bucket that backs this volume. The Cloud Run Service identity must have access to this bucket.
*/
  volumeAttributes?: Map<string, string>;
}

export function cloudrun_getServiceTemplateSpecVolumeCsi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "driver",
      'Unique name representing the type of file system to be created. Cloud Run supports the following values:\n  * gcsfuse.run.googleapis.com: Mount a Google Cloud Storage bucket using GCSFuse. This driver requires the\n    run.googleapis.com/execution-environment annotation to be set to "gen2" and\n    run.googleapis.com/launch-stage set to "BETA" or "ALPHA".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnly",
      "If true, all mounts created from this volume will be read-only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "volumeAttributes",
      "Driver-specific attributes. The following options are supported for available drivers:\n  * gcsfuse.run.googleapis.com\n    * bucketName: The name of the Cloud Storage Bucket that backs this volume. The Cloud Run Service identity must have access to this bucket.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
