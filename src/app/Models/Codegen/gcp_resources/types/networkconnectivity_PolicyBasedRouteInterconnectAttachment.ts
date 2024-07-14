import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_PolicyBasedRouteInterconnectAttachment {
  // Cloud region to install this policy-based route on for Interconnect attachments. Use `all` to install it on all Interconnect attachments.
  region?: string;
}

export function networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "Cloud region to install this policy-based route on for Interconnect attachments. Use `all` to install it on all Interconnect attachments.",
      [],
      true,
      true,
    ),
  ];
}
