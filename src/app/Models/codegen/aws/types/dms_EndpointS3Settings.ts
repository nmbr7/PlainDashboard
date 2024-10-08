import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_EndpointS3Settings {
  // Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. Default is `60`.
  cdcMaxBatchInterval?: number;

  // Folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later.
  cdcPath?: string;

  // String to use for all columns not included in the supplemental log.
  csvNoSupValue?: string;

  // ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`.
  serverSideEncryptionKmsKeyId?: string;

  // Whether to use `csv_no_sup_value` for columns not included in the supplemental log.
  useCsvNoSupValue?: boolean;

  // Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`. Default is `csv`.
  dataFormat?: string;

  // Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. Default is `YYYYMMDD`.
  datePartitionSequence?: string;

  // Maximum size in bytes of an encoded dictionary page of a column. Default is `1048576` (1 MiB).
  dictPageSizeLimit?: number;

  // Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. Default is `1048576` (1 GB).
  maxFileSize?: number;

  // Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`.
  parquetTimestampInMillisecond?: boolean;

  // S3 bucket name.
  bucketName?: string;

  // Set to compress target files. Default is `NONE`. Valid values are `GZIP` and `NONE`.
  compressionType?: string;

  // Whether to enable statistics for Parquet pages and row groups. Default is `true`.
  enableStatistics?: boolean;

  // Whether to integrate AWS Glue Data Catalog with an Amazon S3 target. See [Using AWS Glue Data Catalog with an Amazon S3 target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.GlueCatalog) for more information. Default is `false`.
  glueCatalogGeneration?: boolean;

  // Version of the .parquet file format. Default is `parquet-1-0`. Valid values are `parquet-1-0` and `parquet-2-0`.
  parquetVersion?: string;

  // When set to true, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to true, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time. When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`.
  useTaskStartTimeForFullLoadTimestamp?: boolean;

  // S3 object prefix.
  bucketFolder?: string;

  // Number of rows in a row group. Default is `10000`.
  rowGroupLength?: number;

  // Column to add with timestamp information to the endpoint data for an Amazon S3 target.
  timestampColumnName?: string;

  // For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`.
  rfc4180?: boolean;

  // Minimum file size condition as defined in kilobytes to output a file to Amazon S3. Default is `32000`. --NOTE:-- Previously, this setting was measured in megabytes but now represents kilobytes. Update configurations accordingly.
  cdcMinFileSize?: number;

  // String to as null when writing to the target.
  csvNullValue?: string;

  // Delimiter used to separate rows in the source files. Default is `\n`.
  csvRowDelimiter?: string;

  // Partition S3 bucket folders based on transaction commit dates. Default is `false`.
  datePartitionEnabled?: boolean;

  // Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. Default is `SSE_S3`.
  encryptionMode?: string;

  // When this value is set to `1`, DMS ignores the first row header in a .csv file. Default is `0`.
  ignoreHeaderRows?: number;

  // Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`.
  includeOpForFullLoad?: boolean;

  // Whether to write insert operations to .csv or .parquet output files. Default is `false`.
  cdcInsertsOnly?: boolean;

  // ARN of the IAM Role with permissions to read from or write to the S3 Bucket.
  serviceAccessRoleArn?: string;

  // Whether to add column name information to the .csv output file. Default is `false`.
  addColumnName?: boolean;

  // Whether to write insert and update operations to .csv or .parquet output files. Default is `false`.
  cdcInsertsAndUpdates?: boolean;

  // Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`.
  preserveTransactions?: boolean;

  // Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`.
  cannedAclForObjects?: string;

  // Delimiter used to separate columns in the source files. Default is `,`.
  csvDelimiter?: string;

  // Size of one data page in bytes. Default is `1048576` (1 MiB).
  dataPageSize?: number;

  // Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. Default is `SLASH`.
  datePartitionDelimiter?: string;

  // Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. Default is `rle_dictionary`.
  encodingType?: string;

  // JSON document that describes how AWS DMS should interpret the data.
  externalTableDefinition?: string;
}

export function dms_EndpointS3Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableStatistics",
      "Whether to enable statistics for Parquet pages and row groups. Default is `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "rfc4180",
      "For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "datePartitionEnabled",
      "Partition S3 bucket folders based on transaction commit dates. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preserveTransactions",
      "Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encodingType",
      "Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. Default is `rle_dictionary`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalTableDefinition",
      "JSON document that describes how AWS DMS should interpret the data.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "parquetTimestampInMillisecond",
      "Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataFormat",
      "Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`. Default is `csv`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dataPageSize",
      "Size of one data page in bytes. Default is `1048576` (1 MiB).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datePartitionDelimiter",
      "Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. Default is `SLASH`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cdcMaxBatchInterval",
      "Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. Default is `60`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useTaskStartTimeForFullLoadTimestamp",
      "When set to true, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to true, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time. When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "addColumnName",
      "Whether to add column name information to the .csv output file. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cdcInsertsAndUpdates",
      "Whether to write insert and update operations to .csv or .parquet output files. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cannedAclForObjects",
      "Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "S3 bucket name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "csvRowDelimiter",
      "Delimiter used to separate rows in the source files. Default is `\\n`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ignoreHeaderRows",
      "When this value is set to `1`, DMS ignores the first row header in a .csv file. Default is `0`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compressionType",
      "Set to compress target files. Default is `NONE`. Valid values are `GZIP` and `NONE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useCsvNoSupValue",
      "Whether to use `csv_no_sup_value` for columns not included in the supplemental log.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "csvNullValue",
      "String to as null when writing to the target.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cdcInsertsOnly",
      "Whether to write insert operations to .csv or .parquet output files. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "csvNoSupValue",
      "String to use for all columns not included in the supplemental log.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFileSize",
      "Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. Default is `1048576` (1 GB).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "glueCatalogGeneration",
      "Whether to integrate AWS Glue Data Catalog with an Amazon S3 target. See [Using AWS Glue Data Catalog with an Amazon S3 target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.GlueCatalog) for more information. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cdcMinFileSize",
      "Minimum file size condition as defined in kilobytes to output a file to Amazon S3. Default is `32000`. **NOTE:** Previously, this setting was measured in megabytes but now represents kilobytes. Update configurations accordingly.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "ARN of the IAM Role with permissions to read from or write to the S3 Bucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datePartitionSequence",
      "Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. Default is `YYYYMMDD`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeOpForFullLoad",
      "Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "csvDelimiter",
      "Delimiter used to separate columns in the source files. Default is `,`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rowGroupLength",
      "Number of rows in a row group. Default is `10000`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverSideEncryptionKmsKeyId",
      "ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dictPageSizeLimit",
      "Maximum size in bytes of an encoded dictionary page of a column. Default is `1048576` (1 MiB).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parquetVersion",
      "Version of the .parquet file format. Default is `parquet-1-0`. Valid values are `parquet-1-0` and `parquet-2-0`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketFolder",
      "S3 object prefix.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampColumnName",
      "Column to add with timestamp information to the endpoint data for an Amazon S3 target.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionMode",
      "Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. Default is `SSE_S3`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cdcPath",
      "Folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later.",
      () => [],
      false,
      false,
    ),
  ];
}
