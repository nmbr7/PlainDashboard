import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  macie_FindingsFilterFindingCriteriaCriterion,
  macie_FindingsFilterFindingCriteriaCriterion_GetTypes,
} from "./macie_FindingsFilterFindingCriteriaCriterion";

export interface macie_FindingsFilterFindingCriteria {
  // A condition that specifies the property, operator, and one or more values to use to filter the results.  (documented below)
  criterions?: Array<macie_FindingsFilterFindingCriteriaCriterion>;
}

export function macie_FindingsFilterFindingCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "criterions",
      "A condition that specifies the property, operator, and one or more values to use to filter the results.  (documented below)",
      macie_FindingsFilterFindingCriteriaCriterion_GetTypes(),
      false,
      false,
    ),
  ];
}
