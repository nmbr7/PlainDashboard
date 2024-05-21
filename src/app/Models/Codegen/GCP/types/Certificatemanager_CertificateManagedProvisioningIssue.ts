import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificatemanager_CertificateManagedProvisioningIssue {
  /*
(Output)
Human readable explanation for reaching the state. Provided to help
address the configuration issues.
Not guaranteed to be stable. For programmatic access use `failure_reason` field.
*/
  details?: string;

  /*
(Output)
Reason for provisioning failures.
*/
  reason?: string;
}

export function certificatemanager_CertificateManagedProvisioningIssue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "details",
      "(Output)\nHuman readable explanation for reaching the state. Provided to help\naddress the configuration issues.\nNot guaranteed to be stable. For programmatic access use `failure_reason` field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "(Output)\nReason for provisioning failures.",
      [],
      false,
      false,
    ),
  ];
}
