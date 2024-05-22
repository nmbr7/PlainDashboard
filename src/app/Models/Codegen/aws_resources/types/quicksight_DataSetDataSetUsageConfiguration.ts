import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetDataSetUsageConfiguration {
  // Controls whether a child dataset of a direct query can use this dataset as a source.
  disableUseAsDirectQuerySource?: boolean;

  // Controls whether a child dataset that's stored in QuickSight can use this dataset as a source.
  disableUseAsImportedSource?: boolean;
}

export function quicksight_DataSetDataSetUsageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disableUseAsDirectQuerySource",
      "Controls whether a child dataset of a direct query can use this dataset as a source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableUseAsImportedSource",
      "Controls whether a child dataset that's stored in QuickSight can use this dataset as a source.",
      [],
      false,
      false,
    ),
  ];
}
