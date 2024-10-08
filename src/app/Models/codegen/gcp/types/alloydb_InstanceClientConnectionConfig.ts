import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  alloydb_InstanceClientConnectionConfigSslConfig,
  alloydb_InstanceClientConnectionConfigSslConfig_GetTypes,
} from "./alloydb_InstanceClientConnectionConfigSslConfig";

export interface alloydb_InstanceClientConnectionConfig {
  /*
SSL config option for this instance.
Structure is documented below.
*/
  sslConfig?: alloydb_InstanceClientConnectionConfigSslConfig;

  // Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
  requireConnectors?: boolean;
}

export function alloydb_InstanceClientConnectionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sslConfig",
      "SSL config option for this instance.\nStructure is documented below.",
      () => alloydb_InstanceClientConnectionConfigSslConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireConnectors",
      "Configuration to enforce connectors only (ex: AuthProxy) connections to the database.",
      () => [],
      false,
      false,
    ),
  ];
}
