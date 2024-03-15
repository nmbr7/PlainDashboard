import { BudgetBudgetFilterCustomPeriod } from "./BudgetBudgetFilterCustomPeriod";

export interface BudgetBudgetFilter {
  /*
A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId},
specifying that usage from only this set of folders and organizations should be included in the budget.
If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.
*/
  ResourceAncestors?: Array<string>;

  /*
A set of subaccounts of the form billingAccounts/{account_id},
specifying that usage from only this set of subaccounts should
be included in the budget. If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.
--Note:-- If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
*/
  Subaccounts?: Array<string>;

  /*
Optional. If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
--Note:-- If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.
*/
  CreditTypes?: Array<string>;

  /*
Specifies to track usage from any start date (required) to any end date (optional).
This time period is static, it does not recur.
Exactly one of `calendar_period`, `custom_period` must be provided.
Structure is documented below.
*/
  CustomPeriod?: BudgetBudgetFilterCustomPeriod;

  /*
A single label and value pair specifying that usage from only
this set of labeled resources should be included in the budget.
*/
  Labels?: Map<string, string>;

  /*
A set of projects of the form projects/{project_number},
specifying that usage from only this set of projects should be
included in the budget. If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.
*/
  Projects?: Array<string>;

  /*
A CalendarPeriod represents the abstract concept of a recurring time period that has a
canonical start. Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).
Exactly one of `calendar_period`, `custom_period` must be provided.
Possible values are: `MONTH`, `QUARTER`, `YEAR`, `CALENDAR_PERIOD_UNSPECIFIED`.
*/
  CalendarPeriod?: string;

  /*
Specifies how credits should be treated when determining spend
for threshold calculations.
Default value is `INCLUDE_ALL_CREDITS`.
Possible values are: `INCLUDE_ALL_CREDITS`, `EXCLUDE_ALL_CREDITS`, `INCLUDE_SPECIFIED_CREDITS`.
*/
  CreditTypesTreatment?: string;

  /*
A set of services of the form services/{service_id},
specifying that usage from only this set of services should be
included in the budget. If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.
*/
  Services?: Array<string>;
}
