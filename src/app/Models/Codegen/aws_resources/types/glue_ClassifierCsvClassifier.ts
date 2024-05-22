import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_ClassifierCsvClassifier {
  // Enables the processing of files that contain only one column.
  allowSingleColumn?: boolean;

  // Enables the custom datatype to be configured.
  customDatatypeConfigured?: boolean;

  // A list of strings representing column names.
  headers?: Array<string>;

  //
  serde?: string;

  // Indicates whether the CSV file contains a header. This can be one of "ABSENT", "PRESENT", or "UNKNOWN".
  containsHeader?: string;

  // A list of supported custom datatypes. Valid values are `BINARY`, `BOOLEAN`, `DATE`, `DECIMAL`, `DOUBLE`, `FLOAT`, `INT`, `LONG`, `SHORT`, `STRING`, `TIMESTAMP`.
  customDatatypes?: Array<string>;

  // The delimiter used in the Csv to separate columns.
  delimiter?: string;

  // Specifies whether to trim column values.
  disableValueTrimming?: boolean;

  // A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.
  quoteSymbol?: string;
}

export function glue_ClassifierCsvClassifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "The delimiter used in the Csv to separate columns.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "quoteSymbol",
      "A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customDatatypes",
      "A list of supported custom datatypes. Valid values are `BINARY`, `BOOLEAN`, `DATE`, `DECIMAL`, `DOUBLE`, `FLOAT`, `INT`, `LONG`, `SHORT`, `STRING`, `TIMESTAMP`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableValueTrimming",
      "Specifies whether to trim column values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowSingleColumn",
      "Enables the processing of files that contain only one column.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "customDatatypeConfigured",
      "Enables the custom datatype to be configured.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "A list of strings representing column names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "serde", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "containsHeader",
      'Indicates whether the CSV file contains a header. This can be one of "ABSENT", "PRESENT", or "UNKNOWN".',
      [],
      false,
      false,
    ),
  ];
}
