import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticache_ReplicationGroupLogDeliveryConfiguration,
  elasticache_ReplicationGroupLogDeliveryConfiguration_GetTypes,
} from "../types/elasticache_ReplicationGroupLogDeliveryConfiguration";

export interface ReplicationGroupArgs {
  // IDs of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.
  securityGroupIds?: Array<string>;

  // Password used to access a password protected server. Can be specified only if `transit_encryption_enabled = true`.
  authToken?: string;

  // Specifies the weekly time range for when maintenance on the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`
  maintenanceWindow?: string;

  // The IP versions for cache cluster connections. Valid values are `ipv4`, `ipv6` or `dual_stack`.
  networkType?: string;

  // Instance class to be used. See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). Required unless `global_replication_group_id` is set. Cannot be set if `global_replication_group_id` is set.
  nodeType?: string;

  // Number of cache clusters (primary and replicas) this replication group will have. If Multi-AZ is enabled, the value of this parameter must be at least 2. Updates will occur before other modifications. Conflicts with `num_node_groups`. Defaults to `1`.
  numCacheClusters?: number;

  /*
Replication group identifier. This parameter is stored as a lowercase string.

The following arguments are optional:
*/
  replicationGroupId?: string;

  // User-created description for the replication group. Must not be empty.
  description?: string;

  // Name of the cache engine to be used for the clusters in this replication group. The only valid value is `redis`.
  engine?: string;

  // The ARN of the key that you wish to use if encrypting at rest. If not supplied, uses service managed encryption. Can be specified only if `at_rest_encryption_enabled = true`.
  kmsKeyId?: string;

  // Strategy to use when updating the `auth_token`. Valid values are `SET`, `ROTATE`, and `DELETE`. Defaults to `ROTATE`.
  authTokenUpdateStrategy?: string;

  /*
Number of replica nodes in each node group.
Changing this number will trigger a resizing operation before other settings modifications.
Valid values are 0 to 5.
*/
  replicasPerNodeGroup?: number;

  // List of ARNs that identify Redis RDB snapshot files stored in Amazon S3. The names object names cannot contain any commas.
  snapshotArns?: Array<string>;

  // Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of `snapshot_retention_limit` is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes
  snapshotRetentionLimit?: number;

  // ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`
  notificationTopicArn?: string;

  /*
Number of node groups (shards) for this Redis replication group.
Changing this number will trigger a resizing operation before other settings modifications.
*/
  numNodeGroups?: number;

  // Names of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.
  securityGroupNames?: Array<string>;

  // Whether to enable encryption in transit.
  transitEncryptionEnabled?: boolean;

  // Whether to enable encryption at rest.
  atRestEncryptionEnabled?: boolean;

  // Specifies whether to enable Multi-AZ Support for the replication group. If `true`, `automatic_failover_enabled` must also be enabled. Defaults to `false`.
  multiAzEnabled?: boolean;

  // Name of the cache subnet group to be used for the replication group.
  subnetGroupName?: string;

  // Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. The minimum snapshot window is a 60 minute period. Example: `05:00-09:00`
  snapshotWindow?: string;

  // Map of tags to assign to the resource. Adding tags to this resource will add or overwrite any existing tags on the clusters in the replication group and not to the group itself. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies whether any modifications are applied immediately, or during the next maintenance window. Default is `false`.
  applyImmediately?: boolean;

  // Specifies whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails. If enabled, `num_cache_clusters` must be greater than 1. Must be enabled for Redis (cluster mode enabled) replication groups. Defaults to `false`.
  automaticFailoverEnabled?: boolean;

  // Name of a snapshot from which to restore data into the new node group. Changing the `snapshot_name` forces a new resource.
  snapshotName?: string;

  // List of EC2 availability zones in which the replication group's cache clusters will be created. The order of the availability zones in the list is considered. The first item in the list will be the primary node. Ignored when updating.
  preferredCacheClusterAzs?: Array<string>;

  // User Group ID to associate with the replication group. Only a maximum of one (1) user group ID is valid. --NOTE:-- This argument _is_ a set because the AWS specification allows for multiple IDs. However, in practice, AWS only allows a maximum size of one.
  userGroupIds?: Array<string>;

