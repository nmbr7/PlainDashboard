import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface verifiedpermissions_getPolicyStoreValidationSetting {
  //
  mode?: string;
}

export function verifiedpermissions_getPolicyStoreValidationSetting_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "mode", "", [], true, false)];
}
