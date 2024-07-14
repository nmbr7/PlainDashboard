import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration,
  s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration";
import {
  s3_BucketReplicationConfigRuleDestinationMetrics,
  s3_BucketReplicationConfigRuleDestinationMetrics_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationMetrics";
import {
  s3_BucketReplicationConfigRuleDestinationReplicationTime,
  s3_BucketReplicationConfigRuleDestinationReplicationTime_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationReplicationTime";
import {
  s3_BucketReplicationConfigRuleDestinationAccessControlTranslation,
  s3_BucketReplicationConfigRuleDestinationAccessControlTranslation_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationAccessControlTranslation";

export interface s3_BucketReplicationConfigRuleDestination {
  // Configuration block that specifies replication metrics-related settings enabling replication metrics and events. See below.
  metrics?: s3_BucketReplicationConfigRuleDestinationMetrics;

  // Configuration block that specifies S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. See below. Replication Time Control must be used in conjunction with `metrics`.
  replicationTime?: s3_BucketReplicationConfigRuleDestinationReplicationTime;

  // The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.
  storageClass?: string;

  // Configuration block that specifies the overrides to use for object owners on replication. See below. Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object. Must be used in conjunction with `account` owner override configuration.
  accessControlTranslation?: s3_BucketReplicationConfigRuleDestinationAccessControlTranslation;

  // Account ID to specify the replica ownership. Must be used in conjunction with `access_control_translation` override configuration.
  account?: string;

  // ARN of the bucket where you want Amazon S3 to store the results.
  bucket?: string;

  // Configuration block that provides information about encryption. See below. If `source_selection_criteria` is specified, you must specify this element.
  encryptionConfiguration?: s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration;
}

export function s3_BucketReplicationConfigRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "ARN of the bucket where you want Amazon S3 to store the results.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfiguration",
      "Configuration block that provides information about encryption. See below. If `source_selection_criteria` is specified, you must specify this element.",
      s3_BucketReplicationConfigRuleDestinationEncryptionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metrics",
      "Configuration block that specifies replication metrics-related settings enabling replication metrics and events. See below.",
      s3_BucketReplicationConfigRuleDestinationMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "replicationTime",
      "Configuration block that specifies S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. See below. Replication Time Control must be used in conjunction with `metrics`.",
      s3_BucketReplicationConfigRuleDestinationReplicationTime_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "accessControlTranslation",
      "Configuration block that specifies the overrides to use for object owners on replication. See below. Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object. Must be used in conjunction with `account` owner override configuration.",
      s3_BucketReplicationConfigRuleDestinationAccessControlTranslation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "account",
      "Account ID to specify the replica ownership. Must be used in conjunction with `access_control_translation` override configuration.",
      [],
      false,
      false,
    ),
  ];
}
