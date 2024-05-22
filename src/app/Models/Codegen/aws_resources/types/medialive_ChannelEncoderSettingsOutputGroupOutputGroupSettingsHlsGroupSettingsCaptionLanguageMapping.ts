import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping {
  //
  captionChannel?: number;

  // Selects a specific three-letter language code from within an audio source.
  languageCode?: string;

  // Human readable information to indicate captions available for players (eg. English, or Spanish).
  languageDescription?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "captionChannel", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "Selects a specific three-letter language code from within an audio source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageDescription",
      "Human readable information to indicate captions available for players (eg. English, or Spanish).",
      [],
      true,
      false,
    ),
  ];
}
