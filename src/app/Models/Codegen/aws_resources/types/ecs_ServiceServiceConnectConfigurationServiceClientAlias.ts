import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_ServiceServiceConnectConfigurationServiceClientAlias {
  // The name that you use in the applications of client tasks to connect to this service.
  dnsName?: string;

  // The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
  port?: number;
}

export function ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The name that you use in the applications of client tasks to connect to this service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.",
      [],
      true,
      false,
    ),
  ];
}
