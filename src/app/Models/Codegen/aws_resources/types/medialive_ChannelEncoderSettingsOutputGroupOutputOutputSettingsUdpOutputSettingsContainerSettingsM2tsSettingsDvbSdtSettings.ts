import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings {
  //
  serviceProviderName?: string;

  //
  outputSdt?: string;

  //
  repInterval?: number;

  //
  serviceName?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceProviderName",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "outputSdt", "", [], false, false),
    new DynamicUIProps(InputType.Number, "repInterval", "", [], false, false),
    new DynamicUIProps(InputType.String, "serviceName", "", [], false, false),
  ];
}
