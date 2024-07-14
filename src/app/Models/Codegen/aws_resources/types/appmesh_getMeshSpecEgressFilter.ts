import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getMeshSpecEgressFilter {
  //
  type?: string;
}

export function appmesh_getMeshSpecEgressFilter_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "type", "", [], true, false)];
}
