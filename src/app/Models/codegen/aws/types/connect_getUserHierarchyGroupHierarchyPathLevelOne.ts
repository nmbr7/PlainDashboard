import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_getUserHierarchyGroupHierarchyPathLevelOne {
  // Returns information on a specific hierarchy group by name
  name?: string;

  // ARN of the hierarchy group.
  arn?: string;

  // The identifier of the hierarchy group.
  id?: string;
}

export function connect_getUserHierarchyGroupHierarchyPathLevelOne_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Returns information on a specific hierarchy group by name",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the hierarchy group.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the hierarchy group.",
      () => [],
      true,
      false,
    ),
  ];
}