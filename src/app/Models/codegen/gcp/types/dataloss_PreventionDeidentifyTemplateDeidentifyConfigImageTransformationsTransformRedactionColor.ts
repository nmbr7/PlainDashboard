import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor {
  // The amount of red in the color as a value in the interval [0, 1].
  red?: number;

  // The amount of blue in the color as a value in the interval [0, 1].
  blue?: number;

  // The amount of green in the color as a value in the interval [0, 1].
  green?: number;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "blue",
      "The amount of blue in the color as a value in the interval [0, 1].",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "green",
      "The amount of green in the color as a value in the interval [0, 1].",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "red",
      "The amount of red in the color as a value in the interval [0, 1].",
      () => [],
      false,
      false,
    ),
  ];
}
