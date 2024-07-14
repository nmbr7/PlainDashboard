import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface budgets_getBudgetAutoAdjustDataHistoricalOption {
  // (Required) - The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount.
  budgetAdjustmentPeriod?: number;

  // (Optional) - The integer that describes how many budget periods in your BudgetAdjustmentPeriod are included in the calculation of your current budget limit. If the first budget period in your BudgetAdjustmentPeriod has no cost data, then that budget period isn’t included in the average that determines your budget limit. You can’t set your own LookBackAvailablePeriods. The value is automatically calculated from the `budget_adjustment_period` and your historical cost data.
  lookbackAvailablePeriods?: number;
}

export function budgets_getBudgetAutoAdjustDataHistoricalOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "budgetAdjustmentPeriod",
      "(Required) - The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "lookbackAvailablePeriods",
      "(Optional) - The integer that describes how many budget periods in your BudgetAdjustmentPeriod are included in the calculation of your current budget limit. If the first budget period in your BudgetAdjustmentPeriod has no cost data, then that budget period isn’t included in the average that determines your budget limit. You can’t set your own LookBackAvailablePeriods. The value is automatically calculated from the `budget_adjustment_period` and your historical cost data.",
      [],
      true,
      false,
    ),
  ];
}
