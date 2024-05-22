import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeSourceParametersFilterCriteriaFilter,
  pipes_PipeSourceParametersFilterCriteriaFilter_GetTypes,
} from "./pipes_PipeSourceParametersFilterCriteriaFilter";

export interface pipes_PipeSourceParametersFilterCriteria {
  // An array of up to 5 event patterns. Detailed below.
  filters?: Array<pipes_PipeSourceParametersFilterCriteriaFilter>;
}

export function pipes_PipeSourceParametersFilterCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "An array of up to 5 event patterns. Detailed below.",
      pipes_PipeSourceParametersFilterCriteriaFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
