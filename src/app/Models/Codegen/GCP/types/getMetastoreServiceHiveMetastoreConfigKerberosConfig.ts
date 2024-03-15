import { getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab } from "./getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab";

export interface getMetastoreServiceHiveMetastoreConfigKerberosConfig {
  // A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  Principal?: string;

  // A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).
  Keytabs?: Array<getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab>;

  // A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
  Krb5ConfigGcsUri?: string;
}
