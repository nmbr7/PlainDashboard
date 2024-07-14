import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow {
  // The status of the investigation into the finding. The allowed values are the following `NEW`, `NOTIFIED`, `RESOLVED` and `SUPPRESSED`.
  status?: string;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdateWorkflow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the investigation into the finding. The allowed values are the following `NEW`, `NOTIFIED`, `RESOLVED` and `SUPPRESSED`.",
      [],
      false,
      false,
    ),
  ];
}
