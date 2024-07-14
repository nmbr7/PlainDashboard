import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_PacketMirroringMirroredResourcesSubnetwork {
  // The URL of the subnetwork where this rule should be active.
  url?: string;
}

export function compute_PacketMirroringMirroredResourcesSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL of the subnetwork where this rule should be active.",
      [],
      true,
      false,
    ),
  ];
}
