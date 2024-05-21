import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  eventarc_TriggerTransportPubsub,
  eventarc_TriggerTransportPubsub_GetTypes,
} from "./eventarc_TriggerTransportPubsub";

export interface eventarc_TriggerTransport {
  // The Pub/Sub topic and subscription used by Eventarc as delivery intermediary.
  pubsub?: eventarc_TriggerTransportPubsub;
}

export function eventarc_TriggerTransport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pubsub",
      "The Pub/Sub topic and subscription used by Eventarc as delivery intermediary.",
      eventarc_TriggerTransportPubsub_GetTypes(),
      false,
      true,
    ),
  ];
}
