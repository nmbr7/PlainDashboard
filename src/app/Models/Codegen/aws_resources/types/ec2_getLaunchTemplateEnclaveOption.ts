import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getLaunchTemplateEnclaveOption {
  //
  enabled?: boolean;
}

export function ec2_getLaunchTemplateEnclaveOption_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false)];
}
