import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  msk_ServerlessClusterClientAuthenticationSaslIam,
  msk_ServerlessClusterClientAuthenticationSaslIam_GetTypes,
} from "./msk_ServerlessClusterClientAuthenticationSaslIam";

export interface msk_ServerlessClusterClientAuthenticationSasl {
  // Details for client authentication using IAM. See below.
  iam?: msk_ServerlessClusterClientAuthenticationSaslIam;
}

export function msk_ServerlessClusterClientAuthenticationSasl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "iam",
      "Details for client authentication using IAM. See below.",
      msk_ServerlessClusterClientAuthenticationSaslIam_GetTypes(),
      true,
      true,
    ),
  ];
}
