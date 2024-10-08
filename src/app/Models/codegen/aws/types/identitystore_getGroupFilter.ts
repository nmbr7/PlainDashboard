import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identitystore_getGroupFilter {
  // Attribute path that is used to specify which attribute name to search. Currently, `DisplayName` is the only valid attribute path.
  attributePath?: string;

  // Value for an attribute.
  attributeValue?: string;
}

export function identitystore_getGroupFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "attributePath",
      "Attribute path that is used to specify which attribute name to search. Currently, `DisplayName` is the only valid attribute path.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attributeValue",
      "Value for an attribute.",
      () => [],
      true,
      false,
    ),
  ];
}
