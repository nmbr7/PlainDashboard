import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface billing_BudgetAmountSpecifiedAmount {
  // The 3-letter currency code defined in ISO 4217.
  currencyCode?: string;

  /*
Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

- - -
*/
  nanos?: number;

  /*
The whole units of the amount. For example if currencyCode
is "USD", then 1 unit is one US dollar.
*/
  units?: string;
}

export function billing_BudgetAmountSpecifiedAmount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "units",
      'The whole units of the amount. For example if currencyCode\nis "USD", then 1 unit is one US dollar.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "currencyCode",
      "The 3-letter currency code defined in ISO 4217.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nanos",
      "Number of nano (10^-9) units of the amount.\nThe value must be between -999,999,999 and +999,999,999\ninclusive. If units is positive, nanos must be positive or\nzero. If units is zero, nanos can be positive, zero, or\nnegative. If units is negative, nanos must be negative or\nzero. For example $-1.75 is represented as units=-1 and\nnanos=-750,000,000.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
