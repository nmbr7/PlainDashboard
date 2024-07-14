import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pipes_PipeSourceParametersFilterCriteriaFilter {
  // The event pattern. At most 4096 characters.
  pattern?: string;
}

export function pipes_PipeSourceParametersFilterCriteriaFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pattern",
      "The event pattern. At most 4096 characters.",
      [],
      true,
      false,
    ),
  ];
}
