import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getDatabaseInstanceSettingActiveDirectoryConfig {
  // Domain name of the Active Directory for SQL Server (e.g., mydomain.com).
  domain?: string;
}

export function sql_getDatabaseInstanceSettingActiveDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "Domain name of the Active Directory for SQL Server (e.g., mydomain.com).",
      [],
      true,
      false,
    ),
  ];
}
