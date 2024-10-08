import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterNotificationConfigPubsub,
  container_ClusterNotificationConfigPubsub_GetTypes,
} from "./container_ClusterNotificationConfigPubsub";

export interface container_ClusterNotificationConfig {
  // The pubsub config for the cluster's upgrade notifications.
  pubsub?: container_ClusterNotificationConfigPubsub;
}

export function container_ClusterNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pubsub",
      "The pubsub config for the cluster's upgrade notifications.",
      () => container_ClusterNotificationConfigPubsub_GetTypes(),
      true,
      false,
    ),
  ];
}
