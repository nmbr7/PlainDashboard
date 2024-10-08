import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketLifecycleConfigurationV2RuleTransition {
  // Date objects are transitioned to the specified storage class. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`.
  date?: string;

  // Number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer. If both `days` and `date` are not specified, defaults to `0`. Valid values depend on `storage_class`, see [Transition objects using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html) for more details.
  days?: number;

  // Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`.
  storageClass?: string;
}

export function s3_BucketLifecycleConfigurationV2RuleTransition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "date",
      "Date objects are transitioned to the specified storage class. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer. If both `days` and `date` are not specified, defaults to `0`. Valid values depend on `storage_class`, see [Transition objects using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html) for more details.",
      () => [],
      false,
      false,
    ),
  ];
}
