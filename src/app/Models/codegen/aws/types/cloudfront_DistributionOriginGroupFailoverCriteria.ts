import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_DistributionOriginGroupFailoverCriteria {
  // List of HTTP status codes for the origin group.
  statusCodes?: Array<number>;
}

export function cloudfront_DistributionOriginGroupFailoverCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "statusCodes",
      "List of HTTP status codes for the origin group.",
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
