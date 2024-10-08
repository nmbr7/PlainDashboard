import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkmanager_ConnectPeerBgpOptions,
  networkmanager_ConnectPeerBgpOptions_GetTypes,
} from "../types/networkmanager_ConnectPeerBgpOptions";
import {
  networkmanager_ConnectPeerConfiguration,
  networkmanager_ConnectPeerConfiguration_GetTypes,
} from "../types/networkmanager_ConnectPeerConfiguration";

export interface ConnectPeerArgs {
  // The Connect peer BGP options.
  bgpOptions?: networkmanager_ConnectPeerBgpOptions;

  // The ID of the connection attachment.
  connectAttachmentId?: string;

  // A Connect peer core network address.
  coreNetworkAddress?: string;

  // The inside IP addresses used for BGP peering. Required when the Connect attachment protocol is `GRE`. See `aws.networkmanager.ConnectAttachment` for details.
  insideCidrBlocks?: Array<string>;

  /*
The Connect peer address.

The following arguments are optional:
*/
  peerAddress?: string;

  // The subnet ARN for the Connect peer. Required when the Connect attachment protocol is `NO_ENCAP`. See `aws.networkmanager.ConnectAttachment` for details.
  subnetArn?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ConnectPeer extends DS_Resource {
  // The Connect peer BGP options.
  public bgpOptions?: networkmanager_ConnectPeerBgpOptions;

  // A Connect peer core network address.
  public coreNetworkAddress?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public connectPeerId?: string;

  // The Region where the peer is located.
  public edgeLocation?: string;

  // The subnet ARN for the Connect peer. Required when the Connect attachment protocol is `NO_ENCAP`. See `aws.networkmanager.ConnectAttachment` for details.
  public subnetArn?: string;

  // The ID of a core network.
  public coreNetworkId?: string;

  // The configuration of the Connect peer.
  public configurations?: Array<networkmanager_ConnectPeerConfiguration>;

  // The ID of the connection attachment.
  public connectAttachmentId?: string;

  //
  public createdAt?: string;

  // The inside IP addresses used for BGP peering. Required when the Connect attachment protocol is `GRE`. See `aws.networkmanager.ConnectAttachment` for details.
  public insideCidrBlocks?: Array<string>;

  /*
The Connect peer address.

The following arguments are optional:
*/
  public peerAddress?: string;

  // The state of the Connect peer.
  public state?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the attachment.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "bgpOptions",
        "The Connect peer BGP options.",
        () => networkmanager_ConnectPeerBgpOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectAttachmentId",
        "The ID of the connection attachment.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "coreNetworkAddress",
        "A Connect peer core network address.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "insideCidrBlocks",
        "The inside IP addresses used for BGP peering. Required when the Connect attachment protocol is `GRE`. See `aws.networkmanager.ConnectAttachment` for details.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerAddress",
        "The Connect peer address.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetArn",
        "The subnet ARN for the Connect peer. Required when the Connect attachment protocol is `NO_ENCAP`. See `aws.networkmanager.ConnectAttachment` for details.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
