import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  // The name of the App Image Config.
  appImageConfigName?: string;

  // The name of the Custom Image.
  imageName?: string;

  // The version number of the Custom Image.
  imageVersionNumber?: number;
}

export function sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imageName",
      "The name of the Custom Image.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "imageVersionNumber",
      "The version number of the Custom Image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appImageConfigName",
      "The name of the App Image Config.",
      [],
      true,
      false,
    ),
  ];
}
