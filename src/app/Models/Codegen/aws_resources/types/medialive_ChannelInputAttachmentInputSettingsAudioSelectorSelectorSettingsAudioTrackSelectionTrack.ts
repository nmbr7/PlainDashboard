import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack {
  // 1-based integer value that maps to a specific audio track.
  track?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "track",
      "1-based integer value that maps to a specific audio track.",
      [],
      true,
      false,
    ),
  ];
}
