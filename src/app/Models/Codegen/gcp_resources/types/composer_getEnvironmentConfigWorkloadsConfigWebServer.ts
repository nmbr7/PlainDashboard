import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_getEnvironmentConfigWorkloadsConfigWebServer {
  // CPU request and limit for Airflow web server.
  cpu?: number;

  // Memory (GB) request and limit for Airflow web server.
  memoryGb?: number;

  // Storage (GB) request and limit for Airflow web server.
  storageGb?: number;
}

export function composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
  ];
}
