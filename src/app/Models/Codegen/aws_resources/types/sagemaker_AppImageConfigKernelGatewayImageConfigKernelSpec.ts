import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec {
  // The display name of the kernel.
  displayName?: string;

  // The name of the kernel.
  name?: string;
}

export function sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name of the kernel.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the kernel.",
      [],
      true,
      false,
    ),
  ];
}
