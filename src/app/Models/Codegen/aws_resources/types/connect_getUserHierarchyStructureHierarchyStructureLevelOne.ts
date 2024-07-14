import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface connect_getUserHierarchyStructureHierarchyStructureLevelOne {
  // ARN of the hierarchy level.
  arn?: string;

  // The identifier of the hierarchy level.
  id?: string;

  // Name of the user hierarchy level. Must not be more than 50 characters.
  name?: string;
}

export function connect_getUserHierarchyStructureHierarchyStructureLevelOne_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the hierarchy level.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the hierarchy level.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the user hierarchy level. Must not be more than 50 characters.",
      [],
      true,
      false,
    ),
  ];
}
