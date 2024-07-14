import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getInstanceTypeInferenceAccelerator {
  //
  manufacturer?: string;

  //
  name?: string;

  //
  count?: number;
}

export function ec2_getInstanceTypeInferenceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "manufacturer", "", [], true, false),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(InputType.Number, "count", "", [], true, false),
  ];
}
