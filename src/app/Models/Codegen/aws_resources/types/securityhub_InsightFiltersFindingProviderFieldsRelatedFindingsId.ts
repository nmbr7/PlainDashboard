import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsId {
  // A date range value for the date filter, provided as an Integer.
  value?: string;

  // The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.
  comparison?: string;
}

export function securityhub_InsightFiltersFindingProviderFieldsRelatedFindingsId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "A date range value for the date filter, provided as an Integer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comparison",
      "The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.",
      [],
      true,
      false,
    ),
  ];
}
