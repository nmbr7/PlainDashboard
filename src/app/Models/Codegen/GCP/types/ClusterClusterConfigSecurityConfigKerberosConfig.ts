export interface ClusterClusterConfigSecurityConfigKerberosConfig {
  /*
The Cloud Storage URI of a KMS encrypted file
containing the password to the user provided truststore. For the self-signed
certificate, this password is generated by Dataproc.
*/
  TruststorePasswordUri?: string;

  /*
The KDC (IP or hostname) for the
remote trusted realm in a cross realm trust relationship.
*/
  CrossRealmTrustKdc?: string;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the master key of the KDC database.
*/
  KdcDbKeyUri?: string;

  /*
The Cloud Storage URI of the keystore file used for SSL encryption.
If not provided, Dataproc will provide a self-signed certificate.
*/
  KeystoreUri?: string;

  /*
The Cloud Storage URI of the truststore file used for
SSL encryption. If not provided, Dataproc will provide a self-signed certificate.

- - -
*/
  TruststoreUri?: string;

  /*
The Cloud Storage URI of a KMS
encrypted file containing the shared password between the on-cluster Kerberos realm
and the remote trusted realm, in a cross realm trust relationship.
*/
  CrossRealmTrustSharedPasswordUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided key. For the self-signed certificate, this password
is generated by Dataproc.
*/
  KeyPasswordUri?: string;

  // The URI of the KMS key used to encrypt various sensitive files.
  KmsKeyUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file
containing the root principal password.
*/
  RootPrincipalPasswordUri?: string;

  // The lifetime of the ticket granting ticket, in hours.
  TgtLifetimeHours?: number;

  /*
The admin server (IP or hostname) for the
remote trusted realm in a cross realm trust relationship.
*/
  CrossRealmTrustAdminServer?: string;

  /*
The remote realm the Dataproc on-cluster KDC will
trust, should the user enable cross realm trust.
*/
  CrossRealmTrustRealm?: string;

  // Flag to indicate whether to Kerberize the cluster.
  EnableKerberos?: boolean;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificated, the password
is generated by Dataproc.
*/
  KeystorePasswordUri?: string;

  /*
The name of the on-cluster Kerberos realm. If not specified, the
uppercased domain of hostnames will be the realm.
*/
  Realm?: string;
}
