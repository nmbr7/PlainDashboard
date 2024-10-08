import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigqueryanalyticshub_ListingRestrictedExportConfig {
  // If true, enable restricted export.
  enabled?: boolean;

  // If true, restrict export of query result derived from restricted linked dataset table.
  restrictQueryResult?: boolean;
}

export function bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "restrictQueryResult",
      "If true, restrict export of query result derived from restricted linked dataset table.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "If true, enable restricted export.",
      () => [],
      false,
      false,
    ),
  ];
}
