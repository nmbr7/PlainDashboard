import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions,
  elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes,
} from "./elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions";

export interface elasticsearch_DomainAdvancedSecurityOptions {
  // Whether advanced security is enabled.
  enabled?: boolean;

  // Whether the internal user database is enabled. If not set, defaults to `false` by the AWS API.
  internalUserDatabaseEnabled?: boolean;

  // Configuration block for the main user. Detailed below.
  masterUserOptions?: elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions;
}

export function elasticsearch_DomainAdvancedSecurityOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether advanced security is enabled.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "internalUserDatabaseEnabled",
      "Whether the internal user database is enabled. If not set, defaults to `false` by the AWS API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "masterUserOptions",
      "Configuration block for the main user. Detailed below.",
      elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
