export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy {
  /*
Specifies the list of origins that will be allowed to do CORS requests.
This translates to the Access-Control-Allow-Origin response header.
*/
  AllowOrigins?: Array<string>;

  // If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  Disabled?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers response header.
  ExposeHeaders?: Array<string>;

  /*
Specifies how long results of a preflight request can be cached by a client in seconds. Note that many browser clients enforce a maximum TTL of 600s (10 minutes).
- Setting the value to -1 forces a pre-flight check for all requests (not recommended)
- A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
- This translates to the Access-Control-Max-Age header.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  MaxAge?: string;

  /*
In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials response header.
*/
  AllowCredentials?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers response header.
  AllowHeaders?: Array<string>;

  // Specifies the content for the Access-Control-Allow-Methods response header.
  AllowMethods?: Array<string>;
}
