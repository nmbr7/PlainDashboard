import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_getTagsFilterNot,
  costexplorer_getTagsFilterNot_GetTypes,
} from "./costexplorer_getTagsFilterNot";
import {
  costexplorer_getTagsFilterOr,
  costexplorer_getTagsFilterOr_GetTypes,
} from "./costexplorer_getTagsFilterOr";
import {
  costexplorer_getTagsFilterTags,
  costexplorer_getTagsFilterTags_GetTypes,
} from "./costexplorer_getTagsFilterTags";
import {
  costexplorer_getTagsFilterAnd,
  costexplorer_getTagsFilterAnd_GetTypes,
} from "./costexplorer_getTagsFilterAnd";
import {
  costexplorer_getTagsFilterCostCategory,
  costexplorer_getTagsFilterCostCategory_GetTypes,
} from "./costexplorer_getTagsFilterCostCategory";
import {
  costexplorer_getTagsFilterDimension,
  costexplorer_getTagsFilterDimension_GetTypes,
} from "./costexplorer_getTagsFilterDimension";

export interface costexplorer_getTagsFilter {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_getTagsFilterCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_getTagsFilterDimension;

  // Return results that match both `Dimension` object.
  not?: costexplorer_getTagsFilterNot;

  // Return results that match both `Dimension` object.
  ors?: Array<costexplorer_getTagsFilterOr>;

  // Tags that match your request.
  tags?: costexplorer_getTagsFilterTags;

  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_getTagsFilterAnd>;
}

export function costexplorer_getTagsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      costexplorer_getTagsFilterAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getTagsFilterCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getTagsFilterDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "not",
      "Return results that match both `Dimension` object.",
      costexplorer_getTagsFilterNot_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match both `Dimension` object.",
      costexplorer_getTagsFilterOr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Tags that match your request.",
      costexplorer_getTagsFilterTags_GetTypes(),
      false,
      false,
    ),
  ];
}
