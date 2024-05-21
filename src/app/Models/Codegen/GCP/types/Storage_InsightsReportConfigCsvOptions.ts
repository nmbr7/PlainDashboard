import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_InsightsReportConfigCsvOptions {
  /*
The boolean that indicates whether or not headers are included in the inventory report CSV file.

- - -
*/
  headerRequired?: boolean;

  // The character used to separate the records in the inventory report CSV file.
  recordSeparator?: string;

  // The delimiter used to separate the fields in the inventory report CSV file.
  delimiter?: string;
}

export function storage_InsightsReportConfigCsvOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "The delimiter used to separate the fields in the inventory report CSV file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "headerRequired",
      "The boolean that indicates whether or not headers are included in the inventory report CSV file.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordSeparator",
      "The character used to separate the records in the inventory report CSV file.",
      [],
      false,
      false,
    ),
  ];
}
