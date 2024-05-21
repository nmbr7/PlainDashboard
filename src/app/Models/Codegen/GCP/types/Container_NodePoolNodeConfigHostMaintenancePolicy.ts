import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolNodeConfigHostMaintenancePolicy {
  // .
  maintenanceInterval?: string;
}

export function container_NodePoolNodeConfigHostMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      ".",
      [],
      true,
      true,
    ),
  ];
}
