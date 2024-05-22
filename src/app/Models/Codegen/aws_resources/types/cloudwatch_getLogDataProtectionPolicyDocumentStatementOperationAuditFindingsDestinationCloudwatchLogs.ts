import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs {
  // Name of the CloudWatch Log Group to send findings to.
  logGroup?: string;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroup",
      "Name of the CloudWatch Log Group to send findings to.",
      [],
      true,
      false,
    ),
  ];
}
