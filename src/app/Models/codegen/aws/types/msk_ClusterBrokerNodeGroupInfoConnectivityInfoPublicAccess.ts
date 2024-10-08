import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
  // Public access type. Valid values: `DISABLED`, `SERVICE_PROVIDED_EIPS`.
  type?: string;
}

export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Public access type. Valid values: `DISABLED`, `SERVICE_PROVIDED_EIPS`.",
      () => [],
      false,
      false,
    ),
  ];
}
