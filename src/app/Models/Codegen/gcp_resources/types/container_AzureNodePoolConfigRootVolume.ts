import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AzureNodePoolConfigRootVolume {
  // Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  sizeGib?: number;
}

export function container_AzureNodePoolConfigRootVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sizeGib",
      "Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.",
      [],
      false,
      true,
    ),
  ];
}
