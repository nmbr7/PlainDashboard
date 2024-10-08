import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
  //
  deviceName?: string;

  //
  virtualName?: string;
}

export function ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
