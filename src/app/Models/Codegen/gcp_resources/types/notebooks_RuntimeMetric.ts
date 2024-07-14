import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface notebooks_RuntimeMetric {
  /*
(Output)
Contains runtime daemon metrics, such as OS and kernels and
sessions stats.
*/
  systemMetrics?: Map<string, string>;
}

export function notebooks_RuntimeMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "systemMetrics",
      "(Output)\nContains runtime daemon metrics, such as OS and kernels and\nsessions stats.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
