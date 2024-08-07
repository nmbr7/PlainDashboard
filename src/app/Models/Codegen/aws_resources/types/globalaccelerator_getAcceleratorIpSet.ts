import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface globalaccelerator_getAcceleratorIpSet {
  //
  ipAddresses?: Array<string>;

  //
  ipFamily?: string;
}

export function globalaccelerator_getAcceleratorIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ipFamily", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
