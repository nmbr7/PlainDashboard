import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_SloWindowsBasedSliMetricMeanInRangeRange {
  /*
max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
*/
  max?: number;

  /*
Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
*/
  min?: number;
}

export function monitoring_SloWindowsBasedSliMetricMeanInRangeRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "max",
      'max value for the range (inclusive). If not given,\nwill be set to "infinity", defining an open range\n">= range.min"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "min",
      'Min value for the range (inclusive). If not given,\nwill be set to "-infinity", defining an open range\n"< range.max"',
      [],
      false,
      false,
    ),
  ];
}
