import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  firestore_FieldIndexConfigIndex,
  firestore_FieldIndexConfigIndex_GetTypes,
} from "./firestore_FieldIndexConfigIndex";

export interface firestore_FieldIndexConfig {
  /*
The indexes to configure on the field. Order or array contains must be specified.
Structure is documented below.
*/
  indexes?: Array<firestore_FieldIndexConfigIndex>;
}

export function firestore_FieldIndexConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "indexes",
      "The indexes to configure on the field. Order or array contains must be specified.\nStructure is documented below.",
      firestore_FieldIndexConfigIndex_GetTypes(),
      false,
      false,
    ),
  ];
}
