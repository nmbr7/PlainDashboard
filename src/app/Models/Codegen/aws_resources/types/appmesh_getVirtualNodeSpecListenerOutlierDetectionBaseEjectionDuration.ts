import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  //
  unit?: string;

  //
  value?: number;
}

export function appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "value", "", [], true, false),
    new DynamicUIProps(InputType.String, "unit", "", [], true, false),
  ];
}
