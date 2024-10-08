import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey {
  // (Optional) Use the first IP address in an HTTP header as an aggregate key. See `forwarded_ip` below for details.
  forwardedIp?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp;

  // (Optional) Use the request's HTTP method as an aggregate key. See RateLimit `http_method` below for details.
  httpMethod?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod;

  // (Optional) Use the request's query string as an aggregate key. See RateLimit `query_string` below for details.
  queryString?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString;

  // (Optional) Use the request's URI path as an aggregate key. See RateLimit `uri_path` below for details.
  uriPath?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath;

  // (Optional) Use the value of a cookie in the request as an aggregate key. See RateLimit `cookie` below for details.
  cookie?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie;

  // (Optional) Use the request's originating IP address as an aggregate key. See `RateLimit ip` below for details.
  ip?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp;

  // (Optional) Use the specified label namespace as an aggregate key. See RateLimit `label_namespace` below for details.
  labelNamespace?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace;

  // (Optional) Use the specified query argument as an aggregate key. See RateLimit `query_argument` below for details.
  queryArgument?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument;

  // (Optional) Use the value of a header in the request as an aggregate key. See RateLimit `header` below for details.
  header?: wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookie",
      "(Optional) Use the value of a cookie in the request as an aggregate key. See RateLimit `cookie` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyCookie_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ip",
      "(Optional) Use the request's originating IP address as an aggregate key. See `RateLimit ip` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryArgument",
      "(Optional) Use the specified query argument as an aggregate key. See RateLimit `query_argument` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedIp",
      "(Optional) Use the first IP address in an HTTP header as an aggregate key. See `forwarded_ip` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyForwardedIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpMethod",
      "(Optional) Use the request's HTTP method as an aggregate key. See RateLimit `http_method` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHttpMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "(Optional) Use the request's URI path as an aggregate key. See RateLimit `uri_path` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "(Optional) Use the request's query string as an aggregate key. See RateLimit `query_string` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelNamespace",
      "(Optional) Use the specified label namespace as an aggregate key. See RateLimit `label_namespace` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "header",
      "(Optional) Use the value of a header in the request as an aggregate key. See RateLimit `header` below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
