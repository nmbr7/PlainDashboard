import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AwsClusterControlPlaneAwsServicesAuthentication {
  // Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.
  roleSessionName?: string;

  // The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.
  roleArn?: string;
}

export function container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleSessionName",
      "Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.",
      [],
      true,
      false,
    ),
  ];
}
