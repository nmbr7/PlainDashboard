import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2clientvpn_getEndpointClientConnectOption {
  //
  enabled?: boolean;

  //
  lambdaFunctionArn?: string;
}

export function ec2clientvpn_getEndpointClientConnectOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "lambdaFunctionArn",
      "",
      [],
      true,
      false,
    ),
  ];
}
