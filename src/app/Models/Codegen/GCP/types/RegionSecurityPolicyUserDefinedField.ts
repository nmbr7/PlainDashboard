export interface RegionSecurityPolicyUserDefinedField {
  // Offset of the first byte of the field (in network byte order) relative to 'base'.
  Offset?: number;

  // Size of the field in bytes. Valid values: 1-4.
  Size?: number;

  /*
The base relative to which 'offset' is measured. Possible values are:
- IPV4: Points to the beginning of the IPv4 header.
- IPV6: Points to the beginning of the IPv6 header.
- TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
- UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
Possible values are: `IPV4`, `IPV6`, `TCP`, `UDP`.
*/
  Base?: string;

  /*
If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.
Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.
*/
  Mask?: string;

  // The name of this field. Must be unique within the policy.
  Name?: string;
}
