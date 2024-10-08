import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sql_DatabaseInstanceSettingsSqlServerAuditConfig,
  sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsSqlServerAuditConfig";
import {
  sql_DatabaseInstanceSettingsIpConfiguration,
  sql_DatabaseInstanceSettingsIpConfiguration_GetTypes,
} from "./sql_DatabaseInstanceSettingsIpConfiguration";
import {
  sql_DatabaseInstanceSettingsMaintenanceWindow,
  sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes,
} from "./sql_DatabaseInstanceSettingsMaintenanceWindow";
import {
  sql_DatabaseInstanceSettingsLocationPreference,
  sql_DatabaseInstanceSettingsLocationPreference_GetTypes,
} from "./sql_DatabaseInstanceSettingsLocationPreference";
import {
  sql_DatabaseInstanceSettingsBackupConfiguration,
  sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes,
} from "./sql_DatabaseInstanceSettingsBackupConfiguration";
import {
  sql_DatabaseInstanceSettingsDenyMaintenancePeriod,
  sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes,
} from "./sql_DatabaseInstanceSettingsDenyMaintenancePeriod";
import {
  sql_DatabaseInstanceSettingsActiveDirectoryConfig,
  sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsActiveDirectoryConfig";
import {
  sql_DatabaseInstanceSettingsAdvancedMachineFeatures,
  sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes,
} from "./sql_DatabaseInstanceSettingsAdvancedMachineFeatures";
import {
  sql_DatabaseInstanceSettingsInsightsConfig,
  sql_DatabaseInstanceSettingsInsightsConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsInsightsConfig";
import {
  sql_DatabaseInstanceSettingsDataCacheConfig,
  sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsDataCacheConfig";
import {
  sql_DatabaseInstanceSettingsDatabaseFlag,
  sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes,
} from "./sql_DatabaseInstanceSettingsDatabaseFlag";
import {
  sql_DatabaseInstanceSettingsPasswordValidationPolicy,
  sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes,
} from "./sql_DatabaseInstanceSettingsPasswordValidationPolicy";

export interface sql_DatabaseInstanceSettings {
  // The name of server instance collation.
  collation?: string;

  // Data cache configurations.
  dataCacheConfig?: sql_DatabaseInstanceSettingsDataCacheConfig;

  //
  ipConfiguration?: sql_DatabaseInstanceSettingsIpConfiguration;

  // A set of key/value user label pairs to assign to the instance.
  userLabels?: Map<string, string>;

  /*
The availability type of the Cloud SQL
instance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that
`settings.backup_configuration.enabled` is set to `true`.
For MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.
For Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`
is set to `true`. Defaults to `ZONAL`.
*/
  availabilityType?: string;

  // Specifies if connections must use Cloud SQL connectors.
  connectorEnforcement?: string;

  //
  databaseFlags?: Array<sql_DatabaseInstanceSettingsDatabaseFlag>;

  //
  passwordValidationPolicy?: sql_DatabaseInstanceSettingsPasswordValidationPolicy;

  // Pricing plan for this instance, can only be `PER_USE`.
  pricingPlan?: string;

  /*
The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)
for more details and supported versions. Postgres supports only shared-core machine types,
and custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.
*/
  tier?: string;

  // The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  diskAutoresizeLimit?: number;

  // Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
  maintenanceWindow?: sql_DatabaseInstanceSettingsMaintenanceWindow;

  // Enables auto-resizing of the storage size. Defaults to `true`.
  diskAutoresize?: boolean;

  //
  backupConfiguration?: sql_DatabaseInstanceSettingsBackupConfiguration;

  //
  denyMaintenancePeriod?: sql_DatabaseInstanceSettingsDenyMaintenancePeriod;

  // The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
  diskSize?: number;

  //
  activeDirectoryConfig?: sql_DatabaseInstanceSettingsActiveDirectoryConfig;

  //
  locationPreference?: sql_DatabaseInstanceSettingsLocationPreference;

  // The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  timeZone?: string;

  // The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.
  edition?: string;

  /*
This specifies when the instance should be
active. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.
*/
  activationPolicy?: string;

  //
  advancedMachineFeatures?: sql_DatabaseInstanceSettingsAdvancedMachineFeatures;

  // Configuration to protect against accidental instance deletion.
  deletionProtectionEnabled?: boolean;

  // The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.
  diskType?: string;

  // Configuration of Query Insights.
  insightsConfig?: sql_DatabaseInstanceSettingsInsightsConfig;

  //
  sqlServerAuditConfig?: sql_DatabaseInstanceSettingsSqlServerAuditConfig;

  // Used to make sure changes to the settings block are atomic.
  version?: number;
}

export function sql_DatabaseInstanceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "locationPreference",
      "",
      () => sql_DatabaseInstanceSettingsLocationPreference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deletionProtectionEnabled",
      "Configuration to protect against accidental instance deletion.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "insightsConfig",
      "Configuration of Query Insights.",
      () => sql_DatabaseInstanceSettingsInsightsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipConfiguration",
      "",
      () => sql_DatabaseInstanceSettingsIpConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "passwordValidationPolicy",
      "",
      () => sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "denyMaintenancePeriod",
      "",
      () => sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataCacheConfig",
      "Data cache configurations.",
      () => sql_DatabaseInstanceSettingsDataCacheConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "diskAutoresize",
      "Enables auto-resizing of the storage size. Defaults to `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "edition",
      "The edition of the instance, can be `ENTERPRISE` or `ENTERPRISE_PLUS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collation",
      "The name of server instance collation.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "backupConfiguration",
      "",
      () => sql_DatabaseInstanceSettingsBackupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedMachineFeatures",
      "",
      () => sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityType",
      "The availability type of the Cloud SQL\ninstance, high availability (`REGIONAL`) or single zone (`ZONAL`).' For all instances, ensure that\n`settings.backup_configuration.enabled` is set to `true`.\nFor MySQL instances, ensure that `settings.backup_configuration.binary_log_enabled` is set to `true`.\nFor Postgres and SQL Server instances, ensure that `settings.backup_configuration.point_in_time_recovery_enabled`\nis set to `true`. Defaults to `ZONAL`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorEnforcement",
      "Specifies if connections must use Cloud SQL connectors.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "userLabels",
      "A set of key/value user label pairs to assign to the instance.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pricingPlan",
      "Pricing plan for this instance, can only be `PER_USE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskAutoresizeLimit",
      "The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "activeDirectoryConfig",
      "",
      () => sql_DatabaseInstanceSettingsActiveDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "activationPolicy",
      "This specifies when the instance should be\nactive. Can be either `ALWAYS`, `NEVER` or `ON_DEMAND`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "databaseFlags",
      "",
      () => sql_DatabaseInstanceSettingsDatabaseFlag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "The type of data disk: PD_SSD or PD_HDD. Defaults to `PD_SSD`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqlServerAuditConfig",
      "",
      () => sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tier",
      "The machine type to use. See [tiers](https://cloud.google.com/sql/docs/admin-api/v1beta4/tiers)\nfor more details and supported versions. Postgres supports only shared-core machine types,\nand custom machine types such as `db-custom-2-13312`. See the [Custom Machine Type Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) to learn about specifying custom machine types.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maintenanceWindow",
      "Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.",
      () => sql_DatabaseInstanceSettingsMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSize",
      "The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "version",
      "Used to make sure changes to the settings block are atomic.",
      () => [],
      false,
      false,
    ),
  ];
}
