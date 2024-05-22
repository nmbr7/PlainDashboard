import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainLogPublishingOption {
  // ARN of the Cloudwatch log group to which log needs to be published.
  cloudwatchLogGroupArn?: string;

  // Whether given log publishing option is enabled or not.
  enabled?: boolean;

  // Type of OpenSearch log. Valid values: `INDEX_SLOW_LOGS`, `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `AUDIT_LOGS`.
  logType?: string;
}

export function opensearch_DomainLogPublishingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logType",
      "Type of OpenSearch log. Valid values: `INDEX_SLOW_LOGS`, `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `AUDIT_LOGS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchLogGroupArn",
      "ARN of the Cloudwatch log group to which log needs to be published.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether given log publishing option is enabled or not.",
      [],
      false,
      false,
    ),
  ];
}
