import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface route53_getTrafficPolicyDocumentRulePrimary {
  // References to a rule.
  ruleReference?: string;

  // References to an endpoint.
  endpointReference?: string;

  // Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.
  evaluateTargetHealth?: boolean;

  // If you want to associate a health check with the endpoint or rule.
  healthCheck?: string;
}

export function route53_getTrafficPolicyDocumentRulePrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "evaluateTargetHealth",
      "Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "If you want to associate a health check with the endpoint or rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleReference",
      "References to a rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
      "References to an endpoint.",
      [],
      false,
      false,
    ),
  ];
}
