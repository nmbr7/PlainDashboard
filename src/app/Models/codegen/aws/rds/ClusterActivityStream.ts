import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ClusterActivityStreamArgs {
  // Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included. Defaults `false`.
  engineNativeAuditFieldsIncluded?: boolean;

  // The AWS KMS key identifier for encrypting messages in the database activity stream. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
  kmsKeyId?: string;

  // Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. One of: `sync`, `async`.
  mode?: string;

  // The Amazon Resource Name (ARN) of the DB cluster.
  resourceArn?: string;
}
export class ClusterActivityStream extends DS_Resource {
  // The Amazon Resource Name (ARN) of the DB cluster.
  public resourceArn?: string;

  // Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included. Defaults `false`.
  public engineNativeAuditFieldsIncluded?: boolean;

  // The name of the Amazon Kinesis data stream to be used for the database activity stream.
  public kinesisStreamName?: string;

  // The AWS KMS key identifier for encrypting messages in the database activity stream. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
  public kmsKeyId?: string;

  // Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. One of: `sync`, `async`.
  public mode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The Amazon Resource Name (ARN) of the DB cluster.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "engineNativeAuditFieldsIncluded",
        "Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included. Defaults `false`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The AWS KMS key identifier for encrypting messages in the database activity stream. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "mode",
        "Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. One of: `sync`, `async`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
