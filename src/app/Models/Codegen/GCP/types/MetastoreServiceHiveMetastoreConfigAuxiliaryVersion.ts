export interface MetastoreServiceHiveMetastoreConfigAuxiliaryVersion {
  /*
A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.
If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
*/
  ConfigOverrides?: Map<string, string>;

  // The identifier for this object. Format specified above.
  Key?: string;

  // The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
  Version?: string;
}
