import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkconnectivity_ServiceConnectionPolicyPscConfig {
  // Max number of PSC connections for this policy.
  limit?: string;

  // IDs of the subnetworks or fully qualified identifiers for the subnetworks
  subnetworks?: Array<string>;
}

export function networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnetworks",
      "IDs of the subnetworks or fully qualified identifiers for the subnetworks",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "limit",
      "Max number of PSC connections for this policy.",
      [],
      false,
      false,
    ),
  ];
}
