import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_ServiceTrafficStatus {
  /*
(Output)
Displays the target URI.
*/
  uri?: string;

  // Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  percent?: number;

  // The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  revision?: string;

  // Indicates a string to be part of the URI to exclusively reference this target.
  tag?: string;

  /*
The allocation type for this traffic target.
Possible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.
*/
  type?: string;
}

export function cloudrunv2_ServiceTrafficStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The allocation type for this traffic target.\nPossible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "(Output)\nDisplays the target URI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Indicates a string to be part of the URI to exclusively reference this target.",
      [],
      false,
      false,
    ),
  ];
}
