import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  beyondcorp_getAppConnectorPrincipalInfoServiceAccount,
  beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes,
} from "./beyondcorp_getAppConnectorPrincipalInfoServiceAccount";

export interface beyondcorp_getAppConnectorPrincipalInfo {
  // ServiceAccount represents a GCP service account.
  serviceAccounts?: Array<beyondcorp_getAppConnectorPrincipalInfoServiceAccount>;
}

export function beyondcorp_getAppConnectorPrincipalInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "serviceAccounts",
      "ServiceAccount represents a GCP service account.",
      beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes(),
      true,
      false,
    ),
  ];
}
