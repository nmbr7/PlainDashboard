import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelInputAttachmentInputSettingsVideoSelector {
  //
  colorSpaceUsage?: string;

  //
  colorSpace?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsVideoSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "colorSpaceUsage",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "colorSpace", "", [], false, false),
  ];
}
