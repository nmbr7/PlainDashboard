import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pubsub_LiteSubscriptionDeliveryConfig {
  /*
When this subscription should send messages to subscribers relative to messages persistence in storage.
Possible values are: `DELIVER_IMMEDIATELY`, `DELIVER_AFTER_STORED`, `DELIVERY_REQUIREMENT_UNSPECIFIED`.
*/
  deliveryRequirement?: string;
}

export function pubsub_LiteSubscriptionDeliveryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryRequirement",
      "When this subscription should send messages to subscribers relative to messages persistence in storage.\nPossible values are: `DELIVER_IMMEDIATELY`, `DELIVER_AFTER_STORED`, `DELIVERY_REQUIREMENT_UNSPECIFIED`.",
      () => [],
      true,
      false,
    ),
  ];
}
