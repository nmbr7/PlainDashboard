import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration {
  // Enable speaker search.
  speakerSearchStatus?: string;

  // Enable voice tone analysis.
  voiceToneAnalysisStatus?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "speakerSearchStatus",
      "Enable speaker search.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "voiceToneAnalysisStatus",
      "Enable voice tone analysis.",
      () => [],
      true,
      false,
    ),
  ];
}
