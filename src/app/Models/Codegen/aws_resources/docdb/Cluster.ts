import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ClusterArgs {
  // A DB subnet group to associate with this DB instance.
  dbSubnetGroupName?: string;

  // The storage type to associate with the DB cluster. Valid values: `standard`, `iopt1`.
  storageType?: string;

  /*
A list of EC2 Availability Zones that
instances in the DB cluster can be created in.
*/
  availabilityZones?: Array<string>;

  // List of DocumentDB Instances that are a part of this cluster
  clusterMembers?: Array<string>;

  // The database engine version. Updating this argument results in an outage.
  engineVersion?: string;

  // Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  skipFinalSnapshot?: boolean;

  /*
List of log types to export to cloudwatch. If omitted, no logs will be exported.
The following log types are supported: `audit`, `profiler`.
*/
  enabledCloudwatchLogsExports?: Array<string>;

  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
  kmsKeyId?: string;

  /*
Specifies whether any cluster modifications
are applied immediately, or during the next maintenance window. Default is
`false`.
*/
  applyImmediately?: boolean;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The days to retain backups for. Default `1`
  backupRetentionPeriod?: number;

  /*
The name of your final DB snapshot
when this DB cluster is deleted. If omitted, no final snapshot will be
made.
*/
  finalSnapshotIdentifier?: string;

  // The global cluster identifier specified on `aws.docdb.GlobalCluster`.
  globalClusterIdentifier?: string;

  /*
The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
*/
  preferredBackupWindow?: string;

  // A cluster parameter group to associate with the cluster.
  dbClusterParameterGroupName?: string;

  // A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
  deletionProtection?: boolean;

  // The port on which the DB accepts connections
  port?: number;

  // The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  preferredMaintenanceWindow?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false`.
  storageEncrypted?: boolean;

  /*
List of VPC security groups to associate
with the Cluster
*/
  vpcSecurityGroupIds?: Array<string>;

  // A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version.
  allowMajorVersionUpgrade?: boolean;

  // The cluster identifier. If omitted, the provider will assign a random, unique identifier.
  clusterIdentifier?: string;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  clusterIdentifierPrefix?: string;

  // The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid values: `docdb`.
  engine?: string;

  /*
Password for the master DB user. Note that this may
show up in logs, and it will be stored in the state file. Please refer to the DocumentDB Naming Constraints.
*/
  masterPassword?: string;

  // Username for the master DB user.
  masterUsername?: string;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Automated snapshots --should not-- be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.
  snapshotIdentifier?: string;
}
export class Cluster extends Resource {
  /*
Specifies whether any cluster modifications
are applied immediately, or during the next maintenance window. Default is
`false`.
*/
  public applyImmediately?: boolean;

  // A DB subnet group to associate with this DB instance.
  public dbSubnetGroupName?: string;

  // The DNS address of the DocumentDB instance
  public endpoint?: string;

  // Specifies whether the DB cluster is encrypted. The default is `false`.
  public storageEncrypted?: boolean;

  /*
List of VPC security groups to associate
with the Cluster
*/
  public vpcSecurityGroupIds?: Array<string>;

  // List of DocumentDB Instances that are a part of this cluster
  public clusterMembers?: Array<string>;

  /*
The name of your final DB snapshot
when this DB cluster is deleted. If omitted, no final snapshot will be
made.
*/
  public finalSnapshotIdentifier?: string;

  // The Route53 Hosted Zone ID of the endpoint
  public hostedZoneId?: string;

  /*
Password for the master DB user. Note that this may
show up in logs, and it will be stored in the state file. Please refer to the DocumentDB Naming Constraints.
*/
  public masterPassword?: string;

  // The days to retain backups for. Default `1`
  public backupRetentionPeriod?: number;

  // Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
  public clusterIdentifierPrefix?: string;

  // The DocumentDB Cluster Resource ID
  public clusterResourceId?: string;

  // The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30
  public preferredMaintenanceWindow?: string;

  // The cluster identifier. If omitted, the provider will assign a random, unique identifier.
  public clusterIdentifier?: string;

  // A cluster parameter group to associate with the cluster.
  public dbClusterParameterGroupName?: string;

  // A read-only endpoint for the DocumentDB cluster, automatically load-balanced across replicas
  public readerEndpoint?: string;

  // The storage type to associate with the DB cluster. Valid values: `standard`, `iopt1`.
  public storageType?: string;

  /*
A list of EC2 Availability Zones that
instances in the DB cluster can be created in.
*/
  public availabilityZones?: Array<string>;

  // A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
  public deletionProtection?: boolean;

  // The database engine version. Updating this argument results in an outage.
  public engineVersion?: string;

  // The port on which the DB accepts connections
  public port?: number;

  // Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Automated snapshots --should not-- be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.
  public snapshotIdentifier?: string;

  // A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version.
  public allowMajorVersionUpgrade?: boolean;

  /*
List of log types to export to cloudwatch. If omitted, no logs will be exported.
The following log types are supported: `audit`, `profiler`.
*/
  public enabledCloudwatchLogsExports?: Array<string>;

  // The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid values: `docdb`.
  public engine?: string;

  // The global cluster identifier specified on `aws.docdb.GlobalCluster`.
  public globalClusterIdentifier?: string;

  // Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
  public skipFinalSnapshot?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
  public kmsKeyId?: string;

  /*
The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00
*/
  public preferredBackupWindow?: string;

  // A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of cluster
  public arn?: string;

  // Username for the master DB user.
  public masterUsername?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any cluster modifications\nare applied immediately, or during the next maintenance window. Default is\n`false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "List of VPC security groups to associate\nwith the Cluster",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbSubnetGroupName",
        "A DB subnet group to associate with this DB instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid values: `docdb`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port on which the DB accepts connections",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier. If omitted, the provider will assign a random, unique identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUsername",
        "Username for the master DB user.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalClusterIdentifier",
        "The global cluster identifier specified on `aws.docdb.GlobalCluster`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowMajorVersionUpgrade",
        "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clusterMembers",
        "List of DocumentDB Instances that are a part of this cluster",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledCloudwatchLogsExports",
        "List of log types to export to cloudwatch. If omitted, no logs will be exported.\nThe following log types are supported: `audit`, `profiler`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "The name of your final DB snapshot\nwhen this DB cluster is deleted. If omitted, no final snapshot will be\nmade.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredBackupWindow",
        "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC\nDefault: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterParameterGroupName",
        "A cluster parameter group to associate with the cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterPassword",
        "Password for the master DB user. Note that this may\nshow up in logs, and it will be stored in the state file. Please refer to the DocumentDB Naming Constraints.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the DB cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEncrypted",
        "Specifies whether the DB cluster is encrypted. The default is `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotIdentifier",
        "Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Automated snapshots **should not** be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        "The storage type to associate with the DB cluster. Valid values: `standard`, `iopt1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "availabilityZones",
        "A list of EC2 Availability Zones that\ninstances in the DB cluster can be created in.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "The database engine version. Updating this argument results in an outage.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalSnapshot",
        "Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "backupRetentionPeriod",
        "The days to retain backups for. Default `1`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifierPrefix",
        "Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.",
        [],
        false,
        true,
      ),
    ];
  }
}
