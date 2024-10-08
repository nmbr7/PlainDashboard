import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_TriggerBuildSourceStorageSource {
  // Google Cloud Storage bucket containing the source.
  bucket?: string;

  /*
Google Cloud Storage generation for the object.
If the generation is omitted, the latest generation will be used
*/
  generation?: string;

  /*
Google Cloud Storage object containing the source.
This object must be a gzipped archive file (.tar.gz) containing source to build.
*/
  object?: string;
}

export function cloudbuild_TriggerBuildSourceStorageSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Google Cloud Storage bucket containing the source.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "generation",
      "Google Cloud Storage generation for the object.\nIf the generation is omitted, the latest generation will be used",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Google Cloud Storage object containing the source.\nThis object must be a gzipped archive file (.tar.gz) containing source to build.",
      () => [],
      true,
      false,
    ),
  ];
}
