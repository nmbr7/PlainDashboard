import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssoadmin_InstanceAccessControlAttributesAttributeValue {
  // The identity source to use when mapping a specified attribute to AWS SSO.
  sources?: Array<string>;
}

export function ssoadmin_InstanceAccessControlAttributesAttributeValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sources",
      "The identity source to use when mapping a specified attribute to AWS SSO.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
