import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_GlobalForwardingRuleMetadataFilterFilterLabel,
  compute_GlobalForwardingRuleMetadataFilterFilterLabel_GetTypes,
} from "./compute_GlobalForwardingRuleMetadataFilterFilterLabel";

export interface compute_GlobalForwardingRuleMetadataFilter {
  /*
The list of label value pairs that must match labels in the
provided metadata based on filterMatchCriteria
This list must not be empty and can have at the most 64 entries.
Structure is documented below.
*/
  filterLabels?: Array<compute_GlobalForwardingRuleMetadataFilterFilterLabel>;

  /*
Specifies how individual filterLabel matches within the list of
filterLabels contribute towards the overall metadataFilter match.
MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata.
Possible values are: `MATCH_ANY`, `MATCH_ALL`.
*/
  filterMatchCriteria?: string;
}

export function compute_GlobalForwardingRuleMetadataFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filterLabels",
      "The list of label value pairs that must match labels in the\nprovided metadata based on filterMatchCriteria\nThis list must not be empty and can have at the most 64 entries.\nStructure is documented below.",
      () => compute_GlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterMatchCriteria",
      "Specifies how individual filterLabel matches within the list of\nfilterLabels contribute towards the overall metadataFilter match.\nMATCH_ANY - At least one of the filterLabels must have a matching\nlabel in the provided metadata.\nMATCH_ALL - All filterLabels must have matching labels in the\nprovided metadata.\nPossible values are: `MATCH_ANY`, `MATCH_ALL`.",
      () => [],
      true,
      true,
    ),
  ];
}
