import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs {
  // Bucket of the Cloud Storage object.
  bucket?: string;

  // Generation number of the Cloud Storage object.
  generation?: number;

  // Name of the Cloud Storage object.
  object?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSourceGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "generation",
      "Generation number of the Cloud Storage object.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Name of the Cloud Storage object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Bucket of the Cloud Storage object.",
      [],
      true,
      false,
    ),
  ];
}
