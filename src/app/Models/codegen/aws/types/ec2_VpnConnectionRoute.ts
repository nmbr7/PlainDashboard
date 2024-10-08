import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_VpnConnectionRoute {
  // The CIDR block associated with the local subnet of the customer data center.
  destinationCidrBlock?: string;

  // Indicates how the routes were provided.
  source?: string;

  // The current state of the static route.
  state?: string;
}

export function ec2_VpnConnectionRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationCidrBlock",
      "The CIDR block associated with the local subnet of the customer data center.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Indicates how the routes were provided.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The current state of the static route.",
      () => [],
      false,
      false,
    ),
  ];
}
