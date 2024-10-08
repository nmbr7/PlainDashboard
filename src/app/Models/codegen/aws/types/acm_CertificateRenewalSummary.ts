import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acm_CertificateRenewalSummary {
  // The status of ACM's managed renewal of the certificate
  renewalStatus?: string;

  // The reason that a renewal request was unsuccessful or is pending
  renewalStatusReason?: string;

  //
  updatedAt?: string;
}

export function acm_CertificateRenewalSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "updatedAt",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "renewalStatus",
      "The status of ACM's managed renewal of the certificate",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "renewalStatusReason",
      "The reason that a renewal request was unsuccessful or is pending",
      () => [],
      false,
      false,
    ),
  ];
}
