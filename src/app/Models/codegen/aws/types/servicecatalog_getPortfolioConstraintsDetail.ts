import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface servicecatalog_getPortfolioConstraintsDetail {
  // Identifier of the constraint.
  constraintId?: string;

  // Description of the constraint.
  description?: string;

  //
  owner?: string;

  /*
Portfolio identifier.

The following arguments are optional:
*/
  portfolioId?: string;

  // Product identifier.
  productId?: string;

  // Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `STACKSET`, and `TEMPLATE`.
  type?: string;
}

export function servicecatalog_getPortfolioConstraintsDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "constraintId",
      "Identifier of the constraint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the constraint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "owner", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "portfolioId",
      "Portfolio identifier.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "productId",
      "Product identifier.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `STACKSET`, and `TEMPLATE`.",
      () => [],
      true,
      false,
    ),
  ];
}
