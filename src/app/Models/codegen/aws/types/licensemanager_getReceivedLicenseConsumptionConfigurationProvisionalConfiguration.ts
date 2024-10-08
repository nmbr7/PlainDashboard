import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration {
  // Maximum time for the provisional configuration, in minutes.
  maxTimeToLiveInMinutes?: number;
}

export function licensemanager_getReceivedLicenseConsumptionConfigurationProvisionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxTimeToLiveInMinutes",
      "Maximum time for the provisional configuration, in minutes.",
      () => [],
      true,
      false,
    ),
  ];
}
