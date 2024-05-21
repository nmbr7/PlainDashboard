import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface assuredworkloads_WorkloadEkmProvisioningResponse {
  // Indicates Ekm provisioning error if any. Possible values: EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED, UNSPECIFIED_ERROR, GOOGLE_SERVER_ERROR, EXTERNAL_USER_ERROR, EXTERNAL_PARTNER_ERROR, TIMEOUT_ERROR
  ekmProvisioningErrorDomain?: string;

  // Detailed error message if Ekm provisioning fails Possible values: EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED, INVALID_SERVICE_ACCOUNT, MISSING_METRICS_SCOPE_ADMIN_PERMISSION, MISSING_EKM_CONNECTION_ADMIN_PERMISSION
  ekmProvisioningErrorMapping?: string;

  // Indicates Ekm enrollment Provisioning of a given workload. Possible values: EKM_PROVISIONING_STATE_UNSPECIFIED, EKM_PROVISIONING_STATE_PENDING, EKM_PROVISIONING_STATE_FAILED, EKM_PROVISIONING_STATE_COMPLETED
  ekmProvisioningState?: string;
}

export function assuredworkloads_WorkloadEkmProvisioningResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ekmProvisioningErrorDomain",
      "Indicates Ekm provisioning error if any. Possible values: EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED, UNSPECIFIED_ERROR, GOOGLE_SERVER_ERROR, EXTERNAL_USER_ERROR, EXTERNAL_PARTNER_ERROR, TIMEOUT_ERROR",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ekmProvisioningErrorMapping",
      "Detailed error message if Ekm provisioning fails Possible values: EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED, INVALID_SERVICE_ACCOUNT, MISSING_METRICS_SCOPE_ADMIN_PERMISSION, MISSING_EKM_CONNECTION_ADMIN_PERMISSION",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ekmProvisioningState",
      "Indicates Ekm enrollment Provisioning of a given workload. Possible values: EKM_PROVISIONING_STATE_UNSPECIFIED, EKM_PROVISIONING_STATE_PENDING, EKM_PROVISIONING_STATE_FAILED, EKM_PROVISIONING_STATE_COMPLETED",
      [],
      false,
      false,
    ),
  ];
}
