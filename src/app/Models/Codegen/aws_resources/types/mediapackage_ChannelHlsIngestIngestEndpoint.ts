import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mediapackage_ChannelHlsIngestIngestEndpoint {
  // The password
  password?: string;

  // The URL
  url?: string;

  // The username
  username?: string;
}

export function mediapackage_ChannelHlsIngestIngestEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "url", "The URL", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The username",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password",
      [],
      false,
      false,
    ),
  ];
}
