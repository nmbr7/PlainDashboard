import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codepipeline_WebhookAuthenticationConfiguration {
  // A valid CIDR block for `IP` filtering. Required for `IP`.
  allowedIpRange?: string;

  // The shared secret for the GitHub repository webhook. Set this as `secret` in your `github_repository_webhook`'s `configuration` block. Required for `GITHUB_HMAC`.
  secretToken?: string;
}

export function codepipeline_WebhookAuthenticationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "allowedIpRange",
      "A valid CIDR block for `IP` filtering. Required for `IP`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretToken",
      "The shared secret for the GitHub repository webhook. Set this as `secret` in your `github_repository_webhook`'s `configuration` block. Required for `GITHUB_HMAC`.",
      [],
      false,
      true,
    ),
  ];
}
