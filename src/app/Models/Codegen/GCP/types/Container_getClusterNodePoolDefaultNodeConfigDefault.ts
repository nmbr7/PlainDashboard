import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig,
  container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig_GetTypes,
} from "./container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig";

export interface container_getClusterNodePoolDefaultNodeConfigDefault {
  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  loggingVariant?: string;

  // GCFS configuration for this node.
  gcfsConfigs?: Array<container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig>;
}

export function container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "loggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gcfsConfigs",
      "GCFS configuration for this node.",
      container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