  /*
Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.
Only supported for engine type `"redis"` and if the engine version is 6 or higher.
Defaults to `true`.
*/
  autoMinorVersionUpgrade?: boolean;

  // Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to `true` when using r6gd nodes.
  dataTieringEnabled?: boolean;

  // The ID of the global replication group to which this replication group should belong. If this parameter is specified, the replication group is added to the specified global replication group as a secondary replication group; otherwise, the replication group is not part of any global replication group. If `global_replication_group_id` is set, the `num_node_groups` parameter cannot be set.
  globalReplicationGroupId?: string;

  // Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See Log Delivery Configuration below for more details.
  logDeliveryConfigurations?: Array<elasticache_ReplicationGroupLogDeliveryConfiguration>;

  // Name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. To enable "cluster mode", i.e., data sharding, use a parameter group that has the parameter `cluster-enabled` set to true.
  parameterGroupName?: string;

  // Port number on which each of the cache nodes will accept connections. For Memcache the default is 11211, and for Redis the default port is 6379.
  port?: number;

  /*
Version number of the cache engine to be used for the cache clusters in this replication group.
If the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
If the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
Otherwise, specify the full version desired, e.g., `5.0.6`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.
*/
  engineVersion?: string;

  // The name of your final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made.
  finalSnapshotIdentifier?: string;

  // The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.
  ipDiscovery?: string;
}
export class ReplicationGroup extends Resource {
  // Specifies whether any modifications are applied immediately, or during the next maintenance window. Default is `false`.
  public applyImmediately?: boolean;

  // The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.
  public ipDiscovery?: string;

  // User-created description for the replication group. Must not be empty.
  public description?: string;

  // Identifiers of all the nodes that are part of this replication group.
  public memberClusters?: Array<string>;

  // ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`
  public notificationTopicArn?: string;

  // Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. The minimum snapshot window is a 60 minute period. Example: `05:00-09:00`
  public snapshotWindow?: string;

  // Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See Log Delivery Configuration below for more details.
  public logDeliveryConfigurations?: Array<elasticache_ReplicationGroupLogDeliveryConfiguration>;

  // Instance class to be used. See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). Required unless `global_replication_group_id` is set. Cannot be set if `global_replication_group_id` is set.
  public nodeType?: string;

  // List of ARNs that identify Redis RDB snapshot files stored in Amazon S3. The names object names cannot contain any commas.
  public snapshotArns?: Array<string>;

  // Password used to access a password protected server. Can be specified only if `transit_encryption_enabled = true`.
  public authToken?: string;

  // Name of the cache engine to be used for the clusters in this replication group. The only valid value is `redis`.
  public engine?: string;

  /*
Version number of the cache engine to be used for the cache clusters in this replication group.
If the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.
If the version is 6, the major and minor version can be set, e.g., `6.2`,
or the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.
Otherwise, specify the full version desired, e.g., `5.0.6`.
The actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.
*/
  public engineVersion?: string;

  // The name of your final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made.
  public finalSnapshotIdentifier?: string;

  /*
Number of node groups (shards) for this Redis replication group.
Changing this number will trigger a resizing operation before other settings modifications.
*/
  public numNodeGroups?: number;

  // List of EC2 availability zones in which the replication group's cache clusters will be created. The order of the availability zones in the list is considered. The first item in the list will be the primary node. Ignored when updating.
  public preferredCacheClusterAzs?: Array<string>;

  /*
Number of replica nodes in each node group.
Changing this number will trigger a resizing operation before other settings modifications.
Valid values are 0 to 5.
*/
  public replicasPerNodeGroup?: number;

  // Name of the cache subnet group to be used for the replication group.
  public subnetGroupName?: string;

  // Whether to enable encryption at rest.
  public atRestEncryptionEnabled?: boolean;

  /*
Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.
Only supported for engine type `"redis"` and if the engine version is 6 or higher.
Defaults to `true`.
*/
  public autoMinorVersionUpgrade?: boolean;

  // Indicates if cluster mode is enabled.
  public clusterEnabled?: boolean;

  // Address of the replication group configuration endpoint when cluster mode is enabled.
  public configurationEndpointAddress?: string;

