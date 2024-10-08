import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration,
  apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration_GetTypes,
} from "./apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration";

export interface apprunner_ServiceSourceConfigurationImageRepository {
  // Configuration for running the identified image. See Image Configuration below for more details.
  imageConfiguration?: apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration;

  /*
Identifier of an image. For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the
image name format, see Pulling an image in the Amazon ECR User Guide.
*/
  imageIdentifier?: string;

  // Type of the image repository. This reflects the repository provider and whether the repository is private or public. Valid values: `ECR` , `ECR_PUBLIC`.
  imageRepositoryType?: string;
}

export function apprunner_ServiceSourceConfigurationImageRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imageRepositoryType",
      "Type of the image repository. This reflects the repository provider and whether the repository is private or public. Valid values: `ECR` , `ECR_PUBLIC`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "imageConfiguration",
      "Configuration for running the identified image. See Image Configuration below for more details.",
      () =>
        apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageIdentifier",
      "Identifier of an image. For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the\nimage name format, see Pulling an image in the Amazon ECR User Guide.",
      () => [],
      true,
      false,
    ),
  ];
}
