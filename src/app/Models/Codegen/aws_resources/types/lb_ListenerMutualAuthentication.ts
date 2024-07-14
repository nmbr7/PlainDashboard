import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_ListenerMutualAuthentication {
  // Whether client certificate expiry is ignored. Default is `false`.
  ignoreClientCertificateExpiry?: boolean;

  // Valid values are `off`, `verify` and `passthrough`.
  mode?: string;

  // ARN of the elbv2 Trust Store.
  trustStoreArn?: string;
}

export function lb_ListenerMutualAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "trustStoreArn",
      "ARN of the elbv2 Trust Store.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreClientCertificateExpiry",
      "Whether client certificate expiry is ignored. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Valid values are `off`, `verify` and `passthrough`.",
      [],
      true,
      false,
    ),
  ];
}
