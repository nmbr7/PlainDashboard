import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3outposts_EndpointNetworkInterface {
  // Identifier of the Elastic Network Interface (ENI).
  networkInterfaceId?: string;
}

export function s3outposts_EndpointNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "Identifier of the Elastic Network Interface (ENI).",
      () => [],
      false,
      false,
    ),
  ];
}
