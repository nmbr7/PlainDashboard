import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_VMwareNodePoolConfigVsphereConfigTag {
  // The Vsphere tag category.
  category?: string;

  /*
The Vsphere tag name.

- - -
*/
  tag?: string;
}

export function gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "category",
      "The Vsphere tag category.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "The Vsphere tag name.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
