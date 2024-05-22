import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_RouteSpecHttpRouteMatchHeaderMatchRange {
  // End of the range.
  end?: number;

  // Start of the range.
  start?: number;
}

export function appmesh_RouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "end",
      "End of the range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "start",
      "Start of the range.",
      [],
      true,
      false,
    ),
  ];
}
