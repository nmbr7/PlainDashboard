import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_DatabaseInstanceSettingsActiveDirectoryConfig {
  /*
The domain name for the active directory (e.g., mydomain.com).
Can only be used with SQL Server.
*/
  domain?: string;
}

export function sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "The domain name for the active directory (e.g., mydomain.com).\nCan only be used with SQL Server.",
      () => [],
      true,
      false,
    ),
  ];
}
