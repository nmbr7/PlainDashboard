import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList,
  lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList";

export interface lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification {
  //
  defaultValueLists?: Array<lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList>;
}

export function lex_V2modelsSlotValueElicitationSettingDefaultValueSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "defaultValueLists",
      "",
      lex_V2modelsSlotValueElicitationSettingDefaultValueSpecificationDefaultValueList_GetTypes(),
      false,
      false,
    ),
  ];
}
