import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson,
  appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes,
} from "./appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson";

export interface appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat {
  //
  jsons?: Array<appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson>;

  //
  text?: string;
}

export function appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "jsons",
      "",
      () =>
        appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "text", "", () => [], true, false),
  ];
}
