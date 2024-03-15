import { BackendServiceOutlierDetectionBaseEjectionTime } from "./BackendServiceOutlierDetectionBaseEjectionTime";
import { BackendServiceOutlierDetectionInterval } from "./BackendServiceOutlierDetectionInterval";

export interface BackendServiceOutlierDetection {
  /*
Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%!!(MISSING)
(MISSING)
*/
  MaxEjectionPercent?: number;

  /*
The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
*/
  SuccessRateMinimumHosts?: number;

  /*
The base time that a host is ejected for. The real time is equal to the base
time multiplied by the number of times the host has been ejected. Defaults to
30000ms or 30s.
Structure is documented below.
*/
  BaseEjectionTime?: BackendServiceOutlierDetectionBaseEjectionTime;

  /*
The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
*/
  ConsecutiveGatewayFailure?: number;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
*/
  EnforcingConsecutiveGatewayFailure?: number;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
*/
  EnforcingSuccessRate?: number;

  /*
This factor is used to determine the ejection threshold for success rate outlier
ejection. The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev - success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.
*/
  SuccessRateStdevFactor?: number;

  /*
Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
*/
  ConsecutiveErrors?: number;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
*/
  EnforcingConsecutiveErrors?: number;

  /*
Time interval between ejection sweep analysis. This can result in both new
ejections as well as hosts being returned to service. Defaults to 10 seconds.
Structure is documented below.
*/
  Interval?: BackendServiceOutlierDetectionInterval;

  /*
The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
*/
  SuccessRateRequestVolume?: number;
}
