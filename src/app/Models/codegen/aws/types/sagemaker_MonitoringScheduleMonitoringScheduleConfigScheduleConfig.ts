import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig {
  // A cron expression that describes details about the monitoring schedule. For example, and hourly schedule would be `cron(0 - ? - - -)`.
  scheduleExpression?: string;
}

export function sagemaker_MonitoringScheduleMonitoringScheduleConfigScheduleConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "A cron expression that describes details about the monitoring schedule. For example, and hourly schedule would be `cron(0 * ? * * *)`.",
      () => [],
      true,
      false,
    ),
  ];
}
