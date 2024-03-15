export interface getAuthorityAccessUrl {
  /*
The URL where this CertificateAuthority's CA certificate is published. This will only be
set for CAs that have been activated.
*/
  CaCertificateAccessUrl?: string;

  /*
The URL where this CertificateAuthority's CRLs are published. This will only be set for
CAs that have been activated.
*/
  CrlAccessUrls?: Array<string>;
}
