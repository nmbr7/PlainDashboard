import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  diagflow_CxPageEventHandlerTriggerFulfillment,
  diagflow_CxPageEventHandlerTriggerFulfillment_GetTypes,
} from "./diagflow_CxPageEventHandlerTriggerFulfillment";

export interface diagflow_CxPageEventHandler {
  /*
The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
Structure is documented below.
*/
  triggerFulfillment?: diagflow_CxPageEventHandlerTriggerFulfillment;

  // The name of the event to handle.
  event?: string;

  /*
(Output)
The unique identifier of this event handler.
*/
  name?: string;

  /*
The target flow to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
*/
  targetFlow?: string;

  /*
The target page to transition to.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
*/
  targetPage?: string;
}

export function diagflow_CxPageEventHandler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "triggerFulfillment",
      "The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.\nStructure is documented below.",
      diagflow_CxPageEventHandlerTriggerFulfillment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "event",
      "The name of the event to handle.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "(Output)\nThe unique identifier of this event handler.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetFlow",
      "The target flow to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetPage",
      "The target page to transition to.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.",
      [],
      false,
      false,
    ),
  ];
}
