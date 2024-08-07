import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodeConfigHostMaintenancePolicy {
  // .
  maintenanceInterval?: string;
}

export function container_getClusterNodeConfigHostMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      ".",
      [],
      true,
      false,
    ),
  ];
}
