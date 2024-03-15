import { URLMapPathMatcherDefaultRouteActionCorsPolicy } from "./URLMapPathMatcherDefaultRouteActionCorsPolicy";
import { URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy } from "./URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy";
import { URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy } from "./URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy";
import { URLMapPathMatcherDefaultRouteActionRetryPolicy } from "./URLMapPathMatcherDefaultRouteActionRetryPolicy";
import { URLMapPathMatcherDefaultRouteActionTimeout } from "./URLMapPathMatcherDefaultRouteActionTimeout";
import { URLMapPathMatcherDefaultRouteActionUrlRewrite } from "./URLMapPathMatcherDefaultRouteActionUrlRewrite";
import { URLMapPathMatcherDefaultRouteActionWeightedBackendService } from "./URLMapPathMatcherDefaultRouteActionWeightedBackendService";

export interface URLMapPathMatcherDefaultRouteAction {
  /*
Specifies the timeout for the selected route. Timeout is computed from the time the request has been
fully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries.
If not specified, will use the largest timeout among all backend services associated with the route.
Structure is documented below.
*/
  Timeout?: URLMapPathMatcherDefaultRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to the matched service.
Structure is documented below.
*/
  UrlRewrite?: URLMapPathMatcherDefaultRouteActionUrlRewrite;

  /*
A list of weighted backend services to send traffic to when a route match occurs.
The weights determine the fraction of traffic that flows to their corresponding backend service.
If all traffic needs to go to a single backend service, there must be one weightedBackendService
with weight set to a non 0 number.
Once a backendService is identified and before forwarding the request to the backend service,
advanced routing actions like Url rewrites and header transformations are applied depending on
additional settings specified in this HttpRouteAction.
Structure is documented below.
*/
  WeightedBackendServices?: Array<URLMapPathMatcherDefaultRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see
[W3C Recommendation for Cross Origin Resource Sharing](https://www.w3.org/TR/cors/)
Structure is documented below.
*/
  CorsPolicy?: URLMapPathMatcherDefaultRouteActionCorsPolicy;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
As part of fault injection, when clients send requests to a backend service, delays can be introduced by Loadbalancer on a
percentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted
by the Loadbalancer for a percentage of requests.
timeout and retryPolicy will be ignored by clients that are configured with a faultInjectionPolicy.
Structure is documented below.
*/
  FaultInjectionPolicy?: URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are shadowed to a separate mirrored backend service.
Loadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service,
the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  RequestMirrorPolicy?: URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: URLMapPathMatcherDefaultRouteActionRetryPolicy;
}
