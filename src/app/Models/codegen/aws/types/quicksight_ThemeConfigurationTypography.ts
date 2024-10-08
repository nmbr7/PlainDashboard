import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_ThemeConfigurationTypographyFontFamily,
  quicksight_ThemeConfigurationTypographyFontFamily_GetTypes,
} from "./quicksight_ThemeConfigurationTypographyFontFamily";

export interface quicksight_ThemeConfigurationTypography {
  // Determines the list of font families. Maximum number of 5 items. See font_families.
  fontFamilies?: Array<quicksight_ThemeConfigurationTypographyFontFamily>;
}

export function quicksight_ThemeConfigurationTypography_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fontFamilies",
      "Determines the list of font families. Maximum number of 5 items. See font_families.",
      () => quicksight_ThemeConfigurationTypographyFontFamily_GetTypes(),
      false,
      false,
    ),
  ];
}
