import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataplex_DatascanDataQualitySpecRuleRegexExpectation {
  // A regular expression the column value is expected to match.
  regex?: string;
}

export function dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regex",
      "A regular expression the column value is expected to match.",
      () => [],
      true,
      false,
    ),
  ];
}
