import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  // Bucket of the Cloud Storage object.
  bucket?: string;

  // Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  generationNumber?: string;

  // Name of the Cloud Storage object.
  object?: string;
}

export function osconfig_PatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "generationNumber",
      "Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Name of the Cloud Storage object.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Bucket of the Cloud Storage object.",
      [],
      true,
      true,
    ),
  ];
}
