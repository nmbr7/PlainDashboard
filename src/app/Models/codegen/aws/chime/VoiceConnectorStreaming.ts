import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chime_VoiceConnectorStreamingMediaInsightsConfiguration,
  chime_VoiceConnectorStreamingMediaInsightsConfiguration_GetTypes,
} from "../types/chime_VoiceConnectorStreamingMediaInsightsConfiguration";

export interface VoiceConnectorStreamingArgs {
  // The streaming notification targets. Valid Values: `EventBridge | SNS | SQS`
  streamingNotificationTargets?: Array<string>;

  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;

  // The retention period, in hours, for the Amazon Kinesis data.
  dataRetention?: number;

  // When true, media streaming to Amazon Kinesis is turned off. Default: `false`
  disabled?: boolean;

  // The media insights configuration. See `media_insights_configuration`.
  mediaInsightsConfiguration?: chime_VoiceConnectorStreamingMediaInsightsConfiguration;
}
export class VoiceConnectorStreaming extends DS_Resource {
  // The retention period, in hours, for the Amazon Kinesis data.
  public dataRetention?: number;

  // When true, media streaming to Amazon Kinesis is turned off. Default: `false`
  public disabled?: boolean;

  // The media insights configuration. See `media_insights_configuration`.
  public mediaInsightsConfiguration?: chime_VoiceConnectorStreamingMediaInsightsConfiguration;

  // The streaming notification targets. Valid Values: `EventBridge | SNS | SQS`
  public streamingNotificationTargets?: Array<string>;

  // The Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "dataRetention",
        "The retention period, in hours, for the Amazon Kinesis data.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "When true, media streaming to Amazon Kinesis is turned off. Default: `false`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mediaInsightsConfiguration",
        "The media insights configuration. See `media_insights_configuration`.",
        () =>
          chime_VoiceConnectorStreamingMediaInsightsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "streamingNotificationTargets",
        "The streaming notification targets. Valid Values: `EventBridge | SNS | SQS`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "voiceConnectorId",
        "The Amazon Chime Voice Connector ID.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
