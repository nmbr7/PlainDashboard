import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault,
  s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault_GetTypes,
} from "./s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault";

export interface s3_BucketServerSideEncryptionConfigurationV2Rule {
  // Single object for setting server-side encryption by default. See below.
  applyServerSideEncryptionByDefault?: s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault;

  // Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.
  bucketKeyEnabled?: boolean;
}

export function s3_BucketServerSideEncryptionConfigurationV2Rule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "applyServerSideEncryptionByDefault",
      "Single object for setting server-side encryption by default. See below.",
      s3_BucketServerSideEncryptionConfigurationV2RuleApplyServerSideEncryptionByDefault_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "bucketKeyEnabled",
      "Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.",
      [],
      false,
      false,
    ),
  ];
}
