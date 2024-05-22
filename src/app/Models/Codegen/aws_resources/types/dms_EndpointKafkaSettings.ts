import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointKafkaSettings {
  // Maximum size in bytes for records created on the endpoint Default is `1,000,000`.
  messageMaxBytes?: number;

  // ARN for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.
  sslCaCertificateArn?: string;

  // Kafka broker location. Specify in the form broker-hostname-or-ip:port.
  broker?: string;

  // Output format for the records created on the endpoint. Message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
  messageFormat?: string;

  // Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `no_hex_prefix` endpoint setting to enable migration of RAW data type columns without adding the `'0x'` prefix.
  noHexPrefix?: boolean;

  // Secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
  saslPassword?: string;

  // Secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
  saslUsername?: string;

  // ARN of the client certificate used to securely connect to a Kafka target endpoint.
  sslClientCertificateArn?: string;

  // Shows the partition value within the Kafka message output unless the partition type is `schema-table-type`. Default is `false`.
  includePartitionValue?: boolean;

  // ARN for the client private key used to securely connect to a Kafka target endpoint.
  sslClientKeyArn?: string;

  // Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. Default is `false`.
  includeControlDetails?: boolean;

  // Include NULL and empty columns for records migrated to the endpoint. Default is `false`.
  includeNullAndEmpty?: boolean;

  // Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. Default is `false`.
  includeTableAlterOperations?: boolean;

  // Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). Default is `false`.
  includeTransactionDetails?: boolean;

  // Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. Default is `false`.
  partitionIncludeSchemaTable?: boolean;

  // Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include `ssl-encryption`, `ssl-authentication`, and `sasl-ssl`. `sasl-ssl` requires `sasl_username` and `sasl_password`.
  securityProtocol?: string;

  // Password for the client private key used to securely connect to a Kafka target endpoint.
  sslClientKeyPassword?: string;

  // Kafka topic for migration. Default is `kafka-default-topic`.
  topic?: string;
}

export function dms_EndpointKafkaSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "noHexPrefix",
      "Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `no_hex_prefix` endpoint setting to enable migration of RAW data type columns without adding the `'0x'` prefix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTransactionDetails",
      "Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityProtocol",
      "Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include `ssl-encryption`, `ssl-authentication`, and `sasl-ssl`. `sasl-ssl` requires `sasl_username` and `sasl_password`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeNullAndEmpty",
      "Include NULL and empty columns for records migrated to the endpoint. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyPassword",
      "Password for the client private key used to securely connect to a Kafka target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "saslPassword",
      "Secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientCertificateArn",
      "ARN of the client certificate used to securely connect to a Kafka target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyArn",
      "ARN for the client private key used to securely connect to a Kafka target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeControlDetails",
      "Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topic",
      "Kafka topic for migration. Default is `kafka-default-topic`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "messageMaxBytes",
      "Maximum size in bytes for records created on the endpoint Default is `1,000,000`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "saslUsername",
      "Secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTableAlterOperations",
      "Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "partitionIncludeSchemaTable",
      "Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "ARN for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "broker",
      "Kafka broker location. Specify in the form broker-hostname-or-ip:port.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageFormat",
      "Output format for the records created on the endpoint. Message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includePartitionValue",
      "Shows the partition value within the Kafka message output unless the partition type is `schema-table-type`. Default is `false`.",
      [],
      false,
      false,
    ),
  ];
}
