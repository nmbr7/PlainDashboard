import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getDiskGuestOsFeature {
  /*
URL of the disk type resource describing which disk type to use to
create the disk.
*/
  type?: string;
}

export function compute_getDiskGuestOsFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "URL of the disk type resource describing which disk type to use to\ncreate the disk.",
      () => [],
      true,
      false,
    ),
  ];
}
