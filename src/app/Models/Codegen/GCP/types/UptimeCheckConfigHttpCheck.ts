import { UptimeCheckConfigHttpCheckPingConfig } from "./UptimeCheckConfigHttpCheckPingConfig";
import { UptimeCheckConfigHttpCheckAcceptedResponseStatusCode } from "./UptimeCheckConfigHttpCheckAcceptedResponseStatusCode";
import { UptimeCheckConfigHttpCheckAuthInfo } from "./UptimeCheckConfigHttpCheckAuthInfo";

export interface UptimeCheckConfigHttpCheck {
  // The request body associated with the HTTP POST request. If `content_type` is `URL_ENCODED`, the body passed in must be URL-encoded. Users can provide a `Content-Length` header via the `headers` field or the API will do so. If the `request_method` is `GET` and `body` is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. `foo=bar` in URL-encoded form is `foo%!!(MISSING)D(MISSING)bar` and in base64 encoding is `Zm9vJTI1M0RiYXI=`.
  Body?: string;

  // A user provided content type header to use for the check. The invalid configurations outlined in the `content_type` field apply to custom_content_type`, as well as the following 1. `content_type` is `URL_ENCODED` and `custom_content_type` is set. 2. `content_type` is `USER_PROVIDED` and `custom_content_type` is not set.
  CustomContentType?: string;

  /*
Contains information needed to add pings to an HTTP check.
Structure is documented below.
*/
  PingConfig?: UptimeCheckConfigHttpCheckPingConfig;

  // If true, use HTTPS instead of HTTP to run the check.
  UseSsl?: boolean;

  // Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where `monitored_resource` is set to `uptime_url`. If `use_ssl` is `false`, setting `validate_ssl` to `true` has no effect.
  ValidateSsl?: boolean;

  /*
The HTTP request method to use for the check. If set to `METHOD_UNSPECIFIED` then `request_method` defaults to `GET`.
Default value is `GET`.
Possible values are: `METHOD_UNSPECIFIED`, `GET`, `POST`.
*/
  RequestMethod?: string;

  /*
If present, the check will only pass if the HTTP response status code is in this set of status codes. If empty, the HTTP status code will only pass if the HTTP status code is 200-299.
Structure is documented below.
*/
  AcceptedResponseStatusCodes?: Array<UptimeCheckConfigHttpCheckAcceptedResponseStatusCode>;

  /*
The authentication information. Optional when creating an HTTP check; defaults to empty.
Structure is documented below.
*/
  AuthInfo?: UptimeCheckConfigHttpCheckAuthInfo;

  /*
The content type to use for the check.
Possible values are: `TYPE_UNSPECIFIED`, `URL_ENCODED`, `USER_PROVIDED`.
*/
  ContentType?: string;

  // The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described in [RFC 2616 (page 31)](https://www.w3.org/Protocols/rfc2616/rfc2616.txt). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
  Headers?: Map<string, string>;

  // Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if `mask_headers` is set to `true` then the headers will be obscured with `------`.
  MaskHeaders?: boolean;

  // The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with `/`, a `/` will be prepended automatically. Optional (defaults to `/`).
  Path?: string;

  // The port to the page to run the check against. Will be combined with `host` (specified within the `monitored_resource`) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).
  Port?: number;
}
