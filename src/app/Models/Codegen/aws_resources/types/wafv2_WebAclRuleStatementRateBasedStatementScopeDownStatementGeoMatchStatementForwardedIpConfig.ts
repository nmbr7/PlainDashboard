import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig {
  // Match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.
  fallbackBehavior?: string;

  // Name of the HTTP header to use for the IP address.
  headerName?: string;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementForwardedIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fallbackBehavior",
      "Match status to assign to the web request if the request doesn't have a valid IP address in the specified position. Valid values include: `MATCH` or `NO_MATCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "Name of the HTTP header to use for the IP address.",
      [],
      true,
      false,
    ),
  ];
}
