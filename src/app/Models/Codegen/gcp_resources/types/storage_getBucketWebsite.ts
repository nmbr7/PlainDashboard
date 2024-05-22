import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_getBucketWebsite {
  // Behaves as the bucket's directory index where missing objects are treated as potential directories.
  mainPageSuffix?: string;

  // The custom object to return when a requested resource is not found.
  notFoundPage?: string;
}

export function storage_getBucketWebsite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "notFoundPage",
      "The custom object to return when a requested resource is not found.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainPageSuffix",
      "Behaves as the bucket's directory index where missing objects are treated as potential directories.",
      [],
      true,
      false,
    ),
  ];
}
