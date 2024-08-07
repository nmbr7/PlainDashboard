import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InstanceAutomatedBackupsReplicationArgs {
  // The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.
  kmsKeyId?: string;

  // A URL that contains a [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) signed request for the [`StartDBInstanceAutomatedBackupsReplication`](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html) action to be called in the AWS Region of the source DB instance.
  preSignedUrl?: string;

  // The retention period for the replicated automated backups, defaults to `7`.
  retentionPeriod?: number;

  // The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`.
  sourceDbInstanceArn?: string;
}
export class InstanceAutomatedBackupsReplication extends Resource {
  // The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.
  public kmsKeyId?: string;

  // A URL that contains a [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) signed request for the [`StartDBInstanceAutomatedBackupsReplication`](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html) action to be called in the AWS Region of the source DB instance.
  public preSignedUrl?: string;

  // The retention period for the replicated automated backups, defaults to `7`.
  public retentionPeriod?: number;

  // The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`.
  public sourceDbInstanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preSignedUrl",
        "A URL that contains a [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) signed request for the [`StartDBInstanceAutomatedBackupsReplication`](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html) action to be called in the AWS Region of the source DB instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriod",
        "The retention period for the replicated automated backups, defaults to `7`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDbInstanceArn",
        "The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`.",
        [],
        true,
        true,
      ),
    ];
  }
}
