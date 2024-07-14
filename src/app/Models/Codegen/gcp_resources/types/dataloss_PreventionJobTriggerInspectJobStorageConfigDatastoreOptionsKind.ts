import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind {
  // The name of the Datastore kind.
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Datastore kind.",
      [],
      true,
      false,
    ),
  ];
}
