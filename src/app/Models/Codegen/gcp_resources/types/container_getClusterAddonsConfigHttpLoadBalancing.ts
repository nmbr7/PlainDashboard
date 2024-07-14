import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterAddonsConfigHttpLoadBalancing {
  //
  disabled?: boolean;
}

export function container_getClusterAddonsConfigHttpLoadBalancing_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Bool, "disabled", "", [], true, false)];
}
