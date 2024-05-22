import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode {
  // Status codes in the response that indicate a failed login attempt.
  failureCodes?: Array<number>;

  // Status codes in the response that indicate a successful login attempt.
  successCodes?: Array<number>;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "failureCodes",
      "Status codes in the response that indicate a failed login attempt.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "successCodes",
      "Status codes in the response that indicate a successful login attempt.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
