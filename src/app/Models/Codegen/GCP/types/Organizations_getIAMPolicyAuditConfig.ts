import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_getIAMPolicyAuditConfigAuditLogConfig,
  organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes,
} from "./organizations_getIAMPolicyAuditConfigAuditLogConfig";

export interface organizations_getIAMPolicyAuditConfig {
  // Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
  service?: string;

  // A nested block that defines the operations you'd like to log.
  auditLogConfigs?: Array<organizations_getIAMPolicyAuditConfigAuditLogConfig>;
}

export function organizations_getIAMPolicyAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "service",
      "Defines a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "auditLogConfigs",
      "A nested block that defines the operations you'd like to log.",
      organizations_getIAMPolicyAuditConfigAuditLogConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
