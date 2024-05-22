import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository,
  imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes,
} from "./imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository";

export interface imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration {
  // Set of tags that are attached to the container distribution configuration.
  containerTags?: Array<string>;

  // Description of the container distribution configuration.
  description?: string;

  // Set of destination repositories for the container distribution configuration.
  targetRepositories?: Array<imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository>;
}

export function imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the container distribution configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetRepositories",
      "Set of destination repositories for the container distribution configuration.",
      imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerTags",
      "Set of tags that are attached to the container distribution configuration.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
