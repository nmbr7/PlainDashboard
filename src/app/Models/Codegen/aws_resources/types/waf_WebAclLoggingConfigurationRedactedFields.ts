import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch,
  waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch_GetTypes,
} from "./waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch";

export interface waf_WebAclLoggingConfigurationRedactedFields {
  // Set of configuration blocks for fields to redact. Detailed below.
  fieldToMatches?: Array<waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch>;
}

export function waf_WebAclLoggingConfigurationRedactedFields_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fieldToMatches",
      "Set of configuration blocks for fields to redact. Detailed below.",
      waf_WebAclLoggingConfigurationRedactedFieldsFieldToMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
