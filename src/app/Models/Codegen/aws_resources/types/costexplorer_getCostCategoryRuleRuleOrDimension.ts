import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface costexplorer_getCostCategoryRuleRuleOrDimension {
  // Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`.
  matchOptions?: Array<string>;

  // Parameter values.
  values?: Array<string>;

  // Key for the tag.
  key?: string;
}

export function costexplorer_getCostCategoryRuleRuleOrDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matchOptions",
      "Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Parameter values.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the tag.",
      [],
      true,
      false,
    ),
  ];
}
