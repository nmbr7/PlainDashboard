import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_DistributionOrderedCacheBehaviorFunctionAssociation {
  // Specific event to trigger this function. Valid values: `viewer-request` or `viewer-response`.
  eventType?: string;

  // ARN of the CloudFront function.
  functionArn?: string;
}

export function cloudfront_DistributionOrderedCacheBehaviorFunctionAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventType",
      "Specific event to trigger this function. Valid values: `viewer-request` or `viewer-response`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "functionArn",
      "ARN of the CloudFront function.",
      [],
      true,
      false,
    ),
  ];
}
