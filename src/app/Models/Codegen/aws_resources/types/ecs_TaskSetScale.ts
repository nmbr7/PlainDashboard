import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_TaskSetScale {
  // The unit of measure for the scale value. Default: `PERCENT`.
  unit?: string;

  // The value, specified as a percent total of a service's `desiredCount`, to scale the task set. Defaults to `0` if not specified. Accepted values are numbers between 0.0 and 100.0.
  value?: number;
}

export function ecs_TaskSetScale_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "The unit of measure for the scale value. Default: `PERCENT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The value, specified as a percent total of a service's `desiredCount`, to scale the task set. Defaults to `0` if not specified. Accepted values are numbers between 0.0 and 100.0.",
      [],
      false,
      false,
    ),
  ];
}
