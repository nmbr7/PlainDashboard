import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig,
  pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig_GetTypes,
} from "./pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig";

export interface pipes_PipeSourceParametersKinesisStreamParameters {
  // With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.
  startingPositionTimestamp?: string;

  // The number of batches to process concurrently from each shard. The default value is 1. Maximum value of 10.
  parallelizationFactor?: number;

  // The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.
  startingPosition?: string;

  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;

  // Define the target queue to send dead-letter queue events to. Detailed below.
  deadLetterConfig?: pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;

  // Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records. Maximum value of 604,800.
  maximumRecordAgeInSeconds?: number;

  // Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source. Maximum value of 10,000.
  maximumRetryAttempts?: number;

  // Define how to handle item process failures. AUTOMATIC_BISECT halves each batch and retry each half until all the records are processed or there is one failed message left in the batch. Valid values: AUTOMATIC_BISECT.
  onPartialBatchItemFailure?: string;
}

export function pipes_PipeSourceParametersKinesisStreamParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "startingPosition",
      "The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "The maximum number of records to include in each batch. Maximum value of 10000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumBatchingWindowInSeconds",
      "The maximum length of a time to wait for events. Maximum value of 300.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumRecordAgeInSeconds",
      "Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records. Maximum value of 604,800.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startingPositionTimestamp",
      "With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parallelizationFactor",
      "The number of batches to process concurrently from each shard. The default value is 1. Maximum value of 10.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deadLetterConfig",
      "Define the target queue to send dead-letter queue events to. Detailed below.",
      pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumRetryAttempts",
      "Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source. Maximum value of 10,000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onPartialBatchItemFailure",
      "Define how to handle item process failures. AUTOMATIC_BISECT halves each batch and retry each half until all the records are processed or there is one failed message left in the batch. Valid values: AUTOMATIC_BISECT.",
      [],
      false,
      false,
    ),
  ];
}
