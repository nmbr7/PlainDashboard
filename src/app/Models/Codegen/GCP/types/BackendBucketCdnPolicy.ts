import { BackendBucketCdnPolicyNegativeCachingPolicy } from "./BackendBucketCdnPolicyNegativeCachingPolicy";
import { BackendBucketCdnPolicyCacheKeyPolicy } from "./BackendBucketCdnPolicyCacheKeyPolicy";
import { BackendBucketCdnPolicyBypassCacheOnRequestHeader } from "./BackendBucketCdnPolicyBypassCacheOnRequestHeader";

export interface BackendBucketCdnPolicy {
  /*
Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC
Possible values are: `USE_ORIGIN_HEADERS`, `FORCE_CACHE_ALL`, `CACHE_ALL_STATIC`.
*/
  CacheMode?: string;

  /*
Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
*/
  DefaultTtl?: number;

  /*
Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.
Structure is documented below.
*/
  NegativeCachingPolicies?: Array<BackendBucketCdnPolicyNegativeCachingPolicy>;

  // If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.
  RequestCoalescing?: boolean;

  /*
Maximum number of seconds the response to a signed URL request will
be considered fresh. After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.
*/
  SignedUrlCacheMaxAgeSec?: number;

  /*
The CacheKeyPolicy for this CdnPolicy.
Structure is documented below.
*/
  CacheKeyPolicy?: BackendBucketCdnPolicyCacheKeyPolicy;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  ClientTtl?: number;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  MaxTtl?: number;

  // Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  NegativeCaching?: boolean;

  // Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  ServeWhileStale?: number;

  /*
Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings.
Structure is documented below.
*/
  BypassCacheOnRequestHeaders?: Array<BackendBucketCdnPolicyBypassCacheOnRequestHeader>;
}