  // Specifies the weekly time range for when maintenance on the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`
  public maintenanceWindow?: string;

  // Specifies whether to enable Multi-AZ Support for the replication group. If `true`, `automatic_failover_enabled` must also be enabled. Defaults to `false`.
  public multiAzEnabled?: boolean;

  // Name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. To enable "cluster mode", i.e., data sharding, use a parameter group that has the parameter `cluster-enabled` set to true.
  public parameterGroupName?: string;

  /*
Replication group identifier. This parameter is stored as a lowercase string.

The following arguments are optional:
*/
  public replicationGroupId?: string;

  // Names of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.
  public securityGroupNames?: Array<string>;

  // Whether to enable encryption in transit.
  public transitEncryptionEnabled?: boolean;

  // ARN of the created ElastiCache Replication Group.
  public arn?: string;

  // Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to `true` when using r6gd nodes.
  public dataTieringEnabled?: boolean;

  // Because ElastiCache pulls the latest minor or patch for a version, this attribute returns the running version of the cache engine.
  public engineVersionActual?: string;

  // The IP versions for cache cluster connections. Valid values are `ipv4`, `ipv6` or `dual_stack`.
  public networkType?: string;

  // Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of `snapshot_retention_limit` is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes
  public snapshotRetentionLimit?: number;

  // Map of tags to assign to the resource. Adding tags to this resource will add or overwrite any existing tags on the clusters in the replication group and not to the group itself. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Strategy to use when updating the `auth_token`. Valid values are `SET`, `ROTATE`, and `DELETE`. Defaults to `ROTATE`.
  public authTokenUpdateStrategy?: string;

  // Specifies whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails. If enabled, `num_cache_clusters` must be greater than 1. Must be enabled for Redis (cluster mode enabled) replication groups. Defaults to `false`.
  public automaticFailoverEnabled?: boolean;

  // The ARN of the key that you wish to use if encrypting at rest. If not supplied, uses service managed encryption. Can be specified only if `at_rest_encryption_enabled = true`.
  public kmsKeyId?: string;

  // Number of cache clusters (primary and replicas) this replication group will have. If Multi-AZ is enabled, the value of this parameter must be at least 2. Updates will occur before other modifications. Conflicts with `num_node_groups`. Defaults to `1`.
  public numCacheClusters?: number;

  // User Group ID to associate with the replication group. Only a maximum of one (1) user group ID is valid. --NOTE:-- This argument _is_ a set because the AWS specification allows for multiple IDs. However, in practice, AWS only allows a maximum size of one.
  public userGroupIds?: Array<string>;

  // The ID of the global replication group to which this replication group should belong. If this parameter is specified, the replication group is added to the specified global replication group as a secondary replication group; otherwise, the replication group is not part of any global replication group. If `global_replication_group_id` is set, the `num_node_groups` parameter cannot be set.
  public globalReplicationGroupId?: string;

  // Port number on which each of the cache nodes will accept connections. For Memcache the default is 11211, and for Redis the default port is 6379.
  public port?: number;

  // (Redis only) Address of the endpoint for the primary node in the replication group, if the cluster mode is disabled.
  public primaryEndpointAddress?: string;

  // (Redis only) Address of the endpoint for the reader node in the replication group, if the cluster mode is disabled.
  public readerEndpointAddress?: string;

  // IDs of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.
  public securityGroupIds?: Array<string>;

