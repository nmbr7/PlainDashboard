import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
  // A number that CloudFront uses as the value for the max-age directive in the Strict-Transport-Security HTTP response header.
  accessControlMaxAgeSec?: number;

  // Whether CloudFront includes the includeSubDomains directive in the Strict-Transport-Security HTTP response header.
  includeSubdomains?: boolean;

  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;

  // Whether CloudFront includes the preload directive in the Strict-Transport-Security HTTP response header.
  preload?: boolean;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "accessControlMaxAgeSec",
      "A number that CloudFront uses as the value for the max-age directive in the Strict-Transport-Security HTTP response header.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeSubdomains",
      "Whether CloudFront includes the includeSubDomains directive in the Strict-Transport-Security HTTP response header.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preload",
      "Whether CloudFront includes the preload directive in the Strict-Transport-Security HTTP response header.",
      () => [],
      true,
      false,
    ),
  ];
}
