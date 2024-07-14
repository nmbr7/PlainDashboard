import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration";
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration";

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration {
  // Monitoring configurations for the persistent application UI.
  persistentAppUi?: string;

  // Amazon S3 configuration for monitoring log publishing.
  s3MonitoringConfiguration?: emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;

  // Monitoring configurations for CloudWatch.
  cloudWatchMonitoringConfiguration?: emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "persistentAppUi",
      "Monitoring configurations for the persistent application UI.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3MonitoringConfiguration",
      "Amazon S3 configuration for monitoring log publishing.",
      emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudWatchMonitoringConfiguration",
      "Monitoring configurations for CloudWatch.",
      emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration_GetTypes(),
      false,
      true,
    ),
  ];
}
