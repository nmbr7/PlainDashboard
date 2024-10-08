import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage {
  // Key used to extract the password from EC2 Parameter store.
  passwordParam?: string;

  // Path to a file accessible to the live stream.
  uri?: string;

  // . Username to be used.
  username?: string;
}

export function medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "passwordParam",
      "Key used to extract the password from EC2 Parameter store.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "Path to a file accessible to the live stream.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      ". Username to be used.",
      () => [],
      false,
      false,
    ),
  ];
}
