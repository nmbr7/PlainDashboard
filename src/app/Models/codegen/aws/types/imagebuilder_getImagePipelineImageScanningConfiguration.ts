import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration,
  imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes,
} from "./imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration";

export interface imagebuilder_getImagePipelineImageScanningConfiguration {
  // List if an object with ecr configuration for image scanning
  ecrConfigurations?: Array<imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration>;

  // Whether image scanning is enabled.
  imageScanningEnabled?: boolean;
}

export function imagebuilder_getImagePipelineImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ecrConfigurations",
      "List if an object with ecr configuration for image scanning",
      () =>
        imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "imageScanningEnabled",
      "Whether image scanning is enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
