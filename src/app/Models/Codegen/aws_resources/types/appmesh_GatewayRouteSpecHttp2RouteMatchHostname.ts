import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_GatewayRouteSpecHttp2RouteMatchHostname {
  // Exact host name to match on.
  exact?: string;

  // Specified ending characters of the host name to match on.
  suffix?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteMatchHostname_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "Exact host name to match on.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suffix",
      "Specified ending characters of the host name to match on.",
      [],
      false,
      false,
    ),
  ];
}
