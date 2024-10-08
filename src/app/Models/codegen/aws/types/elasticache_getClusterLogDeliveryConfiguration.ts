import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticache_getClusterLogDeliveryConfiguration {
  //
  destination?: string;

  //
  destinationType?: string;

  //
  logFormat?: string;

  //
  logType?: string;
}

export function elasticache_getClusterLogDeliveryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationType",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logFormat",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "logType", "", () => [], true, false),
  ];
}
