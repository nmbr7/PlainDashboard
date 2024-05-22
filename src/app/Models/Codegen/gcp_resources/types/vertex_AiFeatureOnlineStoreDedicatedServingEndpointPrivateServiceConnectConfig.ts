import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig {
  // If set to true, customers will use private service connection to send request. Otherwise, the connection will set to public endpoint.
  enablePrivateServiceConnect?: boolean;

  // A list of Projects from which the forwarding rule will target the service attachment.
  projectAllowlists?: Array<string>;
}

export function vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "projectAllowlists",
      "A list of Projects from which the forwarding rule will target the service attachment.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateServiceConnect",
      "If set to true, customers will use private service connection to send request. Otherwise, the connection will set to public endpoint.",
      [],
      true,
      false,
    ),
  ];
}
