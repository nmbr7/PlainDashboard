import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_FeatureGroupOnlineStoreConfigTtlDuration,
  sagemaker_FeatureGroupOnlineStoreConfigTtlDuration_GetTypes,
} from "./sagemaker_FeatureGroupOnlineStoreConfigTtlDuration";
import {
  sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig,
  sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig_GetTypes,
} from "./sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig";

export interface sagemaker_FeatureGroupOnlineStoreConfig {
  // Time to live duration, where the record is hard deleted after the expiration time is reached; ExpiresAt = EventTime + TtlDuration.. See TTl Duration Below.
  ttlDuration?: sagemaker_FeatureGroupOnlineStoreConfigTtlDuration;

  // Set to `true` to disable the automatic creation of an AWS Glue table when configuring an OfflineStore.
  enableOnlineStore?: boolean;

  // Security config for at-rest encryption of your OnlineStore. See Security Config Below.
  securityConfig?: sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig;

  // Option for different tiers of low latency storage for real-time data retrieval. Valid values are `Standard`, or `InMemory`.
  storageType?: string;
}

export function sagemaker_FeatureGroupOnlineStoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ttlDuration",
      "Time to live duration, where the record is hard deleted after the expiration time is reached; ExpiresAt = EventTime + TtlDuration.. See TTl Duration Below.",
      sagemaker_FeatureGroupOnlineStoreConfigTtlDuration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableOnlineStore",
      "Set to `true` to disable the automatic creation of an AWS Glue table when configuring an OfflineStore.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "securityConfig",
      "Security config for at-rest encryption of your OnlineStore. See Security Config Below.",
      sagemaker_FeatureGroupOnlineStoreConfigSecurityConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageType",
      "Option for different tiers of low latency storage for real-time data retrieval. Valid values are `Standard`, or `InMemory`.",
      [],
      false,
      true,
    ),
  ];
}
