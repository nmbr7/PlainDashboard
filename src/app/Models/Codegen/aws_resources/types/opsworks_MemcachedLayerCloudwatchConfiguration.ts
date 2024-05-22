import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_MemcachedLayerCloudwatchConfigurationLogStream,
  opsworks_MemcachedLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_MemcachedLayerCloudwatchConfigurationLogStream";

export interface opsworks_MemcachedLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_MemcachedLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_MemcachedLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_MemcachedLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
