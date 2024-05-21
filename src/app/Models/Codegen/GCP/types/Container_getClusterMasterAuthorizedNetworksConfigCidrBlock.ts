import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterMasterAuthorizedNetworksConfigCidrBlock {
  // External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.
  cidrBlock?: string;

  // Field for users to identify CIDR blocks.
  displayName?: string;
}

export function container_getClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Field for users to identify CIDR blocks.",
      [],
      true,
      false,
    ),
  ];
}
