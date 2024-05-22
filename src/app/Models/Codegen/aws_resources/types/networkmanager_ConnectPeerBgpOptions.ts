import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkmanager_ConnectPeerBgpOptions {
  //
  peerAsn?: number;
}

export function networkmanager_ConnectPeerBgpOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "peerAsn", "", [], false, false),
  ];
}
