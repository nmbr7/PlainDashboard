import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange,
  appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange";

export interface appmesh_getRouteSpecHttp2RouteMatchHeaderMatch {
  //
  suffix?: string;

  //
  exact?: string;

  //
  prefix?: string;

  //
  ranges?: Array<appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange>;

  //
  regex?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ranges",
      "",
      () => appmesh_getRouteSpecHttp2RouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "regex", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "suffix", "", () => [], true, false),
  ];
}
