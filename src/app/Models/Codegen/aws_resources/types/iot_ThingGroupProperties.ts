import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iot_ThingGroupPropertiesAttributePayload,
  iot_ThingGroupPropertiesAttributePayload_GetTypes,
} from "./iot_ThingGroupPropertiesAttributePayload";

export interface iot_ThingGroupProperties {
  // A description of the Thing Group.
  description?: string;

  // The Thing Group attributes. Defined below.
  attributePayload?: iot_ThingGroupPropertiesAttributePayload;
}

export function iot_ThingGroupProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "attributePayload",
      "The Thing Group attributes. Defined below.",
      iot_ThingGroupPropertiesAttributePayload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description of the Thing Group.",
      [],
      false,
      false,
    ),
  ];
}
