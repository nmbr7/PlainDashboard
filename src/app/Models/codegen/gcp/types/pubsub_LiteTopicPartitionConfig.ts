import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pubsub_LiteTopicPartitionConfigCapacity,
  pubsub_LiteTopicPartitionConfigCapacity_GetTypes,
} from "./pubsub_LiteTopicPartitionConfigCapacity";

export interface pubsub_LiteTopicPartitionConfig {
  // The number of partitions in the topic. Must be at least 1.
  count?: number;

  /*
The capacity configuration.
Structure is documented below.
*/
  capacity?: pubsub_LiteTopicPartitionConfigCapacity;
}

export function pubsub_LiteTopicPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of partitions in the topic. Must be at least 1.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "capacity",
      "The capacity configuration.\nStructure is documented below.",
      () => pubsub_LiteTopicPartitionConfigCapacity_GetTypes(),
      false,
      false,
    ),
  ];
}