  // Name of a snapshot from which to restore data into the new node group. Changing the `snapshot_name` forces a new resource.
  public snapshotName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "replicasPerNodeGroup",
        "Number of replica nodes in each node group.\nChanging this number will trigger a resizing operation before other settings modifications.\nValid values are 0 to 5.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "snapshotRetentionLimit",
        "Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of `snapshot_retention_limit` is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "The name of your final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numNodeGroups",
        "Number of node groups (shards) for this Redis replication group.\nChanging this number will trigger a resizing operation before other settings modifications.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotName",
        "Name of a snapshot from which to restore data into the new node group. Changing the `snapshot_name` forces a new resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalReplicationGroupId",
        "The ID of the global replication group to which this replication group should belong. If this parameter is specified, the replication group is added to the specified global replication group as a secondary replication group; otherwise, the replication group is not part of any global replication group. If `global_replication_group_id` is set, the `num_node_groups` parameter cannot be set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipDiscovery",
        "The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeType",
        "Instance class to be used. See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). Required unless `global_replication_group_id` is set. Cannot be set if `global_replication_group_id` is set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "Name of the cache engine to be used for the clusters in this replication group. The only valid value is `redis`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "snapshotArns",
        "List of ARNs that identify Redis RDB snapshot files stored in Amazon S3. The names object names cannot contain any commas.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupNames",
        "Names of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiAzEnabled",
        "Specifies whether to enable Multi-AZ Support for the replication group. If `true`, `automatic_failover_enabled` must also be enabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logDeliveryConfigurations",
        "Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See Log Delivery Configuration below for more details.",
        elasticache_ReplicationGroupLogDeliveryConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "IDs of one or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numCacheClusters",
        "Number of cache clusters (primary and replicas) this replication group will have. If Multi-AZ is enabled, the value of this parameter must be at least 2. Updates will occur before other modifications. Conflicts with `num_node_groups`. Defaults to `1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetGroupName",
        "Name of the cache subnet group to be used for the replication group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. Adding tags to this resource will add or overwrite any existing tags on the clusters in the replication group and not to the group itself. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "userGroupIds",
        "User Group ID to associate with the replication group. Only a maximum of one (1) user group ID is valid. **NOTE:** This argument _is_ a set because the AWS specification allows for multiple IDs. However, in practice, AWS only allows a maximum size of one.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maintenanceWindow",
        "Specifies the weekly time range for when maintenance on the cache cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:05:00-sun:09:00`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN of the key that you wish to use if encrypting at rest. If not supplied, uses service managed encryption. Can be specified only if `at_rest_encryption_enabled = true`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authTokenUpdateStrategy",
        "Strategy to use when updating the `auth_token`. Valid values are `SET`, `ROTATE`, and `DELETE`. Defaults to `ROTATE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationTopicArn",
        "ARN of an SNS topic to send ElastiCache notifications to. Example: `arn:aws:sns:us-east-1:012345678999:my_sns_topic`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "atRestEncryptionEnabled",
        "Whether to enable encryption at rest.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any modifications are applied immediately, or during the next maintenance window. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "preferredCacheClusterAzs",
        "List of EC2 availability zones in which the replication group's cache clusters will be created. The order of the availability zones in the list is considered. The first item in the list will be the primary node. Ignored when updating.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "dataTieringEnabled",
        "Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to `true` when using r6gd nodes.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parameterGroupName",
        'Name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. To enable "cluster mode", i.e., data sharding, use a parameter group that has the parameter `cluster-enabled` set to true.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port number on which each of the cache nodes will accept connections. For Memcache the default is 11211, and for Redis the default port is 6379.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authToken",
        "Password used to access a password protected server. Can be specified only if `transit_encryption_enabled = true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationGroupId",
        "Replication group identifier. This parameter is stored as a lowercase string.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkType",
        "The IP versions for cache cluster connections. Valid values are `ipv4`, `ipv6` or `dual_stack`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-created description for the replication group. Must not be empty.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "transitEncryptionEnabled",
        "Whether to enable encryption in transit.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotWindow",
        "Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. The minimum snapshot window is a 60 minute period. Example: `05:00-09:00`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "automaticFailoverEnabled",
        "Specifies whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails. If enabled, `num_cache_clusters` must be greater than 1. Must be enabled for Redis (cluster mode enabled) replication groups. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        'Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window.\nOnly supported for engine type `"redis"` and if the engine version is 6 or higher.\nDefaults to `true`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "Version number of the cache engine to be used for the cache clusters in this replication group.\nIf the version is 7 or higher, the major and minor version should be set, e.g., `7.2`.\nIf the version is 6, the major and minor version can be set, e.g., `6.2`,\nor the minor version can be unspecified which will use the latest version at creation time, e.g., `6.x`.\nOtherwise, specify the full version desired, e.g., `5.0.6`.\nThe actual engine version used is returned in the attribute `engine_version_actual`, see Attribute Reference below.",
        [],
        false,
        false,
      ),
    ];
  }
}
