import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem {
  // The HTTP header name.
  header?: string;

  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;

  // Value for the HTTP response header.
  value?: string;
}

export function cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "header",
      "The HTTP header name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for the HTTP response header.",
      [],
      true,
      false,
    ),
  ];
}
