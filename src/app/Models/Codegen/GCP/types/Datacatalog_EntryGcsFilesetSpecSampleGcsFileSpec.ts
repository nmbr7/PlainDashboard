import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec {
  /*
(Output)
The full file path
*/
  filePath?: string;

  /*
(Output)
The size of the file, in bytes.
*/
  sizeBytes?: number;
}

export function datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "filePath",
      "(Output)\nThe full file path",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeBytes",
      "(Output)\nThe size of the file, in bytes.",
      [],
      false,
      false,
    ),
  ];
}
