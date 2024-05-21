import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_BucketCustomPlacementConfig {
  // The list of individual regions that comprise a dual-region bucket. See [Cloud Storage bucket locations](https://cloud.google.com/storage/docs/dual-regions#availability) for a list of acceptable regions. --Note--: If any of the data_locations changes, it will [recreate the bucket](https://cloud.google.com/storage/docs/locations#key-concepts).
  dataLocations?: Array<string>;
}

export function storage_BucketCustomPlacementConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dataLocations",
      "The list of individual regions that comprise a dual-region bucket. See [Cloud Storage bucket locations](https://cloud.google.com/storage/docs/dual-regions#availability) for a list of acceptable regions. **Note**: If any of the data_locations changes, it will [recreate the bucket](https://cloud.google.com/storage/docs/locations#key-concepts).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
