import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterLoggingConfigComponentConfig {
  /*
The components to be enabled.
Each value may be one of: `SYSTEM_COMPONENTS`, `WORKLOADS`.
*/
  enableComponents?: Array<string>;
}

export function container_AttachedClusterLoggingConfigComponentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "enableComponents",
      "The components to be enabled.\nEach value may be one of: `SYSTEM_COMPONENTS`, `WORKLOADS`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
