import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketReplicationConfigurationRuleDestinationReplicationTime {
  // Threshold within which objects are to be replicated. The only valid value is `15`.
  minutes?: number;

  // The status of RTC. Either `Enabled` or `Disabled`.
  status?: string;
}

export function s3_BucketReplicationConfigurationRuleDestinationReplicationTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Threshold within which objects are to be replicated. The only valid value is `15`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of RTC. Either `Enabled` or `Disabled`.",
      [],
      false,
      false,
    ),
  ];
}
