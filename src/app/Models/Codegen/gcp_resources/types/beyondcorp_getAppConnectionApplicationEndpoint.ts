import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface beyondcorp_getAppConnectionApplicationEndpoint {
  // Hostname or IP address of the remote application endpoint.
  host?: string;

  // Port of the remote application endpoint.
  port?: number;
}

export function beyondcorp_getAppConnectionApplicationEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "host",
      "Hostname or IP address of the remote application endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port of the remote application endpoint.",
      [],
      true,
      false,
    ),
  ];
}
