import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface customerprofiles_ProfileMailingAddress {
  // The third line of a customer address.
  address3?: string;

  // The country in which a customer lives.
  country?: string;

  // The province in which a customer lives.
  province?: string;

  // The first line of a customer address.
  address1?: string;

  // The second line of a customer address.
  address2?: string;

  // The fourth line of a customer address.
  address4?: string;

  // The city in which a customer lives.
  city?: string;

  // The county in which a customer lives.
  county?: string;

  // The postal code of a customer address.
  postalCode?: string;

  // The state in which a customer lives.
  state?: string;
}

export function customerprofiles_ProfileMailingAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "province",
      "The province in which a customer lives.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address2",
      "The second line of a customer address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "city",
      "The city in which a customer lives.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postalCode",
      "The postal code of a customer address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address3",
      "The third line of a customer address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "country",
      "The country in which a customer lives.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address1",
      "The first line of a customer address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address4",
      "The fourth line of a customer address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "county",
      "The county in which a customer lives.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The state in which a customer lives.",
      () => [],
      false,
      false,
    ),
  ];
}
