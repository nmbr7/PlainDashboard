import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_getCostCategorySplitChargeRuleParameter,
  costexplorer_getCostCategorySplitChargeRuleParameter_GetTypes,
} from "./costexplorer_getCostCategorySplitChargeRuleParameter";

export interface costexplorer_getCostCategorySplitChargeRule {
  // Method that's used to define how to split your source costs across your targets. Valid values are `FIXED`, `PROPORTIONAL`, `EVEN`
  method?: string;

  // Configuration block for the parameters for a split charge method. This is only required for the `FIXED` method. See below.
  parameters?: Array<costexplorer_getCostCategorySplitChargeRuleParameter>;

  // Cost Category value that you want to split.
  source?: string;

  // Cost Category values that you want to split costs across. These values can't be used as a source in other split charge rules.
  targets?: Array<string>;
}

export function costexplorer_getCostCategorySplitChargeRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Configuration block for the parameters for a split charge method. This is only required for the `FIXED` method. See below.",
      costexplorer_getCostCategorySplitChargeRuleParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Cost Category value that you want to split.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "Cost Category values that you want to split costs across. These values can't be used as a source in other split charge rules.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "method",
      "Method that's used to define how to split your source costs across your targets. Valid values are `FIXED`, `PROPORTIONAL`, `EVEN`",
      [],
      true,
      false,
    ),
  ];
}
