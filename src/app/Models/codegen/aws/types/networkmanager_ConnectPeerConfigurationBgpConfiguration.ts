import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_ConnectPeerConfigurationBgpConfiguration {
  // A Connect peer core network address.
  coreNetworkAddress?: string;

  //
  coreNetworkAsn?: number;

  /*
The Connect peer address.

The following arguments are optional:
*/
  peerAddress?: string;

  //
  peerAsn?: number;
}

export function networkmanager_ConnectPeerConfigurationBgpConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "peerAddress",
      "The Connect peer address.\n\nThe following arguments are optional:",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "peerAsn", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "coreNetworkAddress",
      "A Connect peer core network address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "coreNetworkAsn",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
