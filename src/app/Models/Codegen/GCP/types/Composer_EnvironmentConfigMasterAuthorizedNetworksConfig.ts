import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock,
  composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from "./composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock";

export interface composer_EnvironmentConfigMasterAuthorizedNetworksConfig {
  // Whether or not master authorized networks is enabled.
  enabled?: boolean;

  // cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
  cidrBlocks?: Array<composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock>;
}

export function composer_EnvironmentConfigMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not master authorized networks is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cidrBlocks",
      "cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.",
      composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      false,
      false,
    ),
  ];
}
