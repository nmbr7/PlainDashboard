import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface diagflow_FulfillmentFeature {
  /*
The type of the feature that enabled for fulfillment.
- SMALLTALK: Fulfillment is enabled for SmallTalk.
Possible values are: `SMALLTALK`.
*/
  type?: string;
}

export function diagflow_FulfillmentFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the feature that enabled for fulfillment.\n* SMALLTALK: Fulfillment is enabled for SmallTalk.\nPossible values are: `SMALLTALK`.",
      () => [],
      true,
      false,
    ),
  ];
}
