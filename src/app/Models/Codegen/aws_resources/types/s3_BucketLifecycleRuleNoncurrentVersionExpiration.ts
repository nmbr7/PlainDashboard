import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketLifecycleRuleNoncurrentVersionExpiration {
  // Specifies the number of days noncurrent object versions expire.
  days?: number;
}

export function s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Specifies the number of days noncurrent object versions expire.",
      [],
      false,
      false,
    ),
  ];
}
