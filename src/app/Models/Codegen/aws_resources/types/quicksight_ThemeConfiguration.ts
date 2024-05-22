import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_ThemeConfigurationTypography,
  quicksight_ThemeConfigurationTypography_GetTypes,
} from "./quicksight_ThemeConfigurationTypography";
import {
  quicksight_ThemeConfigurationUiColorPalette,
  quicksight_ThemeConfigurationUiColorPalette_GetTypes,
} from "./quicksight_ThemeConfigurationUiColorPalette";
import {
  quicksight_ThemeConfigurationDataColorPalette,
  quicksight_ThemeConfigurationDataColorPalette_GetTypes,
} from "./quicksight_ThemeConfigurationDataColorPalette";
import {
  quicksight_ThemeConfigurationSheet,
  quicksight_ThemeConfigurationSheet_GetTypes,
} from "./quicksight_ThemeConfigurationSheet";

export interface quicksight_ThemeConfiguration {
  // Determines the typography options. See typography.
  typography?: quicksight_ThemeConfigurationTypography;

  // Color properties that apply to the UI and to charts, excluding the colors that apply to data. See ui_color_palette.
  uiColorPalette?: quicksight_ThemeConfigurationUiColorPalette;

  // Color properties that apply to chart data colors. See data_color_palette.
  dataColorPalette?: quicksight_ThemeConfigurationDataColorPalette;

  // Display options related to sheets. See sheet.
  sheet?: quicksight_ThemeConfigurationSheet;
}

export function quicksight_ThemeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dataColorPalette",
      "Color properties that apply to chart data colors. See data_color_palette.",
      quicksight_ThemeConfigurationDataColorPalette_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sheet",
      "Display options related to sheets. See sheet.",
      quicksight_ThemeConfigurationSheet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "typography",
      "Determines the typography options. See typography.",
      quicksight_ThemeConfigurationTypography_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uiColorPalette",
      "Color properties that apply to the UI and to charts, excluding the colors that apply to data. See ui_color_palette.",
      quicksight_ThemeConfigurationUiColorPalette_GetTypes(),
      false,
      false,
    ),
  ];
}
