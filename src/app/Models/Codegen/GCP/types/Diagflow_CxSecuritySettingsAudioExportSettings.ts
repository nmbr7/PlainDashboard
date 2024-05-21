import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxSecuritySettingsAudioExportSettings {
  // Enable audio redaction if it is true.
  enableAudioRedaction?: boolean;

  // Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.
  gcsBucket?: string;

  // Filename pattern for exported audio.
  audioExportPattern?: string;

  /*
File format for exported audio file. Currently only in telephony recordings.
- MULAW: G.711 mu-law PCM with 8kHz sample rate.
- MP3: MP3 file format.
- OGG: OGG Vorbis.
Possible values are: `MULAW`, `MP3`, `OGG`.
*/
  audioFormat?: string;
}

export function diagflow_CxSecuritySettingsAudioExportSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableAudioRedaction",
      "Enable audio redaction if it is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcsBucket",
      "Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioExportPattern",
      "Filename pattern for exported audio.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioFormat",
      "File format for exported audio file. Currently only in telephony recordings.\n* MULAW: G.711 mu-law PCM with 8kHz sample rate.\n* MP3: MP3 file format.\n* OGG: OGG Vorbis.\nPossible values are: `MULAW`, `MP3`, `OGG`.",
      [],
      false,
      false,
    ),
  ];
}
