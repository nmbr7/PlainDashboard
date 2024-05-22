import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketReplicationConfigRuleDeleteMarkerReplication {
  // Whether delete markers should be replicated. Either `"Enabled"` or `"Disabled"`.
  status?: string;
}

export function s3_BucketReplicationConfigRuleDeleteMarkerReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      'Whether delete markers should be replicated. Either `"Enabled"` or `"Disabled"`.',
      [],
      true,
      false,
    ),
  ];
}
