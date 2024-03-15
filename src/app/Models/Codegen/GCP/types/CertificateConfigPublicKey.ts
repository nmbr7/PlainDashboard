export interface CertificateConfigPublicKey {
  /*
The format of the public key. Currently, only PEM format is supported.
Possible values are: `KEY_TYPE_UNSPECIFIED`, `PEM`.
*/
  Format?: string;

  // Required. A public key. When this is specified in a request, the padding and encoding can be any of the options described by the respective 'KeyType' value. When this is generated by the service, it will always be an RFC 5280 SubjectPublicKeyInfo structure containing an algorithm identifier and a key. A base64-encoded string.
  Key?: string;
}
