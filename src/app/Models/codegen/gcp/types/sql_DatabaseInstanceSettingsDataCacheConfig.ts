import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_DatabaseInstanceSettingsDataCacheConfig {
  // Whether data cache is enabled for the instance. Defaults to `false`. Can be used with MYSQL and PostgreSQL only.
  dataCacheEnabled?: boolean;
}

export function sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dataCacheEnabled",
      "Whether data cache is enabled for the instance. Defaults to `false`. Can be used with MYSQL and PostgreSQL only.",
      () => [],
      false,
      false,
    ),
  ];
}
