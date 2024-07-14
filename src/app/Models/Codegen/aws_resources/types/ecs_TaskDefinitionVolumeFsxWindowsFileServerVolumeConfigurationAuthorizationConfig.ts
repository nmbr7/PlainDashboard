import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
  // A fully qualified domain name hosted by an AWS Directory Service Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.
  domain?: string;

  // The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an AWS Secrets Manager secret or AWS Systems Manager Parameter Store parameter. The ARNs refer to the stored credentials.
  credentialsParameter?: string;
}

export function ecs_TaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "A fully qualified domain name hosted by an AWS Directory Service Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "credentialsParameter",
      "The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an AWS Secrets Manager secret or AWS Systems Manager Parameter Store parameter. The ARNs refer to the stored credentials.",
      [],
      true,
      true,
    ),
  ];
}
