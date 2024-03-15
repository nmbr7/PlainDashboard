export interface SpokeLinkedInterconnectAttachments {
  // A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
  SiteToSiteDataTransfer?: boolean;

  // The URIs of linked interconnect attachment resources
  Uris?: Array<string>;
}
