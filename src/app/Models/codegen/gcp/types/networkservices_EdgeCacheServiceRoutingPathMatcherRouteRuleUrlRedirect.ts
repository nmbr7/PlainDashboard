import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect {
  /*
If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained.

- - -
*/
  stripQuery?: boolean;

  // The host that will be used in the redirect response instead of the one that was supplied in the request.
  hostRedirect?: string;

  /*
If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request.
This can only be set if there is at least one (1) edgeSslCertificate set on the service.
*/
  httpsRedirect?: boolean;

  /*
The path that will be used in the redirect response instead of the one that was supplied in the request.
pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
The path value must be between 1 and 1024 characters.
*/
  pathRedirect?: string;

  /*
The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
*/
  prefixRedirect?: string;

  /*
The HTTP Status code to use for this RedirectAction.
The supported values are:
*/
  redirectResponseCode?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "stripQuery",
      "If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained.\n\n- - -",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostRedirect",
      "The host that will be used in the redirect response instead of the one that was supplied in the request.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "httpsRedirect",
      "If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request.\nThis can only be set if there is at least one (1) edgeSslCertificate set on the service.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathRedirect",
      "The path that will be used in the redirect response instead of the one that was supplied in the request.\npathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.\nThe path value must be between 1 and 1024 characters.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixRedirect",
      "The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.\nprefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectResponseCode",
      "The HTTP Status code to use for this RedirectAction.\nThe supported values are:",
      () => [],
      false,
      false,
    ),
  ];
}
