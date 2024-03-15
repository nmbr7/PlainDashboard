import { CertificateMapGclbTargetIpConfig } from "./CertificateMapGclbTargetIpConfig";

export interface CertificateMapGclbTarget {
  /*
An IP configuration where this Certificate Map is serving
Structure is documented below.
*/
  IpConfigs?: Array<CertificateMapGclbTargetIpConfig>;

  /*
Proxy name must be in the format projects/-/locations/-/targetHttpsProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  TargetHttpsProxy?: string;

  /*
Proxy name must be in the format projects/-/locations/-/targetSslProxies/-.
This field is part of a union field `target_proxy`: Only one of `targetHttpsProxy` or
`targetSslProxy` may be set.
*/
  TargetSslProxy?: string;
}
