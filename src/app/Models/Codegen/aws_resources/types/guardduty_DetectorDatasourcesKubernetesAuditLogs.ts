import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface guardduty_DetectorDatasourcesKubernetesAuditLogs {
  /*
If true, enables Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).
Defaults to `true`.
*/
  enable?: boolean;
}

export function guardduty_DetectorDatasourcesKubernetesAuditLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "If true, enables Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).\nDefaults to `true`.",
      [],
      true,
      false,
    ),
  ];
}
